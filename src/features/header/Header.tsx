import linkedin_logo from "../../assets/icons8-linkedin.svg"
import github_logo from "../../assets/github-mark-white.svg"

const Header = () => {
    return (
        <header className="flex justify-between pt-6 pb-10">
            <div className="text-lg">Jason Chow</div>
            <div className="flex gap-4">
                <a href="https://www.linkedin.com/in/jasonchow3000/">
                    <img className="h-10 transition ease-out delay-100 hover:scale-120" src={linkedin_logo} alt="LinkedIn Logo"></img>
                </a>
                <a href="https://github.com/json-chow">
                    <img className="h-10 transition ease-out delay-100 hover:scale-120" src={github_logo} alt="GitHub Logo"></img>
                </a>
            </div>
        </header>
    )
}

export default Header;
