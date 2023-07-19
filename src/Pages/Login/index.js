import { useReducer } from "react";
import Header from "../../components/Header";
import "./Login.css";
import { INPUT_TYPE_CHANGE, initialState } from "../../constants/Login";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case INPUT_TYPE_CHANGE: {
        return {
          ...state,
          [action.fieldName]: action.payload,
        };
      }
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  const { username, password } = state;
  const navigate = useNavigate();

  const handleChange = (e) => {
    dispatch({
      type: INPUT_TYPE_CHANGE,
      payload: e.target.value,
      fieldName: e.target.name,
    });
  };

  const handleClick = () => {
    if (username || password) navigate("/");
  };

  return (
    <>
      <Header />
      <div className="login-container">
        <div className="input-wrapper">
          <h2 className="login-title">Log In</h2>
          <Input
            type="text"
            value={state.username}
            label="Username"
            onChange={handleChange}
            name="username"
            placeholder="Enter username"
          />
          <Input
            type="password"
            value={state.password}
            label="Password"
            onChange={handleChange}
            name="password"
            placeholder="Enter password"
          />
          <Button
            name="login"
            classNames={`btn-primary login-btn`}
            onClick={handleClick}
            disabled={!username || !password}
          >
            Log In
          </Button>
        </div>
      </div>
    </>
  );
};

export default Login;
