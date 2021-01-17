import React from "react";
import { ButtonStyle } from "./styles";

interface IButtonProps {
  /** type компонента Button. */
  type?: "button" | "submit" | "reset";
  /** text компонента Button. */
  text: string;
  /** disabled компонента Button. */
  disabled: boolean;
}

const Button: React.FC<IButtonProps> = ({
  type = "submit",
  text,
  disabled,
}): JSX.Element => {
  return (
    <ButtonStyle type={type} disabled={!disabled}>
      {text}
    </ButtonStyle>
  );
};

export default React.memo(Button);
