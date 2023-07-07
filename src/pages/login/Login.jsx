import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="min-h-screen bg-[#1cae81]  flex justify-center items-center font-poppins relative">
      <div className="w-80">
        <div>
          {/* Email */}
          <div className="mb-5">
            <label
              htmlFor="email"
              className="bg-[#085d60] py-2 px-4 rounded-t-md  text-center text-white"
            >
              Email
            </label>
            <input
              type="text"
              placeholder="Email"
              id="email"
              className="input input-bordered w-full rounded-tl-none  max-w-xs bg-[#ddf3ec] text-[#1cae81]"
            />
          </div>
          {/* End Email */}
          {/* Password */}
          <div className="mb-5">
            <label
              htmlFor="password"
              className="bg-[#085d60] py-2 px-4 rounded-t-md  text-center text-white"
            >
              Password
            </label>
            <input
              type="password"
              placeholder="password"
              id="password"
              className="input input-bordered w-full rounded-tl-none  max-w-xs bg-[#ddf3ec] text-[#1cae81]"
            />
          </div>
          {/* End Password */}
          <Link
            to={"/home"}
            className="flex justify-center w-full border border-[#c0ed7c]  "
          >
            <div className="py-2 text-[#c0ed7c]  active:scale-95 w-fit transition duration-150">
              Mulai Sekarang
            </div>
          </Link>
          <div className="flex justify-center translate-y-20 gap-5">
            <div className="flex flex-col justify-center">
              <div className="bg-white rounded-full w-16 h-16 overflow-hidden flex flex-col justify-center">
                <img
                  src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
                  alt="google"
                  className="w-full"
                />
              </div>
              <p className="text-white text-center mt-1">Google</p>
            </div>

            <div className="flex flex-col justify-center items-center">
              <div className="bg-white rounded-full w-16 h-16 overflow-hidden flex flex-col items-center justify-center">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/2048px-2021_Facebook_icon.svg.png"
                  alt="facebook"
                  className="w-full"
                />
              </div>
              <p className="text-white text-center mt-1">Facebook</p>
            </div>

            <div className="flex flex-col items-center justify-center">
              <div className="bg-white rounded-full w-16 h-16 overflow-hidden flex flex-col justify-center">
                <img
                  src="https://static-00.iconduck.com/assets.00/twitter-icon-2048x2048-mxshr62f.png"
                  className="w-full"
                />
              </div>
              <p className="text-white text-center mt-1">Twitter</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
