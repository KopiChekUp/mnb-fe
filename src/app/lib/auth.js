import { apiCall } from "./api";

export async function loginUser(email, password) {
  return apiCall("/auth/login", {
    method: "POST",
    body: { email, password },
  });
}
export async function registerUser(name, email, password, role) {
  return apiCall("/auth/register", {
    method: "POST",
    body: { name, email, password, role },
  });
}
export function logout() {
  localStorage.removeItem("token");
  localStorage.removeItem("refresh_token");
  localStorage.removeItem("role");
  window.location.href = "/login";
}

export async function sendVerificationEmail(email) {
  return apiCall("/auth/send-verification-email", {
    method: "POST",
    body: { email },
  });
}

export async function verifyEmail(email, code) {
  return apiCall("/auth/verify-email", {
    method: "POST",
    body: { email, code },
  });
}