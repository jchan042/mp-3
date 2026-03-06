import styled from "styled-components";

const StyledMain = styled.main`
  width: 70%;
  min-height: 100vh;
  text-align: center;
  font-size: calc(2px + 1.5vw);
  padding: 1% 2%;

  h3 {
    text-align: center;
    margin: 2% 0;
    font-size: calc(2px + 2vw);
  }

  hr {
    margin: 2% 0;
    border: none;
    border-top: 1px solid #ccc;
  }

  @media screen and (max-width: 1000px) {
    width: 100%;
    padding: 1%;
  }

  @media screen and (max-width: 750px) {
    padding: 2%;
  }
`;

const StyledSkillList = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: calc(10px + 1vw);
  padding-left: 0;
  list-style: none;
  flex-wrap: wrap;

  img {
    height: calc(30px + 2vw);
    width: auto;
    max-width: 100%;
    display: inline;
  }
`;

export default function Skills() {
    return (
        <StyledMain>
            <h3>Programming and Tools:</h3>
            <StyledSkillList>
                <li><img src="/python_logo.png" alt="Python Logo" /></li>
                <li><img src="/java_logo.webp" alt="Java Logo" /></li>
                <li><img src="/js_logo.png" alt="JS Logo" /></li>
                <li><img src="/sql_logo.png" alt="SQL Logo" /></li>
            </StyledSkillList>
            <hr />

            <h3>Libraries and Frameworks:</h3>
            <StyledSkillList>
                <li><img src="/pandas_logo.png" alt="Pandas Logo" /></li>
                <li><img src="/scikit_logo.png" alt="Scikit-learn Logo" /></li>
                <li><img src="/react_logo.png" alt="React Logo" /></li>
                <li><img src="/numpy_logo.png" alt="Numpy Logo" /></li>
            </StyledSkillList>
            <hr />

            <h3>Software:</h3>
            <StyledSkillList>
                <li><img src="/linux_logo.png" alt="Linux Logo" /></li>
                <li><img src="/office_logo.png" alt="MS Office Logo" /></li>
                <li><img src="/git_logo.png" alt="Git Logo" /></li>
                <li><img src="/LaTeX_logo.svg.png" alt="Latex Logo" /></li>
            </StyledSkillList>
        </StyledMain>
    );
}