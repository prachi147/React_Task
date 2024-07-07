// import { useState } from "react";

import axios from "axios";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();

    const handleSubmission = async () => {
        try {
            const response = await axios.post('https://reqres.in/api/login',{email,password});
            if(response === 200){
                // localStorage.setItem('isLoggedIn','true');
                navigate('/home'); // Redirect to home page

            }

        } catch (error) {
            console.log("Login Failed ");
            alert("Login Failed");
        }

    }

    return <>
        <section>
            <main>
                <div className="container">
                    <div className="loginForm">
                        <h2>Login Page</h2>
                        <form onSubmit={handleSubmission}>
                            <div className="inputFields">
                                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email Here ....." required></input>

                            </div>
                            <div className="inputFields">
                                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password Here ..."></input>
                            </div>
                            <br></br>
                            <div className="loginBtn">
                                <button type="submit">Login Now</button>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
        </section>
    </>
};

export default Login;