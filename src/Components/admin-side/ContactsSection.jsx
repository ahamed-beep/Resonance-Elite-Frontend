"use client";

import { useState, useEffect } from "react";
import { Mail, Trash2, Eye } from "lucide-react";
import api from "@/lib/axios";

export default function ContactsSection() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState(null);
  const [deleteId, setDeleteId] = useState(null);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    setLoading(true);
    try {
      const res = await api.get("/contacts");
      setContacts(res.data || []);
    } catch {
      setContacts([]);
    } finally {
      setLoading(false);
    }
  };

  const handleMarkRead = async (id) => {
    try {
      await api.patch(`/contacts/${id}/read`);
      setContacts((prev) =>
        prev.map((c) => (c.id === id ? { ...c, status: "read" } : c))
      );
      if (selected?.id === id) {
        setSelected((prev) => (prev ? { ...prev, status: "read" } : null));
      }
    } catch (err) {
      console.error("Failed to mark as read:", err);
    }
  };

  // Row click par auto-read logic integrated
  const handleRowClick = (contact) => {
    setSelected(contact);
    if (contact.status === "unread") {
      handleMarkRead(contact.id);
    }
  };

  const handleDelete = async (id) => {
    try {
      await api.delete(`/contacts/${id}`);
      // Optimistic state update: Bina reload kiye instant delete
      setContacts((prev) => prev.filter((c) => c.id !== id));
      setDeleteId(null);
      if (selected?.id === id) setSelected(null);
    } catch (err) {
      console.error("Failed to delete contact:", err);
    }
  };

  const unreadCount = contacts.filter((c) => c.status === "unread").length;

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-white text-sm font-light tracking-[4px] uppercase">
            Contacts
          </h2>
          <p className="text-zinc-500 text-xs mt-1">
            {contacts.length} total &mdash;{" "}
            <span className="text-emerald-400">{unreadCount} unread</span>
          </p>
        </div>
      </div>

      {loading ? (
        <div className="text-zinc-500 text-xs tracking-wider text-center py-12">
          Loading...
        </div>
      ) : contacts.length === 0 ? (
        <div className="bg-zinc-900 border border-zinc-800 rounded-sm p-8 text-center">
          <Mail size={32} className="text-zinc-700 mx-auto mb-3" />
          <p className="text-zinc-500 text-xs tracking-wider uppercase">
            No contacts yet
          </p>
        </div>
      ) : (
        <div className="bg-zinc-900 border border-zinc-800 rounded-sm overflow-hidden">
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b border-zinc-800">
                <th className="text-left px-4 py-3 text-zinc-400 tracking-[2px] uppercase font-medium">Name</th>
                <th className="text-left px-4 py-3 text-zinc-400 tracking-[2px] uppercase font-medium hidden md:table-cell">Email</th>
                <th className="text-left px-4 py-3 text-zinc-400 tracking-[2px] uppercase font-medium hidden lg:table-cell">Phone</th>
                <th className="text-left px-4 py-3 text-zinc-400 tracking-[2px] uppercase font-medium">Status</th>
                <th className="text-left px-4 py-3 text-zinc-400 tracking-[2px] uppercase font-medium hidden lg:table-cell">Date</th>
                <th className="text-right px-4 py-3 text-zinc-400 tracking-[2px] uppercase font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((c) => (
                <tr
                  key={c.id}
                  className="border-b border-zinc-800/50 hover:bg-zinc-800/30 transition cursor-pointer"
                  onClick={() => handleRowClick(c)}
                >
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      {c.status === "unread" && (
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                      )}
                      <span className={c.status === "unread" ? "text-white font-medium" : "text-zinc-400"}>
                        {c.first_name} {c.last_name}
                      </span>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-zinc-400 hidden md:table-cell">{c.email}</td>
                  <td className="px-4 py-3 text-zinc-400 hidden lg:table-cell">{c.phone || "-"}</td>
                  <td className="px-4 py-3">
                    <span className={`px-2 py-0.5 rounded-sm text-[10px] font-bold tracking-wider uppercase ${
                      c.status === "unread"
                        ? "bg-emerald-900/50 text-emerald-400"
                        : "bg-zinc-800 text-zinc-500"
                    }`}>
                      {c.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-zinc-500 hidden lg:table-cell">
                    {c.created_at ? new Date(c.created_at).toLocaleDateString("en-GB") : "-"}
                  </td>
                  <td className="px-4 py-3">
                    <div
                      className="flex items-center justify-end gap-2"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {c.status === "unread" && (
                        <button
                          onClick={() => handleMarkRead(c.id)}
                          className="p-1.5 text-zinc-400 hover:text-emerald-400 hover:bg-emerald-900/20 rounded-sm transition"
                          title="Mark as read"
                        >
                          <Eye size={13} />
                        </button>
                      )}
                      <button
                        onClick={() => setDeleteId(c.id)}
                        className="p-1.5 text-zinc-400 hover:text-red-400 hover:bg-red-900/30 rounded-sm transition"
                        title="Delete"
                      >
                        <Trash2 size={13} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Detail Modal */}
      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          <div className="absolute inset-0 bg-black/70 backdrop-blur-xs" onClick={() => setSelected(null)} />
          <div className="relative bg-zinc-900 border border-zinc-800 rounded-sm w-full max-w-lg overflow-hidden">
            <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-800">
              <h3 className="text-white text-xs font-bold tracking-[3px] uppercase">Message Detail</h3>
              <button onClick={() => setSelected(null)} className="text-zinc-400 hover:text-white text-base leading-none">✕</button>
            </div>
            <div className="px-6 py-5 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-[10px] tracking-[3px] uppercase text-zinc-500 mb-1">Name</p>
                  <p className="text-white text-sm">{selected.first_name} {selected.last_name}</p>
                </div>
                <div>
                  <p className="text-[10px] tracking-[3px] uppercase text-zinc-500 mb-1">Status</p>
                  <span className={`px-2 py-0.5 rounded-sm text-[10px] font-bold tracking-wider uppercase ${
                    selected.status === "unread"
                      ? "bg-emerald-900/50 text-emerald-400"
                      : "bg-zinc-800 text-zinc-500"
                  }`}>
                    {selected.status}
                  </span>
                </div>
                <div>
                  <p className="text-[10px] tracking-[3px] uppercase text-zinc-500 mb-1">Email</p>
                  <p className="text-zinc-300 text-sm select-all">{selected.email}</p>
                </div>
                <div>
                  <p className="text-[10px] tracking-[3px] uppercase text-zinc-500 mb-1">Phone</p>
                  <p className="text-zinc-300 text-sm">{selected.phone || "-"}</p>
                </div>
                <div>
                  <p className="text-[10px] tracking-[3px] uppercase text-zinc-500 mb-1">Date</p>
                  <p className="text-zinc-300 text-sm">
                    {selected.created_at ? new Date(selected.created_at).toLocaleDateString("en-GB") : "-"}
                  </p>
                </div>
                <div>
                  <p className="text-[10px] tracking-[3px] uppercase text-zinc-500 mb-1">Updates Opt-in</p>
                  <p className="text-zinc-300 text-sm">{selected.updates_optin ? "Yes" : "No"}</p>
                </div>
              </div>
              <div>
                <p className="text-[10px] tracking-[3px] uppercase text-zinc-500 mb-2">Message</p>
                <p className="text-zinc-300 text-sm leading-relaxed bg-zinc-800/50 px-4 py-3 rounded-sm whitespace-pre-wrap max-h-40 overflow-y-auto">
                  {selected.message}
                </p>
              </div>
            </div>
            <div className="px-6 py-4 border-t border-zinc-800 flex gap-3 justify-end bg-zinc-900/50">
              <button
                onClick={() => setDeleteId(selected.id)}
                className="px-4 py-2 text-xs font-bold tracking-[2px] uppercase text-red-400 hover:text-red-300 transition"
              >
                Delete
              </button>
              <button
                onClick={() => setSelected(null)}
                className="px-6 py-2 bg-white text-zinc-900 text-xs font-bold tracking-[2px] uppercase rounded-sm hover:bg-zinc-100 transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirm Modal */}
      {deleteId && (
        <div className="fixed inset-0 z-60 flex items-center justify-center px-4">
          <div className="absolute inset-0 bg-black/80" onClick={() => setDeleteId(null)} />
          <div className="relative bg-zinc-900 border border-zinc-800 rounded-sm w-full max-w-sm p-6 shadow-2xl">
            <h3 className="text-white text-xs font-bold tracking-[3px] uppercase mb-2">Delete Contact</h3>
            <p className="text-zinc-400 text-xs mb-6">Are you sure? This action cannot be undone.</p>
            <div className="flex gap-3 justify-end">
              <button
                onClick={() => setDeleteId(null)}
                className="px-4 py-2 text-xs font-bold tracking-[2px] uppercase text-zinc-400 hover:text-white transition"
              >
                Cancel
              </button>
              <button
                onClick={() => handleDelete(deleteId)}
                className="px-6 py-2 bg-red-600 text-white text-xs font-bold tracking-[2px] uppercase rounded-sm hover:bg-red-700 transition"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}