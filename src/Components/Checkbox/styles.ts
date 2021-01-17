import styled from "styled-components";

type CheckMarkPropType = {
  show?: boolean;
};

const WrapperCheckbox = styled.div`
  display: flex;
  margin-bottom: 37px;
`;

const WrapperCheckMark = styled.div`
  display: block;
  position: relative;
  width: 14px;
  height: 14px;
  border: 1px solid ${(props) => props.theme.blueColor};
  border-radius: 3px;
  outline: none;
  &:hover {
    cursor: pointer;
  }
`;

const CheckMark = styled.div<CheckMarkPropType>`
  display: ${(props) => (props.show ? "block" : "none")};
  left: 4px;
  position: relative;
  width: 4px;
  height: 9px;
  border: solid ${(props) => props.theme.blueColor};
  border-width: 0 0.10714285714285714em 0.10714285714285714em 0;
  transform: rotate(45deg);
  &:hover {
    cursor: pointer;
  }
`;

export { WrapperCheckbox, WrapperCheckMark, CheckMark };
