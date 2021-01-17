import styled from "styled-components";

type CheckMarkPropType = {
  show?: boolean;
};
type WrapperRadioButtonPropType = {
  name?: string;
};

const WrapperRadioButton = styled.div<WrapperRadioButtonPropType>`
  display: flex;
  margin: 30px 25px 24px 0;
`;

const Text = styled.span`
  margin-left: 8px;
  font: normal normal normal 14px/17px Roboto, sans-serif;
  color: ${(props) => props.theme.textColor};
`;

const WrapperCheckMark = styled.div`
  display: block;
  position: relative;
  width: 15px;
  height: 15px;
  border: 1px solid ${(props) => props.theme.blueColor};
  border-radius: 8px;
  outline: none;
  &:hover {
    cursor: pointer;
  }
`;

const CheckMark = styled.div<CheckMarkPropType>`
  display: ${(props) => (props.show ? "block" : "none")};
  top: 3px;
  left: 3px;
  position: relative;
  width: 9px;
  height: 9px;
  border-radius: 4px;
  background-color: ${(props) => props.theme.blueColor};
  &:hover {
    cursor: pointer;
  }
`;

export { WrapperRadioButton, Text, WrapperCheckMark, CheckMark };
