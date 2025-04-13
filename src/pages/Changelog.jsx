export default function Changelog() {
  return (
    <div className="p-6 text-gray-200">
      <h1 className="text-3xl font-bold mb-4">Changelog</h1>
      <ul className="list-disc list-inside">
        <li>
          <strong>2025-04-06</strong> – 🎉 Portfolio site launched with two
          projects
        </li>
        <li>
          <strong>2025-04-12</strong> – 🔧 Fixed iOS cookie auth issue with
          "RideData Viewer" project! Switched to JWT fallback to handle "Prevent
          Cross-Site Tracking" 🍎🚫🍪
        </li>
      </ul>
    </div>
  );
}
