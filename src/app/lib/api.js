const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8888/api/v1";

export async function apiCall(endpoint, options = {}) {
  const url = `${API_URL}${endpoint}`;

  const config = {
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
    ...options,
  };

  if (config.body && typeof config.body === "object") {
    config.body = JSON.stringify(config.body);
  }

  const response = await fetch(url, config);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error || data.message || "Terjadi kesalahan");
  }

  return data;
}

export async function apiCallWithAuth(endpoint, options = {}) {
  const token = localStorage.getItem("token");
  
  return apiCall(endpoint, {
    ...options,
    headers: {
      ...options.headers,
      Authorization: `Bearer ${token}`,
    },
  });
}