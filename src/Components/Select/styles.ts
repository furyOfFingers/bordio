import styled from "styled-components";

type SelectedPropType = {
  type?: string;
  name?: string;
};

const SelectAndErrorText = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.grayBgColor};
  border-radius: 8px;
`;

const Selected = styled.div<SelectedPropType>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  padding: 17px 21px 16px 18px;
  border-radius: 8px;
  font-size: 16px;
  line-height: 24px;
  color: ${(props) => props.theme.textColor};
  &:hover {
    cursor: pointer;
  }
  &:focus {
    outline: none;
  }
`;

const Text = styled.div`
  font: normal normal normal 14px/17px Roboto, sans-serif;
  color: ${(props) => props.theme.textColor};
  outline: none;
  &:empty:before {
    content: attr(data-placeholder);
    outline: none;
    color: gray;
  }
`;

const Arrow = styled.div`
  position: relative;
  border: solid black;
  border-width: 0 1px 1px 0;
  display: inline-block;
  padding: 2px;
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
`;

const ArrowUp = styled.div`
  position: relative;
  top: 1px;
  border: solid black;
  border-width: 0 1px 1px 0;
  display: inline-block;
  padding: 2px;
  transform: rotate(-135deg);
  -webkit-transform: rotate(-135deg);
`;

const Options = styled.div`
  position: relative;
`;

const WrapperOptions = styled.div`
  position: absolute;
  width: 100%;
  top: 6px;
  padding-top: 6px;
  border-radius: 8px;
  box-shadow: 0px 3px 8px #00000026;
  z-index: 1;
  background-color: #ffffff;
`;

const Option = styled.div<SelectedPropType>`
  padding: 10px 0px 9px 19px;
  font: normal normal normal 14px/32px Roboto, sans-serif;
  color: ${(props) => props.theme.textColor};
  &:hover {
    cursor: pointer;
    background: ${(props) => props.theme.grayBgColor};
  }
`;

export {
  SelectAndErrorText,
  Selected,
  Text,
  Arrow,
  ArrowUp,
  Options,
  WrapperOptions,
  Option,
};
