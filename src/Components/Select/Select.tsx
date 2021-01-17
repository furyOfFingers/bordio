import React, { useState } from "react";
import {
  Selected,
  Text,
  Arrow,
  ArrowUp,
  Options,
  WrapperOptions,
  Option,
  SelectAndErrorText,
} from "./styles";

interface ISelectProp {
  /** Initial value компонента Select. */
  initial: string;
  /** Массив options компонента Select. */
  options?: Array<string>;
  /** callback for selected value. */
  onChange: (el: string) => void;
  /** type компонента Select. */
  type?: string;
  /** value компонента Select. */
  value?: string;
  /** placeholder компонента Select. */
  placeholder?: string;
  /** name компонента Select. */
  name?: string;
}
const Select: React.FC<ISelectProp> = ({
  type,
  initial,
  name,
  options,
  onChange,
}) => {
  const [option, setOption] = useState(initial);
  const [showOptions, setShowOptions] = useState(false);
  const [isFocus, setIsFocus] = useState(false);

  const onMouseLeaveSelect = () => {
    setIsFocus(false);
  };

  const onMouseEnterSelect = () => {
    setIsFocus(true);
  };

  const onClickSelect = () => {
    setShowOptions(!showOptions);
  };

  const handleBlur = () => {
    !isFocus && setShowOptions(false);
  };

  const onChangeOption = (el: string): void => {
    setOption(el);
    setShowOptions(!showOptions);
    onChange(el);
  };

  const valueReturn = () => {
    const valueArr: JSX.Element[] = [];
    options?.forEach((el: string, i: number) => {
      valueArr.push(
        <Option key={i} onClick={() => onChangeOption(el)}>
          {el}
        </Option>
      );
    });

    return valueArr;
  };

  return (
    <div onBlur={handleBlur}>
      <SelectAndErrorText>
        <Selected
          type={type}
          name={name}
          onClick={onClickSelect}
          tabIndex={0}
          onMouseEnter={onMouseEnterSelect}
          onMouseLeave={onMouseLeaveSelect}
        >
          <Text>{option}</Text>
          {showOptions ? <ArrowUp /> : <Arrow />}
        </Selected>

        <Options>
          {showOptions && (
            <WrapperOptions
              onMouseLeave={onMouseLeaveSelect}
              onMouseEnter={onMouseEnterSelect}
            >
              {valueReturn()}
            </WrapperOptions>
          )}
        </Options>
      </SelectAndErrorText>
    </div>
  );
};
export default React.memo(Select);
