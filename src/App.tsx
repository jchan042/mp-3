import Header from "./components/Header.tsx";
import Nav from "./components/Nav.tsx";
import Footer from "./components/Footer.tsx";
import Home from "./components/mains/Home.tsx";
import Education from "./components/mains/Education.tsx";
import Experiences from "./components/mains/Experiences.tsx";
import Leadership from "./components/mains/Leadership.tsx";
import Projects from "./components/mains/Projects.tsx";
import Skills from "./components/mains/Skills.tsx";
import { createBrowserRouter, Route, RouterProvider, Routes } from "react-router";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        box-sizing: border-box;
    }

    body {
        background-color: #f0f4f8;
        font-family: Georgia, "Times New Roman", serif;
    }
`;

/* mirrors MP1's #page-wrapper */
const StyledPageWrapper = styled.div`
    width: 80vw;
    background-color: azure;
    margin: 0 auto;
`;

/* mirrors MP1's #nav-main */
const StyledNavMain = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: stretch;

    @media screen and (max-width: 750px) {
        flex-direction: column;
    }
`;

function Root() {
    return (
        <>
            <GlobalStyle />
            <StyledPageWrapper>
                <Header />
                <StyledNavMain>
                    <Nav />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/education" element={<Education />} />
                        <Route path="/experiences" element={<Experiences />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/leadership" element={<Leadership />} />
                        <Route path="/skills" element={<Skills />} />
                    </Routes>
                </StyledNavMain>
                <Footer />
            </StyledPageWrapper>
        </>
    );
}

const router = createBrowserRouter([{ path: "*", Component: Root }]);

export default function App() {
    return <RouterProvider router={router} />;
}