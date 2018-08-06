const StorageKey = 'Authorization_Token';

export function getToken() {
  return localStorage.getItem(StorageKey);
}

export function setToken(token) {
  return localStorage.setItem(StorageKey, token);
}

export function removeToken() {
  return localStorage.removeItem(StorageKey);
}
