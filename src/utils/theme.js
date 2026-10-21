export const getInitialTheme = () => {
  try {
    const saved = localStorage.getItem("theme");
    if (saved === "dark" || saved === "light") return saved;
  } catch {
    //
  }
  return "light";
};
