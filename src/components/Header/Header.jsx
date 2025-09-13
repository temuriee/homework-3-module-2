import "./Header.css";
import Navigation from "./Navigation/Navigation";
// props ით არ გამოვიდა არ ვიცი რატო ონლაინ url-ს რო ვსვავდი img ში მუშაობდა მარა როცა გადმოწერილი სურათის ადდრესს ვუთითებდი არ მუშაობდა ცარიელი ოთკუთხედი გამოდიოდა მგონი არ იტვირთებოდა და ასე ჩავსვავ სურათს
import StartupLogo from "./img/StartupLogo.svg";
function Header() {
  return (
    <>
      <header className="headerContainer">
        <img src={StartupLogo} alt="" />

        <Navigation />
      </header>
    </>
  );
}

export default Header;
