import { Link } from "react-router-dom";
import NavBar from "../Shared/NavBar/NavBar";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvaider";

const Register = () => {
    const { createUser} =useContext(AuthContext)
    const handleRegister = e =>{
        e.preventDefault();
        console.log(e.currentTarget);
        const from = new FormData(e.currentTarget);
        const email=from.get('email')
        const password=from.get('password')
        const name=from.get('name')
        const photo=from.get('photo')
        console.log(email,password,name,photo);
        // create user
        createUser(email,password)
        .then(result => {
            console.log(result.user)
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
             <form onSubmit={handleRegister} className="card-body lg:w-1/2 mx-auto">
             <div className="form-control ">
          <label className="label">
            <span className="label-text">Your Name</span>
          </label>
          <input type="text" name="name" placeholder="Enter Your Name" className="input input-bordered" required />
        </div>
        <div className="form-control ">
          <label className="label">
            <span className="label-text">Image URL</span>
          </label>
          <input type="text" name="photo" placeholder="Enter Your Image URL" className="input input-bordered" required />
        </div>
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
          <button className="btn btn-primary">Register</button>
        </div>
      </form>
    </div>
    <p className="text-center">Do  have account ? go to <Link to='/login'>Login</Link></p>
        </div>
    );
    
};

export default Register;