import Budget from "../assets/videos/Budget.gif";
import Quizzical from "../assets/videos/Quizzical.gif";
import tenzies from "../assets/videos/tenzies.gif";
const Projects = () => {
  return (
    <main className="px-4 py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* will make custom cards to loop over projects later*/}
        {/* Project Card 1*/}
        <div className="rounded-xl shadow-md p-4 transition hover:shadow-lg">
          <div className="h-48 rounded-lg mb-4 w-full">
            <img
              src={Quizzical}
              alt="Quizzical App"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <h3 className="text-lg font-semibold mb-1">Quizzical Game</h3>
          <p className="text-sm mb-4">
            Quizzical is a trivia quiz app built with React. It fetches
            multiple-choice questions from the Open Trivia Database API and
            challenges users to test their knowledge in a fun and interactive
            way. Features include randomized answers, score tracking, and
            dynamic question loading — all wrapped in a responsive and
            minimalist design.
          </p>
          <div className="flex space-x-2">
            <a
              href="https://quizzical-hut.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="dark:shadow-sm dark:shadow-slate-800 px-4 py-1 border text-black rounded-full text-sm dark:text-white dark:border-0 dark:hover:bg-gray-700 hover:bg-gray-200"
            >
              Live Demo
            </a>
            <a
              href="https://github.com/KunoSMB/Quizzical-Revise/"
              target="_blank"
              rel="noopener noreferrer"
              className="dark:shadow-sm dark:shadow-slate-800 px-4 py-1 border text-black rounded-full text-sm dark:text-white dark:border-0 dark:hover:bg-gray-700 hover:bg-gray-200"
            >
              Source Code
            </a>
          </div>
        </div>

        {/* Project Card 2 */}
        <div className="rounded-xl shadow-md p-4 transition hover:shadow-lg">
          <div className="h-48 rounded-lg mb-4 w-full">
            <img
              src={tenzies}
              alt="tenzies game"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <h3 className="text-lg font-semibold mb-1">Tenzies Game</h3>
          <p className="text-sm mb-4">
            Tenzies Game is a fun and interactive dice game built with React.
            The goal is to roll until all ten dice show the same number. Players
            can click to "hold" dice between rolls, and the game tracks the
            number of rolls and time taken.
          </p>
          <div className="flex space-x-2">
            <a
              href="https://smb-tenzies-game.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="dark:shadow-sm dark:shadow-slate-800 px-4 py-1 border text-black rounded-full text-sm dark:text-white dark:border-0 dark:hover:bg-gray-700 hover:bg-gray-200"
            >
              Live Demo
            </a>
            <a
              href="https://github.com/KunoSMB/tenziesgame"
              target="_blank"
              rel="noopener noreferrer"
              className="dark:shadow-sm dark:shadow-slate-800 px-4 py-1 border text-black rounded-full text-sm dark:text-white dark:border-0 dark:hover:bg-gray-700 hover:bg-gray-200"
            >
              Source Code
            </a>
          </div>
        </div>

        {/* Project Card 3 */}
        <div className="rounded-xl shadow-md p-4 transition hover:shadow-lg">
          <div className="h-48 rounded-lg mb-4 w-full">
            <img
              src={Budget}
              alt="Budgeting App"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <h3 className="text-lg font-semibold mb-1">Budgeting App</h3>
          <p className="text-sm mb-4">
            Budgeting App is a single-page application built with React and Vite
            that allows users to track their income and expenses. It features
            dynamic routing using React Router, and a simple UI for adding,
            viewing, and managing transactions. The app maintains state using
            React hooks and is designed for local use.
          </p>
          <div className="flex space-x-2">
            <a
              href="https://budgeting-app-vdjn.onrender.com/"
              target="_blank"
              className="px-4 py-1 border text-black rounded-full text-sm dark:text-white dark:border-0 dark:hover:bg-gray-700 hover:bg-gray-200 dark:shadow-sm dark:shadow-slate-800"
            >
              Live Demo
            </a>
            <a
              href="https://github.com/BelhiaSofianeCS50/Budgeting-App"
              target="_blank"
              className="px-4 py-1 border text-black rounded-full text-sm dark:text-white dark:border-0 dark:hover:bg-gray-700 hover:bg-gray-200 dark:shadow-sm dark:shadow-slate-800"
            >
              Source Code
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Projects;
