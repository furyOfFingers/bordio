import styled from "styled-components";

const ButtonStyle = styled.button`
  padding: 20px 0px;
  border: none;
  outline: none;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  color: #ffffff;
  font: normal normal normal 18px/22px Roboto, sans-serif;
  background: ${(props) =>
    props.disabled ? props.theme.disabledColor : props.theme.blueColor};
  border-radius: 31px;
  text-align: center;
`;

export { ButtonStyle };
