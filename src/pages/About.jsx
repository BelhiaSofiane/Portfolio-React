import stack from "../assets/js/stack";

const About = () => {
  return (
    <section className="flex flex-col items-center justify-center text-center px-4">
      <div className="px-4 py-16 max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-6 text-text dark:text-text">
          About Me
        </h2>
        <p className="text-text-secondary dark:text-text-secondary mb-4">
          I'm a self-taught developer who transitioned into tech through
          hands-on learning. After completing courses like CS50x and Scrimba's
          Frontend Career Path, I’ve built real projects using modern tools like
          Flask, React, and Tailwind.
        </p>
        <p className="text-text-secondary dark:text-text-secondary">
          My goal is to join a passionate team where I can grow as a developer,
          contribute to real-world solutions, and keep learning every day. When
          I’m not coding, I’m probably tweaking my portfolio or learning new
          frameworks.
        </p>
      </div>

      <div className="px-4 py-16 max-w-5xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-8 text-text dark:text-text">
          My Stack
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-sm text-text-secondary dark:text-text-secondary">
          {stack.map((tech, index) => (
            <div
              key={index}
              className="h-24 w-24 flex flex-col items-center transition-transform duration-300 hover:scale-110"
            >
              <div
                dangerouslySetInnerHTML={{ __html: tech.svg }}
              />
              <span className="transition mt-2">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
