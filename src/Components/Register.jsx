import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../firebase.config";
import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Register = () => {

    const [registerError, setRegisterError] = useState('');
    const [registerSuccess, setRegisterSuccess] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleRegister = (e) => {
        e.preventDefault()
        console.log('Submitted');
        const email = e.target.email.value;
        const password = e.target.password.value;
        const isAccepted = e.target.terms.checked;
        console.log(email, password, isAccepted);

        if (password.length < 6) {
            setRegisterError('Password has to be 6 charecters or longer')
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setRegisterError('Password must contain at least one capital letter')
            return;
        }
        else if (!isAccepted) {
            setRegisterError('You must accept out terms and condition');
            return;
        }

        setRegisterError('')
        setRegisterSuccess('')

        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                console.log(result.user)
                setRegisterSuccess('Succssfully Registered')
            })
            .catch((error) => {
                console.error(error.message)
                const message = error.message;

                setRegisterError(message)
            })
    }

    return (
        <div className="w-1/5 mx-auto">
            <h2 className="text-2xl font-medium text-center my-6">Plese Register</h2>

            <form className="flex flex-col gap-4" onSubmit={handleRegister}>
                <label className="input input-bordered flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                    <input
                        type="text"
                        name="email"
                        placeholder="Email"
                        required />
                </label>
                <label className="input input-bordered flex items-center gap-2">

                    <input
                        type={showPassword ? 'text' : 'password'}
                        name="password"
                        placeholder="password"
                        required />
                    <span onClick={() => setShowPassword(!showPassword)}>
                        {
                            showPassword ?
                                <FaRegEyeSlash></FaRegEyeSlash> :
                                <FaRegEye></FaRegEye>
                        }
                    </span>
                </label>

                <div className="form-control">
                    <label className="cursor-pointer label justify-start gap-4">
                        <input type="checkbox"
                            name="terms"
                            defaultChecked
                            className="checkbox checkbox-accent" />

                        <span className="label-text">Accept our <a href="">terms and condition</a></span>
                    </label>
                </div>

                <button type="submit" className="btn bg-cyan-300">Register</button>
            </form>
            <div className={registerError || registerSuccess ?
                'hidden' : 'block text-center my-12'}>
                <p>Already have an account? <br />
                    <Link to='/login' className="font-semibold text-cyan-600"> Login</Link>
                </p>
            </div>

            {
                registerError && <p className="text-red-500 font-medium text-center">{registerError}</p>
            }
            {
                registerSuccess && <p className="text-green-500 font-medium text-center">{registerSuccess}</p>
            }
        </div>
    );
};

export default Register;


