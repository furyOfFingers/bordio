import React from "react";
import {
  WrapperRadioButton,
  WrapperCheckMark,
  CheckMark,
  Text,
} from "./styles";

interface IRadioButtonProps {
  /** Флаг компонента RadioButton. */
  checked: boolean;
  /** Текст компонента RadioButton. */
  text: string;
  /** Наименование компонента RadioButton. */
  name: string;
  /** onClick колбэк компонента RadioButton. */
  onClick: () => void;
}

const RadioButton: React.FC<IRadioButtonProps> = ({
  checked,
  text,
  name,
  onClick,
}) => {
  return (
    <WrapperRadioButton name={name}>
      <WrapperCheckMark onClick={onClick}>
        <CheckMark show={checked} />
      </WrapperCheckMark>
      <Text>{text}</Text>
    </WrapperRadioButton>
  );
};

export default React.memo(RadioButton);
