import axios from "axios";

const api = axios.create({
  baseURL: "https://resonance-elite.com/resonance-elite-backend/api",
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json",
  },
});

// Request interceptor for dynamic token injection
api.interceptors.request.use(
  (config) => {
    // FIX: Check if code is running in the browser before accessing localStorage
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("admin_token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;