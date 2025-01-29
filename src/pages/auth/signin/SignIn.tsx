import { FC } from "react";
import { useNavigate } from "react-router-dom";

const SignIn: FC = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };
  return (
    <div>
      <button onClick={handleClick}>Login</button>
    </div>
  );
};

export default SignIn;
