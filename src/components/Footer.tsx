import styled from "styled-components";

const StyledFooter = styled.footer`
  padding: 1%;
  text-align: center;
  background-color: #050561;
  color: azure;

  p {
    font-size: calc(2px + 1vw);
  }
`;

export default function Footer() {
    return (
        <StyledFooter>
            <p>All rights reserved &#169;</p>
        </StyledFooter>
    );
}