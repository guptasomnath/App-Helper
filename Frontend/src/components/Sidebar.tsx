import { GoHome } from "react-icons/go";
import { PiUpload } from "react-icons/pi";
import { CiLogout } from "react-icons/ci";
import { PiVideoThin } from "react-icons/pi";
import { AiOutlineProduct } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { setSidebarVisibility } from "../redux/slices/sidebar.slice";
import { useLocation, useNavigate } from "react-router-dom";
import OpenLoginDialogBtn from "./OpenLoginDialogBtn";
import { useAuthentication } from "../hooks/useAuthentication";
import { GoPeople } from "react-icons/go";

const sidebar_options = [
  { icon: <GoHome />, name: "Home", path: "/" },
  { icon: <AiOutlineProduct />, name: "Projects", path: "/projects" },
  { icon: <PiVideoThin />, name: "My Course", path: "/courses" },
  { icon: <PiUpload />, name: "Upload", path: "/upload" },
  { icon: <GoPeople />, name: "About Me", path: "/about-me" },
];

export default function Sidebar() {
  const pathname = useLocation().pathname;
  const { isAuthenticated, setUserInformation, userInfo } = useAuthentication();

  const sideBarVisibility = useSelector((state: RootState) => state.sidebar);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const closeSidebar = () => {
    dispatch(setSidebarVisibility(false));
  };

  const onAnyNavSideBarItemClick = (currentItemIndex: number) => {
    //if click on logout option
    if (sidebar_options[currentItemIndex].name === "Logout") {
      setUserInformation(null);
      return;
    }

    //navigate to the sidebar path
    navigate(sidebar_options[currentItemIndex].path);
  };

  if (isAuthenticated) {
    if (sidebar_options[sidebar_options.length - 1].name !== "Logout") {
      sidebar_options.push({
        icon: <CiLogout className="rotate-180" />,
        name: "Logout",
        path: "",
      });
    } else if (isAuthenticated !== true) {
      sidebar_options.length = sidebar_options.length - 1;
    }
  }

  return (
    <aside
      onClick={closeSidebar}
      className={`min-w-60 overflow-hidden sm:absolute sm:top-0 sm:bottom-0 z-20 ${
        sideBarVisibility
          ? "sm:left-0 sm:right-0"
          : "sm:-left-full transition-all duration-500"
      }`}
    >
      <div
        className={`w-60 h-full bg-[var(--background-color)] relative sm:top-0 pt-10 sm:shadow-md ${
          sideBarVisibility ? "sm:left-0" : "sm:-left-full"
        } transition-all duration-500`}
      >
        <div
          className={`px-5 pb-4 hidden ${
            isAuthenticated ? "sm:flex" : "sm:hidden"
          } items-start`}
        >
          <div className="size-16 pr-3">
            <div className="size-12 rounded-full bg-gray-300 overflow-hidden">
              <img
                src={userInfo?.picture}
                alt="User Icon"
                className="size-full object-cover"
              />
            </div>
          </div>
          <div className="space-y-1">
            <h3 className="font-semibold text-[var(--heading-color)] text-sm">
              {userInfo?.name}
            </h3>
            <p className="text-xs text-wrap">{userInfo?.email}</p>
          </div>
        </div>

        <ul className="space-y-8">
          {sidebar_options.map((item, index) => (
            <li
              onClick={() => onAnyNavSideBarItemClick(index)}
              key={item.name}
              className={`flex items-center gap-2 cursor-pointer border-l-[3.5px] ${
                item.path === pathname
                  ? "text-[var(--heading-color)] border-[var(--heading-color)]"
                  : "text-gray-500 border-transparent"
              } px-5`}
            >
              {item.icon}
              <span className="tracking-wider text-sm">{item.name}</span>
            </li>
          ))}
        </ul>

        <div className="py-5 px-5 hidden sm:block">
          <OpenLoginDialogBtn
            className={`text-white ${
              isAuthenticated ? "hidden" : "flex-center"
            } bg-[var(--button-bg)] hover:bg-[#5d5492]/90 focus:ring-4 focus:outline-none focus:ring-[#5d5492]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#5d5492]/55 me-2 mb-2`}
          >
            Sign in
          </OpenLoginDialogBtn>

          {/* <div className="relative group/accounticon">
            <button
              title={userInfo?.name}
              className={`size-10 bg-gray-400 rounded-full overflow-hidden ${
                !isAuthenticated ? "flex-center" : "hidden"
              }`}
            >
              <img src={userInfo?.picture} className="size-full object-cover" />
            </button>
            <button
              // onClick={logout}
              className="cursor-pointer hover:bg-slate-100 transition-all duration-300 fixed right-11 translate-y-2 logout-btn-shdow bg-white px-4 py-2 z-10 flex items-center gap-3 opacity-0 invisible group-hover/accounticon:opacity-100 group-hover/accounticon:visible"
            >
              <CiLogout className="rotate-180" />
              <span className="text-sm font-semibold text-gray-500">
                Log Out
              </span>
            </button>
          </div> */}
        </div>
      </div>
    </aside>
  );
}
