import styled from "styled-components";

const HeadText = styled.span`
  margin-bottom: 37px;
  font: normal normal bold 28px/34px Roboto, sans-serif;
  letter-spacing: 0px;
  text-align: center;
  color: ${(props) => props.theme.textColor};
`;

const WrapperAuthForm = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 400px;
  margin: 0 auto;
  padding: 32px 28px 53px 29px;
  box-sizing: border-box;
  border-radius: 8px;
  background-color: white;
`;

const CheckboxText = styled.span`
  display: flex;
  margin-left: 8px;
  font: normal normal normal 14px/17px Roboto, sans-serif;
  color: ${(props) => props.theme.textColor};
`;

const AHref = styled.a`
  margin: 0px 5px;
  font: normal normal normal 14px/17px Roboto, sans-serif;
  color: ${(props) => props.theme.blueColor};
  &:link {
    text-decoration: none;
  }
`;
const WrapperRadioButton = styled.div`
  display: flex;
`;

export { HeadText, WrapperAuthForm, CheckboxText, WrapperRadioButton, AHref };
