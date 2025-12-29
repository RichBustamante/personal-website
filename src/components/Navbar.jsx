import { Link } from "react-router-dom";
import { FaGithub, FaGitlab, FaFilePdf } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="nav">
      {/* Modal Routes */}
      <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </div>

      {/* External icons */}
      <div className="nav-icons">
        <a
          href="https://github.com/RichBustamante"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>

        <a
          href="https://gitlab.com/richBustamante"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitLab"
        >
          <FaGitlab />
        </a>

        <a
          href="/Bustamante_Richard_Resume.pdf"
          download
          aria-label="Download Resume"
        >
          <FaFilePdf />
        </a>
      </div>      
    </nav>
  );
}
