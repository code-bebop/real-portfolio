import styled from "styled-components";

const Velcro = styled.section`
  position: absolute;
  top: 0;
  right: 0;
  width: 23.333%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0 4.4rem;
  box-sizing: border-box;
  & > p {
    font-size: 1.857vh;
    line-height: 1.5em;
    color: #fff;
    letter-spacing: 0.055em;
  }
`;

export default Velcro;
