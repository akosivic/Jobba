import { useEffect, useState } from "react";
// import UserService from "../services/UserService";
import { KeycloakProfile } from "keycloak-js";
import { useNavigate } from "react-router-dom";

const Register = () => {
    // const [isLoginCalled, setIsLoginCalled] = useState(false);

    // // // load the profile and call saga for update login information
    // function loadUserInfo() {
    //     UserService
    //         .loadUserProfile()
    //         .then(function (profile: KeycloakProfile) {
    //             localStorage.setItem('logged-user', profile.username!);
    //         })
    //         .catch(function (err: any) {
    //             console.log(`Error while loading progile :${err}`);
    //         });
    // }

    // useEffect(() => {
    //     if (UserService.isLoggedIn() && !isLoginCalled) {
    //         loadUserInfo();
    //         setIsLoginCalled(true);
    //     }
    // }, [1]);
    // let url = UserService.createRegisterUrl();
    return (
        <>
            {/* <iframe src={url.toString()}
                width="100%"
                height="600"
            ></iframe> */}
        </>
    )

};

export default Register;