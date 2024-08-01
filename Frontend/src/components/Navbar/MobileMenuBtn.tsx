import { IoCloseOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { setSidebarVisibility } from "../../redux/slices/sidebar.slice";

export default function MobileMenuBtn() {
  const dispatch = useDispatch();
  const sideBarVisibility = useSelector((state: RootState) => state.sidebar);
  const hamburgerMenuOnClick = () => {
    dispatch(setSidebarVisibility(true));
  };
  const closeSidebar = () => {
    dispatch(setSidebarVisibility(false));
  };
  return (
    <>
      {sideBarVisibility ? (
        <IoCloseOutline
          onClick={closeSidebar}
          className="hidden sm:block"
          size={25}
        />
      ) : (
        <RxHamburgerMenu
          onClick={hamburgerMenuOnClick}
          className="hidden sm:block"
          size={25}
        />
      )}
    </>
  );
}
