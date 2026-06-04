export default function ThemeToggle({ darkMode, setDarkMode }) {
  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="fixed top-5 right-5 bg-cyan-500 text-black px-4 py-2 rounded-lg font-bold"
    >
      {darkMode ? "☀ Light" : "🌙 Dark"}
    </button>
  );
}