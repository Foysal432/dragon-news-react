import { Link, useLocation, useNavigate } from "react-router-dom";
import NavBar from "../Shared/NavBar/NavBar";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvaider";

const Login = () => {
    const {singin}=useContext(AuthContext)
    const location =useLocation();
    const navigate =useNavigate()
    console.log('location is login page',location);
    const handlelogin = e =>{
        e.preventDefault();
        console.log(e.currentTarget);
        const from = new FormData(e.currentTarget)
        const email=from.get('email');
        const password=from.get('password')
        console.log(email,password);
      singin(email,password)
      .then(result=>{
        console.log(result.user);
        // navigate after log in
        navigate (location?.state ? location.state :'/')

      })
      .catch(error=>{
        console.error(error)
      })
    }
    return (
        <div>
            <NavBar></NavBar>
            <div className="">
            <h1 className="text-center">Please login </h1>
             <form onSubmit={handlelogin} className="card-body lg:w-1/2 mx-auto">
       
        <div className="form-control ">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
    </div>
    <p className="text-center">Do not have account go to <Link to='/register'>Register</Link> </p>
        </div>
    );
};

export default Login;