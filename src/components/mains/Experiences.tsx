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

export default function Experiences() {
    return (
        <StyledMain>
            <h4>Professional Experiences</h4>
            <ul>
                <li>
                    <img src="/gdit_logo.png" alt="GDIT Logo" />
                    General Dynamics IT | Incoming Data Analyst Intern
                </li>
                <br/>
                <li>
                    <img src="/bttai_logo.png" alt="BTTAI Logo" />
                    Breakthrough Tech AI | AI/ML Fellow
                </li>
                <br/>
                <li>
                    <img src="/ginia_logo.png" alt="Ginia Logo" />
                    GINIA Inc. | AI Intern
                </li>
                <br/>
                <li>
                    <img src="/bucds_logo.jpg" alt="BU CDS Logo" />
                    BU Department of Computer Science | Office Assistant
                </li>
            </ul>
        </StyledMain>
    );
}