import { Link } from "@tanstack/react-router";
import linkedinLogo from "../../assets/icons8-linkedin.svg";
import githubLogo from "../../assets/github-mark-white.svg";

const Header = () => {
  return (
    <header className="flex justify-between pt-6 pb-10">
      <div className="flex gap-6">
        <Link to="/" className="text-lg font-semibold">
          Jason Chow
        </Link>
        <Link to="/blog" className="text-lg" activeProps={{ className: "text-neutral-400" }}>
          Blog
        </Link>
      </div>
      <div className="flex gap-4">
        <a
          href="https://www.linkedin.com/in/jasonchow3000/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="h-10 transition ease-out delay-100 hover:scale-120"
            src={linkedinLogo}
            alt="LinkedIn Logo"
          ></img>
        </a>
        <a href="https://github.com/json-chow" target="_blank" rel="noopener noreferrer">
          <img
            className="h-10 transition ease-out delay-100 hover:scale-120"
            src={githubLogo}
            alt="GitHub Logo"
          ></img>
        </a>
      </div>
    </header>
  );
};

export default Header;
