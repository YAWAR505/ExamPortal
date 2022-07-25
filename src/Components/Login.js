import React, { useState } from 'react'
import BaseUrl from '../utils/BaseUrl';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        const result = await BaseUrl.post("/admin/login",
            JSON.stringify({ email, password }),
        )
        console.log(result);
        const { AccessToken, RefreshToken } = result.data.result
        localStorage.setItem('AccessToken', JSON.stringify(AccessToken))
        localStorage.setItem('RefreshToken', JSON.stringify(RefreshToken))

    }
    return (
        <div>
            <form>
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button onClick={handleSubmit}>submit</button>
            </form>
        </div>
    )
}

export default Login
