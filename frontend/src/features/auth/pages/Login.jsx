import React, { useState } from 'react'
import { Navigate, Link } from 'react-router';
import "../auth-form.scss";
import { useAuth } from '../hooks/useAuth';
import { useNavigate } from 'react-router';

const Login = () => {

    const { loading, handleLogin } = useAuth()
    const navigate = useNavigate()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()
        await handleLogin({ email, password })
        navigate("/")

    }
    if (loading) {
        return (<main><h1>Loading....</h1></main>)
    }

    return (
        <main>
            <div className="from-container">

                <h1>Sign in</h1>

                <form onSubmit={handleSubmit}>

                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onChange={(e) => { setEmail(e.target.value) }} type="email" id="email" name="email" required placeholder="Enter Your Address" />
                    </div>

                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onChange={(e) => { setPassword(e.target.value) }} type="password" id="password" name="password" required placeholder="Enter Your Password" />
                    </div>

                    <button className='button primary-button'>SIGN IN</button>

                    <p>Don't have an account? <Link to={"/register"}>Signin</Link></p>


                </form>

            </div>
        </main>
    )
}

export default Login
