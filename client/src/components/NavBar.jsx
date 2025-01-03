import { Link } from "react-router-dom";

import "./NavBar.css"
import { LogOutButton } from "../components/LogOutButton.jsx"

export function NavBar() {
    const isLoggedIn = localStorage.getItem('token');

    return (

        <nav className="navbar">
            {isLoggedIn ? (
            <div style={{ margin: "0 100px", display: "flex", gap: "20px" }}>
                <Link to="/dashboard"><img width="100%" height="70rem"  src="../src/assets/mean-money-logo.png" ></img></Link>
                </div>
            ) : (
                <>
                <Link to="/"><img width="100%" height="70rem"  src="../src/assets/mean-money-logo.png" ></img></Link>
                </>
            )}
            
            {isLoggedIn ? (
                <div style={{ margin: "0 100px", display: "flex", gap: "20px" }}>
                    <Link className="nav-link" to="/dashboard">Dashboard</Link>
                    <LogOutButton />
                </div>
            ) : (
                <>
                    <div style={{ margin: "0 100px", display: "flex", gap: "20px" }}>
                        <Link className="nav-link" to="/login">Login</Link>
                        <Link className="nav-link" to="/signup">Sign Up</Link>
                    </div>
                </>
            )}
        </nav>

    )
}
