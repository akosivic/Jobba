import React from "react";
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../authConfig";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";

/**
 * Renders a drop down button with child buttons for logging in with a popup or redirect
 */
const LogIn = () => {
    const { instance } = useMsal();

    const handleLogin = (loginType: LoginType) => {
        if (loginType === LoginType.popup) {
            instance.loginPopup(loginRequest).catch(e => {
                console.log(e);
            });
        } else if (loginType === LoginType.redirect) {
            instance.loginRedirect(loginRequest).catch(e => {
                console.log(e);
            });
        }
    }
    return (
        <DropdownButton variant="secondary" className="ml-auto" drop="start" title="Sign In">
            <Dropdown.Item as="button" onClick={() => handleLogin(LoginType.popup)}>Sign in using Popup</Dropdown.Item>
            <Dropdown.Item as="button" onClick={() => handleLogin(LoginType.redirect)}>Sign in using Redirect</Dropdown.Item>
        </DropdownButton>
    )
}

enum LoginType {
    popup = "popup",
    redirect = "redirect"
}

export default LogIn;