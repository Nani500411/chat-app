import React, { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin.js";
import "./Login.css"; // Import CSS file

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loginInProgress, setLoginInProgress] = useState(false); // State to track login progress

    const { loading, login } = useLogin();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoginInProgress(true); // Set login in progress when login button is clicked
        await login(username, password);
        setLoginInProgress(false); // Reset login in progress when login process is completed
    };

    return (
        <div className="login-container">
            <div className="login-form">
                <h1 className="login-heading">
                    Login <span>Chat</span>
                </h1>

                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="username" className="label">
                            Username
                        </label>
                        <input
                            type="text"
                            id="username"
                            className="login-input"
                            placeholder="Enter username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="label">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            className="login-input"
                            placeholder="Enter Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <Link to="/signup" className="login-link">
                        {"Don't"} have an account?
                    </Link>

                    <div>
                        <button className={`login-button ${loginInProgress ? 'login-button-loading' : ''}`} disabled={loading || loginInProgress}>
                            {loading ? <span className="loading loading-spinner"></span> : "Login"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};
export default Login;
