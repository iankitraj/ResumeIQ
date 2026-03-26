import React, { useState } from 'react'
import { useNavigate, Link } from "react-router"
import { useAuth } from '../hooks/useAuth'

const Register = () => {

    const navigate = useNavigate()
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const { loading, handleRegister } = useAuth()



    const handleSubmit = async (e) => {
        e.preventDefault()
        await handleRegister({ username, email, password })
        navigate("/")
    }

    if (loading) {
        return (<main><h1>Loading....</h1></main>)
    }

    return (
        <main>
            <div className="from-container">

                <h1>Create Account</h1>

                <form onSubmit={handleSubmit}>

                    <div className="input-group">
                        <label htmlFor="username">username</label>
                        <input onChange={(e) => { setUsername(e.target.value) }} type="text" id="username" name="username" required placeholder="Enter Your username" />
                    </div>

                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onChange={(e) => { setEmail(e.target.value) }} type="email" id="email" name="email" required placeholder="Enter Your Address" />
                    </div>

                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onChange={(e) => { setPassword(e.target.value) }} type="password" id="password" name="password" required placeholder="Enter Your Password" />
                    </div>

                    <button className='button primary-button'>SIGN UP</button>

                </form>

                <p>Already have an account? <Link to={"/login"}>Login</Link></p>

            </div>
        </main>
    )
}

export default Register
