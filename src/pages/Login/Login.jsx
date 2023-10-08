
import { Link } from "react-router-dom";

import { useContext } from "react";
import { authContext } from "../../providers/AuthProvider";
import Navbar from "../Navbar/Navbar";


const Login = () => {

    const{logIn} = useContext(authContext);

    const handleLogIn = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        // log in user
        logIn(email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user)
          })
          .catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage)
          });

    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="bg-slate-300">
                <h2 className="text-center mt-10 pt-8 text-4xl font-semibold">Login your account </h2>
                <form onSubmit={handleLogIn} className="card-body md:w-3/4 lg:w-1/2 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
                <p className="text-center pb-8">Do not Have An Account ? <Link className="underline text-red-500 font-semibold" to={"/register"}>Register</Link></p>
            </div>
        </div>
    );
};

export default Login;