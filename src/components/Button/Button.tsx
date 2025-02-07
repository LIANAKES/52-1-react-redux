
import { MainButton } from "./styles";
import { MainButtonProps } from "./types";

const Button = ({ name = "SEND", type = "button", onClick, disabled = false, }: MainButtonProps) => {
  return (
    <MainButton type={type} onClick= {onClick} disabled={disabled} >
      {name}
    </MainButton>
  );
};

export default Button;