import { Link, useLocation, useNavigate } from "react-router-dom";
import loginImg from "../../assets/images/login/login.svg";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const Login = () => {
  const { loginUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    loginUser(email, password)
      .then((res) => {
        console.log(res.user);
        if (location.state) {
          navigate(`${location.state}`);
        } else {
          navigate("/");
        }
      })
      .catch((err) => console.log(err.message));
  };
  return (
    <section className="md:min-h-[calc(100vh-363px)] my-5 flex gap-x-24 flex-col max-w-4xl mx-auto overflow-hidden md:flex-row md:h-48">
      <div className="flex items-center justify-center md:w-1/2">
        <div className="">
          <img src={loginImg} alt="" />
        </div>
      </div>

      <div className="flex items-center justify-center pb-6 md:py-0 md:w-1/2 border-2 rounded-lg">
        <div className="w-full">
          <h1 className="text-center text-4xl font-semibold">Login</h1>
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
                required
              />
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
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-error">Login</button>
            </div>
          </form>
          <div className="text-center">
            <small>
              Do not have an account?
              <Link
                className="text-orange-500 font-semibold ml-1"
                to={"/signup"}
              >
                Sign up
              </Link>
            </small>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
