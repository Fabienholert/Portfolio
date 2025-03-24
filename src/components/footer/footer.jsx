import LogoGit from "../../../public/images/logogit.png";
import LogoLink from "../../../public/images/logolink.png";
import "./footer.scss";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer__logoreseaux">
        <a
          href="https://github.com/Fabienholert" // Remplacez par votre lien GitHub
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={LogoGit} alt="logoGitHub" className="header__logoGit" />
        </a>
        <a
          href="https://www.linkedin.com/in/fabien-holert-24894bb3/" // Remplacez par votre lien LinkedIn
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={LogoLink} alt="logoLinkedin" className="header__logoLink" />
        </a>
      </div>
    </div>
  );
}
