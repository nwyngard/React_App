import { Link } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";
import { useState, useEffect } from "react";

const Header = () => {

    const [darkMode, setDarkMode] = useState(false);

    //click event that handles Toggle dark mode button
    const toggleDarkMode = () => {
        setDarkMode(function(prevMode){
            const nextMode = !prevMode
            document.body.className = nextMode ? 'dark-mode' : '';
            saveTheme();
            return nextMode;
        });
    }

    //store in local storage the number of times the user toggles dark mode for personalisation
    function saveTheme() {
        const now = new Date();
        const darkModeTimes = JSON.parse(localStorage.getItem("darkModeTimes") || "[]");
        darkModeTimes.push(now.getHours());
        localStorage.setItem("darkModeTimes", JSON.stringify(darkModeTimes));
    }

    useEffect(() =>{
        const darkModeTimes = JSON.parse(localStorage.getItem("darkModeTimes") || "[]");
        console.log(darkModeTimes);
        let averageTime = 0;
        if (darkModeTimes.length > 0) {
            averageTime = darkModeTimes.reduce((previous, current) => {
                return previous + current
            }, 0);
            averageTime = averageTime / darkModeTimes.length;
        }
        const now = new Date()
        if (now.getHours() > averageTime){
            setDarkMode(true)
            document.body.className = "dark-mode"
        }
        
    },[])


    return ( 
        <Navbar className="mb-4" bg='dark' variant='dark'>
            <Container>
                <Navbar.Brand as={Link} to='/'>
                    Recipes
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/feedback">Feedback</Nav.Link>
                        <Nav.Link as={Link} to="/admin">Admin</Nav.Link>
                    </Nav>
                    {/*Toggle Dark Mode On/Off */}
                    <button onClick={toggleDarkMode} className="theme-toggle-btn">Toggle Dark Mode</button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
     );
}


 
export default Header;