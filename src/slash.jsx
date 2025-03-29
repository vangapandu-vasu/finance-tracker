import { useNavigate } from "react-router";

function Slash(){

    const navigate=useNavigate();

    let handlesig=(e)=>{
        e.preventDefault();
        navigate("/signup");
    }

    let handlelog=(e)=>{
        e.preventDefault();
        navigate("/login");
    }

    return(
        <>
            <h1>The finance tracker</h1>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique rerum expedita,
                soluta excepturi adipisci molestiae facilis ullam maxime sint sequi totam eos quib
                usdam illum nisi id laudantium mollitia. Ea, omnis?
            </p>
            <button  className="signup" onClick={(e)=>handlesig(e)}>Signup</button>
            <button className="losgin" onClick={(e)=>handlelog(e)}>Login</button>
        </>
    )
}

export default Slash;