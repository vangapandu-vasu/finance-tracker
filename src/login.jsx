import { useState } from "react";
import axios from "axios"
import { useNavigate } from "react-router";

function Signup(){

    const emailcheck=/^[A-Za-z0-9]+[A-Za-z0-9._%-]*@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();

    let handlesignup=(e)=>{
        e.preventdeafult();
        if(!email.match(emailcheck)){
            setError("please enter a valid email address");
        }
        else{
            setError("");
            axios.post("http://localhost:9000/login", {email,password}, {withCredentials:true})
            .then(Response=>{
                if(Response.data==="access granted"){
                    navigate("/home");
                }
                else if(Response.data==="denied"){
                    navigate("/login");
                    setError("wrong credientials");
                }
            })
        }
    }



    return(
        <>
            <form onSubmit={(e)=>handlesignup(e)}>
                <h5 id="loginhead">LOGIN</h5>
                <div className="loginform">
                    <input
                    id="loginemail"
                    type="text"
                    placeholder="enter your email"
                    onChange={(e)=>setEmail(e.target.email)}
                    required
                    >
                    </input>
                </div>
                <div className="loginform">
                    <input
                        id="loginpassword"
                        type="password"
                        placeholder="enter your password"
                        onChange={(e)=>setPassword(e.target.value)}
                        required
                    >
                    </input>
                </div>
                {error && <p id="loginerr">{error}</p>}
                <div>
                    <button 
                    id="loginbutton"
                    type="submit"
                    >Login</button>
                </div>
            </form>
        </>
    )
}

export default Signup;