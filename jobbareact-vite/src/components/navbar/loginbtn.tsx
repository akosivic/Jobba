import { Nav } from "react-bootstrap";
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../../authConfig";
import { NavLink } from "react-router-dom";

function LoginButton() {
    const { instance } = useMsal();

    const handleLogin = () => {
        instance.loginPopup(loginRequest).catch(e => {
            console.log(e);
        });
    };
    return (
        <>
            <Nav.Link className="nav-link" onClick={handleLogin}>Sign in</Nav.Link>
        </>
    )
}

export default LoginButton