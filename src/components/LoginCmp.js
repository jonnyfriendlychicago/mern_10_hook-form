import React, { useState } from 'react';  // added the comma/useState to enable mutable props
import {Button, Card, Form} from 'react-bootstrap';


//  content for form
const LoginCmp = (props) => {
    // const { username, email, password } = props; // JRF 
    
    // const [username, setUsername] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    const [confirmPassword, setConfirmPassword] = useState("");  

    // const [holdUsername, setHoldUsername] = useState("");
    // const [holdEmail, setholdEmail] = useState("");
    // const [holdPassword, setholdPassword] = useState("");  

    const newUser = { firstName, lastName, email, password, confirmPassword  };

    // const holdNewUser = {holdUsername, holdEmail, holdPassword}; 

    // const usernameDoIt = (e) => setUsername(e.target.value)
    const firstNameDoIt = (e) => setFirstName(e.target.value); 
    const lastNameDoIt = (e) => setLastName(e.target.value); 
    const emailDoIt = (e) => setEmail(e.target.value); 
    const passwordDoIt = (e) => setPassword(e.target.value); 
    const confirmPasswordDoIt = (e) => setConfirmPassword(e.target.value); 

    // const usernameDoItHold = (e) => 
    // setHoldUsername(e.target.value)
    // ; 

    const createUser = (e) => {
      // we must prevent the default refresh of the browser to keep our state from being reset
    e.preventDefault();
    // shorthand ES6 syntax for building an object - see notes above
    console.log("Welcome", newUser);
    setFirstName(""); 
    setLastName(""); 
    setEmail(""); 
    setPassword(""); 
    setConfirmPassword(""); 


    // holdUsername(setUsername ); 
    
    // console.log("holdNewUser.holdUsername:", holdNewUser.holdUsername)
    // setUsername("");
    // setEmail("");
    // setPassword("");

    };

    return(
    <>
        <Card style={ { width: '500px' , padding: '10px'}} >
            <p>Please provide your info:</p>
            <Form onSubmit={ createUser }>
                <Form.Group className="mb-3 bg-white" controlId="exampleForm.ControlInput1">
                    <Form.Label>First Name:</Form.Label>
                    <Form.Control backgroundcolor='3CBC8D' type="textarea" placeholder="" value={firstName} onChange={ firstNameDoIt } />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                    <Form.Label>Last Name:</Form.Label>
                    <Form.Control type="textarea" placeholder="" value={lastName} onChange={ lastNameDoIt } />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                    <Form.Label>Email:</Form.Label>
                    <Form.Control type="email" placeholder="" value={email} onChange={ emailDoIt } />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
                    <Form.Label>Password:</Form.Label>
                    <Form.Control type="password" placeholder="" value={password} onChange={ passwordDoIt } />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput5">
                    <Form.Label>Confirm Password:</Form.Label>
                    <Form.Control type="password" placeholder="" value={confirmPassword} onChange={ confirmPasswordDoIt } />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput6">
                    <Form.Control className ="btn btn-primary" type="submit" value="Create User" />
                </Form.Group>
                
            </Form>
        </Card>
{/*         
        <Card style={ { width: '350px' , margin: '5px',  display: 'flex', justifyContent: 'space-around'} } >
            <form onSubmit={ createUser }>
                <div>
                    <label>First Name: </label> 
                    <input type="text" value={firstName} onChange={ firstNameDoIt } />
                </div>

                <div>
                    <label>Last Name: </label> 
                    <input type="text" value={lastName} onChange={ lastNameDoIt } />
                </div>

                <div>
                    <label>Email: </label> 
                    <input type="text" value={email} onChange={ emailDoIt } />
                </div>

                <div>
                    <label>Password: </label> 
                    <input type="text" value={password} onChange={ passwordDoIt } />
                </div>

                <div>
                    <label>Confirm Password: </label> 
                    <input type="text" value={confirmPassword} onChange={ confirmPasswordDoIt } />
                </div>
                <input type="submit" value="Create User" />
            </form>
        </Card>     */}
        
        <Card style={ { width: '500px' , padding: '10px'}} >
            <p>Info you provided:</p>
            {/* {newUser.username} <br></br> */}
            <p>First Name: {newUser.firstName} </p>
            <p>Last Name:{newUser.lastName} </p>
            <p>Email:{newUser.email} </p>
            <p>Password:{newUser.password} </p>
            <p>Confirmed Password:{newUser.confirmPassword} </p>
        </Card>    

    </>
    )
};
    
export default LoginCmp;

