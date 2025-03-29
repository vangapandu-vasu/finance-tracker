import { useState } from "react";
import axios from "axios"
import { useNavigate } from "react-router";

function Signup(){

    const emailcheck=/^[A-Za-z0-9]+[A-Za-z0-9._%-]*@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();

    let handleSignup=(e)=>{
        console.log("in frontend");
        e.preventDefault();
        if(!email.match(emailcheck)){
            setError("please enter a valid email address");
        }
        else{
            setError("");
            axios.post("http://localhost:9000/signup", {name,email,password}, {withCredentials:true})
            .then(Response=>{
                if(Response.data==="already exists"){
                    console.log("in frontend");
                    setError("email address already exists");
                }
                else if(Response.data==="success"){
                    navigate("/home");
                }
            })
            .catch(error=>{
                console.log("error in postlink", error);
            })
        }
    }



    return(
        <>  
            <h5 id="signuphead">SIGNUP</h5>
            <form onSubmit={(e)=>handleSignup(e)}>
                <div className="signupform">
                    <input 
                    id="name"
                    type="text"
                    placeholder="enter your name"
                    onChange={(e)=>setName(e.target.value)}
                    required
                    >
                    </input>
                </div>
                <div className="signupform">
                    <input
                    id="email"
                    type="text"
                    placeholder="enter your email"
                    onChange={(e)=>setEmail(e.target.value)}
                    required
                    >
                    </input>
                </div>
                <div className="signupform">
                    <input
                        id="password"
                        type="password"
                        placeholder="enter your password"
                        onChange={(e)=>setPassword(e.target.value)}
                        required
                    >
                    </input>
                </div>
                {error && <p id="signuperr" >{error}</p>}
                <div>
                    <button
                    id="signupbutton"
                    type="submit"
                    >
                        Signup
                    </button>
                </div>
            </form>
        </>
    )
}

export default Signup;
