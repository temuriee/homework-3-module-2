import "./Button.css";

function Button(props) {
  return (
    <>
      <div className="btnContainer">
        <button className="btnPrimary">{props.btnPrimary}</button>
        <button className="btnSecondary">{props.btnSecondary}</button>
      </div>
    </>
  );
}

export default Button;
