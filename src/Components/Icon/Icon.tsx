import React from "react";
import { IconStyle } from "./styles";
import * as icons from "./Icons";

interface IInputProps {
  /** name компонента Input. */
  iconName?: string;
}
const Icon: React.FC<IInputProps> = ({ iconName }) => {
  switch (iconName) {
    case "lock":
      return <IconStyle alt={iconName} src={icons["lock"]} />;
    case "mail":
      return <IconStyle alt={iconName} src={icons["mail"]} />;

    default:
      return <></>;
  }
};
export default React.memo(Icon);
