export default function ProjectsPage() {
  return (
    <>
      <div className="Projects Intro">
        <h1>My Cool Projects</h1>
        <h2>
          Here are some projects that I have completed/worked on recently, how
          you can check them out, and what skills + tools I learned to complete
          them!
        </h2>
      </div>
      <div className="Projects List">
        <ul>
          <li>
            <h3>Fruit Nutrition App</h3>
            <h4>
              Skills used: Tensorflow, TypeScript, React-Native, API integration
            </h4>
          </li>
          <li>
            <h3>Shazamesque (Music Recognition App)</h3>
            <h4>Skills used: Python, Audio Processing, React-Native, SQLite</h4>
          </li>
          <li>
            <h3>Wordlish (My first personal project from HS)</h3>
            <h4>Skills used: Java</h4>
          </li>
          <li>
            <h3>Ising Model Simulator</h3>
            <h4>Skills used: JavaScript, Markov Chains, Node.js</h4>
          </li>
        </ul>
      </div>
    </>
  );
}
