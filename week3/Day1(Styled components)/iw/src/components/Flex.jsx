import styled from "styled-components";

const Flex = styled.div`
  display: flex;
  justify-content: center;
  color: green;
  margin: 20px;

  & div:nth-child(odd) {
    color: red;
    border: 1px solid blue;
  }
`;
export { Flex };
