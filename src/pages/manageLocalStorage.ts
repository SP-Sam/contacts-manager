export function getLocalStorage(key: string) {
  const data = localStorage.getItem(key);

  if (!data) return null;

  return JSON.parse(data);
}
