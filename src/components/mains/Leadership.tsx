import styled from "styled-components";

const StyledMain = styled.main`
  width: 70%;
  min-height: 100vh;
  text-align: center;
  font-size: calc(2px + 1.5vw);
  padding: 1% 2%;

  h4 {
    text-align: center;
    margin: 2% 0;
    font-size: calc(2px + 2vw);
  }

  ul {
    padding-left: 0;
    list-style: none;
    text-align: left;
  }

  li {
    margin: 2% 1%;
    font-size: calc(2px + 1.5vw);
    display: flex;
    align-items: center;
    gap: 1%;
  }

  img {
    max-width: 15%;
    vertical-align: middle;
  }

  @media screen and (max-width: 1000px) {
    width: 100%;
    padding: 1%;

    li {
      margin: 1.5% 0.5%;
    }
  }

  @media screen and (max-width: 750px) {
    padding: 2%;
  }
`;

export default function Leadership() {
    return (
        <StyledMain>
            <h4>Leadership Roles</h4>
            <ul>
                <li>
                    <img src="/bhacks_logo.jpg" alt="BHacks Logo" />
                    BostonHacks | Sponsorship Team Head
                </li>
                <li>
                    <img src="/gwc_logo.png" alt="GWC Logo" />
                    Girls Who Code @ BU | Public Relations Chair
                </li>
                <li>
                    <img src="/mic_logo.jpg" alt="MIC Logo" />
                    BU Machine Intelligence Community | Society Chair
                </li>
            </ul>
        </StyledMain>
    );
}