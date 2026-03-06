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

export default function Education() {
    return (
        <StyledMain>
            <h4>Educational Background</h4>
            <ul>
                <li>
                    <img src="/bu_logo.png" alt="BU Logo" />
                    Boston University | Sept. 2023 - May 2027
                </li>
                <br/>
                <li>
                    <img src="/oakton_logo.png" alt="Oakton Logo" />
                    Oakton High School | Aug. 2019 - June 2023
                </li>
                <br/>
                <li>
                    <img src="/cornell_logo.png" alt="Cornell Logo" />
                    Cornell University | Online Certification 2025
                </li>
            </ul>
        </StyledMain>
    );
}