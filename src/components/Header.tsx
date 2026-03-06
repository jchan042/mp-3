import styled from "styled-components";

const StyledHeader = styled.header`
  padding: 1%;
  background-color: #050561;
  color: azure;
  text-align: center;

  h1 {
    font-size: calc(4px + 2.5vw);
  }

  p {
    font-size: calc(2px + 1.2vw);
    margin-top: 0.3%;
  }

  @media screen and (max-width: 1000px) {
    text-align: left;
  }

  @media screen and (max-width: 750px) {
    text-align: center;
  }
`;

export default function Header() {
    return (
        <StyledHeader>
            <h1>Jocelyn Chan's Online Resume</h1>
            <p>Welcome to the website for my online resume!</p>
        </StyledHeader>
    );
}