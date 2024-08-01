import MobileMenuBtn from "./Navbar/MobileMenuBtn";
import { IoCloseOutline } from "react-icons/io5";
import { RiSearchLine } from "react-icons/ri";
import { useState } from "react";
import { Link } from "react-router-dom";
import { CiLogout } from "react-icons/ci";
import { useAuthentication } from "../hooks/useAuthentication";
import SearchBox from "./Navbar/SearchBox";
import OpenLoginDialogBtn from "./OpenLoginDialogBtn";
import ContactUs from "./ContactUs";

export default function Navbar() {
  const [searchInputVisibility, setSearchInputVisibility] = useState(false);

  const onSearchBtnClick = () => {
    setSearchInputVisibility(true);
  };
  const closeSearchBtnClick = () => {
    setSearchInputVisibility(false);
  };

  const { isAuthenticated, userInfo, setUserInformation } = useAuthentication();

  const logout = () => {
    setUserInformation(null);
  };

  return (
    <header className="min-h-[80px] flex items-center px-[var(--paddingx)] sm:px-5 sm:h-[85px]">
      <Link to={"/"}>
        <img
          alt="App helper logo"
          className="w-16"
          src="./logo.png"
        />
      </Link>

      <SearchBox
        searchInputVisibility={searchInputVisibility}
        setSearchInputVisibility={setSearchInputVisibility}
      />

      <div className="flex-center gap-8 sm:gap-5 sm:justify-end sm:w-full">
        {/* <Notification /> */}
        <ContactUs />
        <OpenLoginDialogBtn
          className={`text-white sm:hidden bg-[var(--button-bg)] hover:bg-[#5d5492]/90 focus:ring-4 focus:outline-none focus:ring-[#5d5492]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#5d5492]/55 me-2 mb-2 ${
            isAuthenticated ? "hidden" : "block"
          }`}
        >
          Sign in
        </OpenLoginDialogBtn>

        <div className="relative group/accounticon sm:hidden">
          <button
            title={userInfo?.name}
            className={`size-10 bg-gray-400 rounded-full overflow-hidden ${
              isAuthenticated ? "flex-center" : "hidden"
            }`}
          >
            <img src={userInfo?.picture} className="size-full object-cover" />
          </button>
          <button
            onClick={logout}
            className="cursor-pointer hover:bg-slate-100 transition-all duration-300 fixed right-11 translate-y-2 logout-btn-shdow bg-white px-4 py-2 z-10 flex items-center gap-3 opacity-0 invisible group-hover/accounticon:opacity-100 group-hover/accounticon:visible"
          >
            <CiLogout className="rotate-180" />
            <span className="text-sm font-semibold text-gray-500">Log Out</span>
          </button>
        </div>
        {/* <button className="text-blue-600 sm:hidden">Sign in</button> */}
        {searchInputVisibility ? (
          <IoCloseOutline
            className="hidden sm:block"
            onClick={closeSearchBtnClick}
            size={23}
          />
        ) : (
          <RiSearchLine
            className="hidden sm:block"
            onClick={onSearchBtnClick}
            size={23}
          />
        )}
        <MobileMenuBtn />
      </div>
    </header>
  );
}
