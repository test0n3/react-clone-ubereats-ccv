const API_ME_URL = "http://localhost:4000/me";
const API_LOGIN_URL = "http://localhost:4000/login";
const API_LOGOUT_URL = "http://localhost:4000/logout";

async function createError(response) {
  const { errors } = await response.json();
  const error = new Error(errors.message);
  error.status = response.status;
  error.statusText = response.statusText;
  return error;
}

async function login({ email, password }) {
  const response = await fetch(API_LOGIN_URL, {
    method: "POST",
    credentials: "include",
    body: JSON.stringify({ email, password }),
    headers: {
      "Content-Type": "application/json"
    }
  });
  if (!response.ok) throw createError(response);
}

async function getMe() {
  const response = await fetch(API_ME_URL, {
    credentials: "include"
  });

  if (!response.ok) throw createError(response);

  const { name, email } = await response.json();
  return { name, email };
}

async function logout() {
  const response = await fetch(API_LOGOUT_URL, {
    method: "DELETE",
    credentials: "include"
  });
  if (!response.ok) throw createError(response);
}

export { login, getMe, logout };
