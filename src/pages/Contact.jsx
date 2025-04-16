export default function Contact() {
  return (
    <div className="p-6 dark:text-gray-200">
      <h1 className="text-3xl font-bold mb-4">Let’s Connect</h1>
      <p className="mb-2">
        I’m not actively seeking new roles, but I’m always open to connect or
        chat tech.
      </p>
      <ul className="list-none">
        <li>
          Email:{" "}
          <a
            href="mailto:s.rafael.novoa@gmail.com"
            className="text-blue-400 hover:underline"
          >
            s.rafael.novoa@gmail.com
          </a>
        </li>
        <li>
          LinkedIn:{" "}
          <a
            href="https://linkedin.com/in/srafaelnovoa"
            className="text-blue-400 hover:underline"
          >
            linkedin.com/in/srafaelnovoa
          </a>
        </li>
        <li>
          GitHub:{" "}
          <a
            href="https://github.com/srafaelnovoa"
            className="text-blue-400 hover:underline"
          >
            github.com/srafaelnovoa
          </a>
        </li>
      </ul>
    </div>
  );
}
