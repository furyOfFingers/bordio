import React from "react";
import { ErrorText, InputStyle, WrapperInput, IconAndInput } from "./styles";
import Icon from "Components/Icon/Icon";
import { useField } from "formik";

interface IInputProps {
  /** type компонента Input. */
  type: string;
  /** placeholder компонента Input. */
  placeholder: string;
  /** name компонента Input. */
  name: string;
  /** Наименование иконки компонента Input. */
  iconName?: string;
}
const Input: React.FC<IInputProps> = ({ iconName, ...props }) => {
  const [field, meta] = useField(props as any);
  return (
    <WrapperInput mb={!!meta.touched && !!meta.error}>
      <IconAndInput>
        {iconName && <Icon iconName={iconName} />}
        <InputStyle {...field} {...props} />
      </IconAndInput>
      {meta.touched && meta.error ? (
        <ErrorText> {meta.error} </ErrorText>
      ) : null}
    </WrapperInput>
  );
};
export default React.memo(Input);
