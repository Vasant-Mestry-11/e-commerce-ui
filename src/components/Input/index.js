import "./Input.css";

const Input = ({
  name,
  label,
  placeholder,
  classNames,
  type = "text",
  value,
  onChange,
}) => {
  return (
    <>
      <label className="label" htmlFor={name}>
        {label}
      </label>
      <br />
      <input
        className={`input ${classNames}`}
        type={type}
        value={value}
        onChange={onChange}
        name={name}
        placeholder={placeholder}
      />
      <br />
    </>
  );
};

export default Input;
