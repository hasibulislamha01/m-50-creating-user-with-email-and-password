import { signInWithEmailAndPassword } from "firebase/auth";
import auth from "../firebase.config";
import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {

    const [loginError, setLoginError] = useState('');
    const [loginSuccessfull, setLoginSuccessfull] = useState('');

    const handleLogin = (e) => {
        e.preventDefault()
        console.log('clicked', e)
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        setLoginError('');
        setLoginSuccessfull('')

        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                console.log(result.user);
                setLoginSuccessfull('You are successfully logged in')
            })
            .catch((error) => {
                console.log(error.message);
                setLoginError(error.message)
            })
    }
    return (
        <div className="card  w-2/5 mx-auto mt-12 shadow-2xl bg-base-100">
            <form className="card-body" onSubmit={handleLogin}>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input
                        type="email"
                        name="email"
                        placeholder="email"
                        className="input input-bordered"
                        required />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input
                        type="password"
                        name="password"
                        placeholder="password"
                        className="input input-bordered"
                        required />

                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button type="submit" className="btn btn-accent">Login</button>
                </div>
            </form>
            <div className={loginError || loginSuccessfull ? 'hidden' : 'block mb-12'}>
                <h1 className="text-center ">
                    New to this Website ? <br />
                    <Link to='/register' className="font-semibold text-cyan-600">Register</Link>
                </h1>
            </div>
            {
                loginError && <p className="mb-12 text-center text-red-500 font-medium">{loginError}</p>

            }
            {

                loginSuccessfull && <p className="mb-12 text-center text-green-500 font-medium">{loginSuccessfull}</p>
            }

        </div>
    );
};

export default Login;