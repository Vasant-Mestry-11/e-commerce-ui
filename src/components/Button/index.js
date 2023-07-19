import "./Button.css";

const Button = ({ children, name, onClick, classNames, disabled }) => {
  return (
    <button
      name={name}
      className={`btn ${classNames}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
