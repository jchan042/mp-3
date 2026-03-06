import { Link } from "react-router";
import styled from "styled-components";

const StyledNav = styled.nav`
    width: 30%;
    background-color: #050561;

    @media screen and (max-width: 750px) {
        width: 100%;
    }
`;

const StyledList = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-left: 0;
    list-style: none;

    @media screen and (max-width: 750px) {
        flex-direction: row;
        justify-content: space-evenly;
        flex-wrap: wrap;
    }
`;

const StyledListItem = styled.li`
    width: 80%;
    margin: 8% auto;
    padding: 1% 3%;
    border: 3px solid white;
    text-align: center;

    @media screen and (max-width: 750px) {
        width: 15%;
        margin: 1%;
        padding: 1%;
    }
`;

const StyledLink = styled(Link)`
    font: normal small-caps bold calc(2px + 1.5vw) "Playfair Display", Georgia, serif;
    color: white;
    text-decoration: none;

    &:hover {
        color: cornflowerblue;
    }

    @media screen and (max-width: 750px) {
        font-size: calc(2px + 1vw);
    }
`;

export default function Nav() {
    return (
        <StyledNav>
            <StyledList>
                <StyledListItem><StyledLink to="/">Home</StyledLink></StyledListItem>
                <StyledListItem><StyledLink to="/education">Education</StyledLink></StyledListItem>
                <StyledListItem><StyledLink to="/experiences">Experience</StyledLink></StyledListItem>
                <StyledListItem><StyledLink to="/projects">Projects</StyledLink></StyledListItem>
                <StyledListItem><StyledLink to="/leadership">Leadership</StyledLink></StyledListItem>
                <StyledListItem><StyledLink to="/skills">Skills</StyledLink></StyledListItem>
            </StyledList>
        </StyledNav>
    );
}