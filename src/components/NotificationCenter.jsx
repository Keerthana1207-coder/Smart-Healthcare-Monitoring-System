export default function NotificationCenter() {
  const notifications = [
    "💊 Medicine Reminder at 9:00 AM",
    "❤️ Heart Rate Normal",
    "📅 Appointment Tomorrow",
    "📄 Health Report Generated",
  ];

  return (
    <div className="bg-slate-800 p-6 rounded-xl mb-8">
      <h2 className="text-2xl text-cyan-400 mb-4">
        Notifications
      </h2>

      <ul className="space-y-3">
        {notifications.map((item, index) => (
          <li
            key={index}
            className="bg-slate-700 p-3 rounded-lg"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}