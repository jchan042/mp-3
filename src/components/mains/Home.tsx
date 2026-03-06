import styled from "styled-components";

const StyledMain = styled.main`
  width: 70%;
  min-height: 100vh;
  text-align: center;
  font-size: calc(2px + 1.5vw);
  padding: 1% 2%;
  overflow: hidden;
  box-sizing: border-box;

  h4 {
    text-align: center;
    margin: 2% 0;
    font-size: calc(2px + 2vw);
  }

  p {
    line-height: 150%;
    padding: 2%;
    font-size: calc(4px + 1.5vw);
    text-align: left;
  }

  img {
    max-width: 100%;
    width: 40%;
    border-radius: 4px;
    display: block;
  }

  @media screen and (max-width: 1000px) {
    width: 100%;
    padding: 1%;

    img {
      width: 60%;
      max-width: 100%;
    }
  }

  @media screen and (max-width: 750px) {
    padding: 2%;
  }
`;

const StyledMainContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  max-width: 100%;
  margin: 5% 0;
  overflow: hidden;

  p {
    width: 55%;
    max-width: 55%;
  }

  @media screen and (max-width: 1000px) {
    flex-direction: column;

    p {
      width: 100%;
      max-width: 100%;
    }
  }

  @media screen and (max-width: 750px) {
    margin: 8% 0;
  }
`;

export default function Home() {
    return (
        <StyledMain>
            <h4>Home</h4>
            <StyledMainContent>
                <img src="/headshot.jpg" alt="Headshot of Jocelyn Chan" />
                <p>
                    My name is Jocelyn Chan, and I am an undergraduate student at Boston University
                    majoring in Computer Science with a minor in Data Science. I love to work with data
                    and I hope to further my skills and understanding in data analysis, AI/ML, and full-stack.
                </p>
            </StyledMainContent>
            <p>
                Welcome to my website and online resume! Here you will find my
                educational and my professional history as well as other experiences that
                may be of interest to you.
            </p>
        </StyledMain>
    );
}