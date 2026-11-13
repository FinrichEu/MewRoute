import { useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);

  return (
    <button
      type="button"
      className={`theme-toggle ${isDark ? "dark" : ""}`}
      onClick={() => setIsDark(!isDark)}
      aria-label="Dark theme"
      aria-pressed={isDark}
    >
      <FiSun size={18} />
      <FiMoon size={18} />
    </button>
  );
}

export default ThemeToggle;