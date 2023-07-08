import { Nav } from "react-bootstrap";
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../../authConfig";
import { NavLink } from "react-router-dom";

function LoginButton() {
    const { instance } = useMsal();

    const handleLogout = () => {
        instance.logoutPopup({
            mainWindowRedirectUri : "http://localhost:3000/",
        }).catch(e => {
            console.log(e);
        });
    };
    return (
        <>
            <Nav.Link className="nav-link" onClick={handleLogout}>Sign out</Nav.Link>
        </>
    )
}

export default LoginButton