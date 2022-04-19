import styled from "styled-components";

const Button = styled.button`
  /* background-color: #143f6b; */
  background: ${(props) => ( props.theme === "light" ? "white" : "#143f6b")};
  border-radius: 4px;
  text-align: center;
  padding: 10px;
  padding-top: 8px;
  cursor: pointer;
  color: ${(props) => (props.theme === "light" ? "#143f6b" : "white")};
  border: none;
  margin: 30px;

  /* apply hover */
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
`;
export { Button };
