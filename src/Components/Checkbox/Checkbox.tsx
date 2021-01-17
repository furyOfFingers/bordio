import React from "react";
import { WrapperCheckbox, WrapperCheckMark, CheckMark } from "./styles";

interface ICheckboxProps {
  /** Флаг компонента Checkbox. */
  checked: boolean;
  /** Текст компонента Checkbox. */
  text: JSX.Element;
  /** onChange колбэк компонента Checkbox. */
  onChange: () => void;
}

const Checkbox: React.FC<ICheckboxProps> = ({ checked, text, onChange }) => {
  return (
    <WrapperCheckbox>
      <WrapperCheckMark onClick={onChange}>
        <CheckMark show={checked} />
      </WrapperCheckMark>
      {text}
    </WrapperCheckbox>
  );
};

export default React.memo(Checkbox);
