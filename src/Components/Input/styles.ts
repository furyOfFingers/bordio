import styled from "styled-components";

type WrapperInputPropType = {
  /** Признак наличия margin-bottom. */
  mb?: boolean;
};

const ErrorText = styled.span`
  position: relative;
  top: -3px;
  padding-left: 18px;
  color: #e82828;
  font: normal normal normal 10px/13px Roboto, sans-serif;
`;

const InputStyle = styled.input`
  width: 100%;
  box-sizing: border-box;
  font: normal normal normal 14px/17px Roboto, sans-serif;
  letter-spacing: 0px;
  background: transparent;
  color: ${(props) => props.theme.textColor};
  outline: none;
  border: none;
`;

const WrapperInput = styled.div<WrapperInputPropType>`
  margin-bottom: ${(props) => (!props.mb ? "21px" : "3px")};
`;

const IconAndInput = styled.div`
  display: flex;
  padding: 17px 18px 16px 18px;
  border-radius: 8px;
  background: ${(props) => props.theme.grayBgColor};
`;
export { IconAndInput, ErrorText, InputStyle, WrapperInput };
