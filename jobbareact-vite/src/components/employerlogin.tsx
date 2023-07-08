import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import './common.scss';

export default function EmployerLoginBtn(): JSX.Element {
    return (
        <>
            <Button variant="primary" className="mb-1 mt-sm-1">
                Employer Login
            </Button>
        </>)
};
// const [show, setShow] = useState(false);
// // const { keycloak, initialized } = useKeycloak();
// const handleClose = () => setShow(false);
// const handleShow = () => setShow(true);



// if (!keycloak.authenticated) {
//     return (
//         <>
//             <Button variant="primary" className="mb-1 mt-sm-1">
//                 Employer Login
//             </Button>
//         </>)
// }
// return (<></>)
{/* {!keycloak?.authenticated && (
                <Button variant="success" className="mb-1 mt-sm-1" onClick={() => keycloak.login()}>
                    Employer Login
                </Button>
            )}

            {!!keycloak?.authenticated && (
                <button
                    type="button"
                    className="text-blue-800"
                    onClick={() => keycloak.logout()}
                >
                    Logout
                </button>
            )} */}

{/* <Modal show={show} onHide={handleClose} backdrop="static">
                <Modal.Header closeButton>
                    <Modal.Title className="d-flex ms-auto"><span className="p-2 text-center">Sign in to</span><JobbaLogo /></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="me@example.com" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                            <Form.Text className="col-auto text-end">
                                Forgot Password
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3 row p-3" controlId="formBasicCheckbox">
                            <Form.Check className="col-auto" type="checkbox" label="Remember Me" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal> */}
    // </>
    // );
// }