import { RiCloseLargeFill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { setLoginDialogVisibility } from "../redux/slices/loginDialog.slice";
import { API_BASE_URL } from "../constant";
import { ISuccess } from "../types";
import { useState } from "react";
import Spinner from "./Spinner";
import { Link } from "react-router-dom";

export default function LoginWithPopup() {
  const [isLoading, setIsLoading] = useState(false);

  const loginWithPopupVisibility = useSelector(
    (state: RootState) => state.loginDialogSlice
  );

  const dispatch = useDispatch();
  const closeDialgo = () => {
    dispatch(setLoginDialogVisibility(false));
  };

  const onSignInBtnClick = async () => {
    setIsLoading(true);
    const response = await fetch(`${API_BASE_URL}/auth/google`);
    const result = (await response.json()) as ISuccess<string>;
    window.open(result.data);
    setIsLoading(false);
  };

  return (
    <div
      onClick={closeDialgo}
      className={`size-full bg-[#00000059] fixed z-[60] ${
        loginWithPopupVisibility ? "flex-center" : "hidden"
      }`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="m-auto md:w-7/12 w-96 sm:w-[90%] relative"
      >
        <RiCloseLargeFill
          onClick={closeDialgo}
          className="absolute top-6 right-7 cursor-pointer active:scale-90"
        />
        <div className="rounded-xl bg-white dark:bg-gray-800 shadow-xl">
          <div className="p-8">
            <div className="space-y-4">
              <img src="/logo.png" loading="lazy" className="w-14" />
              <h2 className="mb-8 text-2xl text-cyan-900 dark:text-white font-bold">
                Log in to unlock the <br />
                best of App Helper.
              </h2>
            </div>
            <div className="mt-10 grid space-y-4">
              <button
                onClick={onSignInBtnClick}
                className={`group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100 ${
                  isLoading ? "hidden" : "block"
                }`}
              >
                <div className="relative flex items-center space-x-4 justify-center">
                  <img
                    src="https://www.svgrepo.com/show/475656/google-color.svg"
                    className="absolute left-0 w-5"
                    alt="google logo"
                  />
                  <span className="block w-max font-semibold tracking-wide text-gray-700 dark:text-white text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">
                    Continue with Google
                  </span>
                </div>
              </button>

              <div className={`w-full ${isLoading ? "flex-center" : "hidden"}`}>
                <Spinner size={"30"} />
              </div>
            </div>
            <div className="mt-14 space-y-4 py-3 text-gray-600 dark:text-gray-400 text-center">
              <p className="text-xs">
                By proceeding, you agree to our{" "}
                <Link to="/privacy-policy" className="underline">
                  Terms of Use
                </Link>{" "}
                and confirm you have read our{" "}
                <Link to="/privacy-policy" className="underline">
                  Privacy and Cookie Statement
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
