// Home.jsx
export default function Home() {
  return (
    <div className="p-6 text-gray-200">
      <h1 className="text-3xl font-bold mb-2">Hey, I’m S. Rafael Novoa</h1>
      <p className="mb-4 text-lg">
        A software engineer who builds internal tools, dashboards, and
        integration systems.
      </p>
      <p className="mb-6">
        I work at the intersection of business needs and backend tech. This site
        is where I share projects that solve problems, automate workflows, and
        occasionally just make tech fun.
      </p>
      <div className="mb-4">
        <h2 className="text-xl font-semibold">My Stack</h2>
        <p className="text-sm mt-1">
          JavaScript, React, Node.js, TailwindCSS, jQuery, Bootstrap,
          Datatables, Express, SQL
        </p>
      </div>
      <a href="/projects" className="text-blue-400 hover:underline">
        Explore my work →
      </a>
    </div>
  );
}
