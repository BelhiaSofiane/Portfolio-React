import img from "../assets/images/me.png"

/**
 * Home component displays the portfolio welcome section.
 * It includes a heading, a brief introduction, and a list of skills.
 */
const Home = () => {
  return (
    // Main section of the Home component
    <section className="flex flex-col items-center justify-center text-center px-4">
      {/* Heading */}
      <h1 className="text-3xl md:text-4xl font-bold mb-4">Welcome to  <span className="text-blue-500">My Portfolio</span> </h1>
      
      {/* Introduction paragraph */}
      <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-xl">
        Hi, I’m Sofiane, a passionate self-taught developer eager to create innovative solutions and grow in the tech world.
      </p>
 
      <div className="flex flex-col md:flex-row items-center gap-8">
        {/* Profile image */}
        <img src={img} alt="Profile Photo" className="w-40 h-40 rounded-full object-cover shadow-md" />

        {/* List of skills */}
        <ul className="text-left space-y-4">
          <li className="flex items-center gap-3">
            <span className="computer-icon"></span>
            <span>Skilled in JavaScript, HTML5, CSS3 and React.</span>
          </li>
          <li className="flex items-center gap-3">
            <span className="database-icon"></span>
            <span>Passionate about modern UI/UX and clean design principles.</span>
          </li>
          <li className="flex items-center gap-3">
            <span className="responsive-icon"></span>
            <span>Focused on building fully responsive, mobile-first interfaces.</span>
          </li>
        </ul>
      </div>
      <div>
        {
          
        }
      </div>
    </section>
  );
};

export default Home