const API_LOGIN_URL = "http://localhost:4000/api/login";
const API_LOGOUT_URL = "http://localhost:4000/api/logout";

async function createError(response) {
  const { errors } = await response.json();
  const error = new Error(errors.message);
  error.status = response.status;
  error.statusText = response.statusText;
  return error;
}

async function login(user) {
  const response = await fetch(API_LOGIN_URL, {
    method: "POST",
    credentials: "include",
    body: user ? JSON.stringify(user) : "{}",
    headers: {
      "Content-Type": "application/json"
    }
  });
  if (!response.ok) throw createError(response);
  const { name, id, email } = await response.json();
  return { name, email, id };
}

async function logout() {
  const response = await fetch(API_LOGOUT_URL, {
    method: "DELETE",
    credentials: "include"
  });
  if (!response.ok) throw createError(response);
}

export { login, logout };
