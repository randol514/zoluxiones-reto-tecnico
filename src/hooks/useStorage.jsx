export const useStorage = (key, type = "local") => {
  const storage = type === "local" ? localStorage : sessionStorage;
  const setItem = (value) => {
    storage.setItem(key, JSON.stringify(value));
  };

  const getItem = () => {
    const item = storage.getItem(key);
    return item ? JSON.parse(item) : null;
  };

  const removeItem = () => {
    storage.removeItem(key);
  };

  return { setItem, getItem, removeItem };
};
