import { Link } from "react-router-dom";
import { FaGithub, FaGitlab, FaFilePdf, FaLinkedin } from "react-icons/fa";

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
          title="GitHub"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>

        <a
          href="https://gitlab.com/richBustamante"
          target="_blank"
          rel="noopener noreferrer"
          title="GitLab"
          aria-label="GitLab"
        >
          <FaGitlab />
        </a>

        <a
          href="https://linkedin.com/in/richard-bustamante-50b687153"
          target="_blank"
          rel="noopener noreferrer"
          title="LinkedIn"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>        

        <a
          href="/Bustamante_Richard_Resume.pdf"
          target="_blank"
          title="Resume"
          aria-label="Download Resume"
        >
          <FaFilePdf />
        </a>
      </div>      
    </nav>
  );
}
