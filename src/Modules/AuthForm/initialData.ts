import { IInitialRadioButton, IForm } from "Types/Types";
import { RadioButtonText, InitialRadioButton } from "Constants/RadioButton";
import { AuthFormName } from "Constants/AuthForm";

export const initialDataRadioButtons = () => {
  const newRadioButtons = {} as IInitialRadioButton[];

  RadioButtonText.forEach((el: string, i: number) => {
    newRadioButtons[i] = { ...InitialRadioButton };
    newRadioButtons[i].name = el;
    newRadioButtons[i].clicked = i === 0 ? true : newRadioButtons[i].clicked;
  });

  return newRadioButtons;
};

export const initialAuthForm = () => {
  const newAuthFormName = {} as IForm;

  AuthFormName.forEach((el: string) => {
    if (el === "accept") {
      newAuthFormName["accept"] = true;
    } else if (el === "country") {
      newAuthFormName["country"] = "Latvia";
    } else if (el === "gender") {
      newAuthFormName["gender"] = "Male";
    } else {
      newAuthFormName[el] = "";
    }
  });

  return newAuthFormName;
};
