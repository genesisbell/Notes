import React, {useState} from "react";
import {Link} from "react-router-dom";

function Register(){
    const [inputText, setInputText] = useState({
        username: "",
        password: ""
    });
    const [isEmpty, setEmpty] = useState(false)

    function handleChange(event){
        const {name, value} = event.target;

        setInputText(prevValue => {
            return{
                ...prevValue,
                [name]: value
            }
        })

    }

    function handleClick(event){
        if(inputText.username === "" || inputText.password === ""){
            event.preventDefault();
            setEmpty(true)
        }
    }

    return(
        <div id="login">
            <h3>Welcome {inputText.username}!</h3>
            <input name="username" placeholder="username" spellCheck="false" onChange={handleChange} value={inputText.username}/>
            <input name="password" type="password" placeholder="password" spellCheck="false" onChange={handleChange} value={inputText.password}/>
            {isEmpty && <p>Please enter all fields!</p>}
            <Link to="/mainpage"><button className="btn btn-dark" onClick={handleClick}>Register</button></Link>    
        </div>
        
    );
}

export default Register;