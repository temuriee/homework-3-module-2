import "./Button.css";

function Button() {
  return (
    <>
      <div className="btnContainer">
        <button className="btnPrimary">Log In</button>
        <button className="btnSecondary">Sign Up</button>
      </div>
    </>
  );
}

export default Button;
