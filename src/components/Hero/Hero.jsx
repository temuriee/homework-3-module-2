import Button from "../Button/Button";
import "./Hero.css";

function Hero() {
  const btn = {
    btnPrimary: "Log In",
    btnSecondary: "Sign Up",
  };
  return (
    <>
      <hero className="heroContainer">
        <h1>Build Your Own Site like a Lego Constructor</h1>
        <h5>
          We have created a new product that will help designers, developers and
          companies create websites for their startups quickly and easily.
        </h5>
      </hero>
      <Button btnPrimary={btn.btnPrimary} btnSecondary={btn.btnSecondary} />
    </>
  );
}

export default Hero;
