import ThemeMode from "./ThemeMode";

export const storeTheme = (theme: ThemeMode) => {
  localStorage.set("theme", theme);
};

export const getTheme = (): ThemeMode => {
  return (localStorage.getItem("theme") || "light") as ThemeMode;
};
