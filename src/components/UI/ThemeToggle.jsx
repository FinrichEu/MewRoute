import { useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

function ThemeToggle() {
  const [isDark, setIsDark] = useState(
    () => document.documentElement.dataset.theme === "dark"
  );

  function toggleTheme() {
    const nextIsDark = !isDark;
    const theme = nextIsDark ? "dark" : "light";

    setIsDark(nextIsDark);
    document.documentElement.dataset.theme = theme;

    try {
      localStorage.setItem("theme", theme);
    } catch {
      /* The theme still switches when browser storage is unavailable. */
    }
  }

  return (
    <button
      type="button"
      className={`theme-toggle ${isDark ? "dark" : ""}`}
      onClick={toggleTheme}
      aria-label="Dark theme"
      aria-pressed={isDark}
      title={isDark ? "Switch to light theme" : "Switch to dark theme"}
    >
      <FiSun size={18} aria-hidden="true" />
      <FiMoon size={18} aria-hidden="true" />
    </button>
  );
}

export default ThemeToggle;
