import { useState } from "react";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";
import { useAuthentication } from "../hooks/useAuthentication";

export default function Notification() {
  const [isNotificationVisiable, setIsNotificationVisiable] = useState(false);
  const { isAuthenticated } = useAuthentication();
  const openNotification = () => {
    setIsNotificationVisiable(true);
  };
  const closeNotification = () => {
    setIsNotificationVisiable(false);
  };
  return (
    <>
      <div className="relative">
        {/* <div className="absolute size-2 bg-red-600 rounded-full flex-center right-[1px] top-0 text-white text-xs"></div> */}
        <IoIosNotificationsOutline
          className="cursor-pointer"
          onClick={openNotification}
          size={23}
        />
      </div>
      <div
        onClick={closeNotification}
        className={`fixed size-full z-50 top-0 bottom-0 left-0 right-0 ${
          isNotificationVisiable
            ? "translate-y-0 opacity-100 visible "
            : "translate-y-10 opacity-0 invisible"
        } transition-all duration-500`}
      >
        <div
          onClick={e => e.stopPropagation()}
          className={`w-[20rem] max-h-[25rem] min-h-[25rem] absolute ${isAuthenticated ? "right-28 sm:right-5" : "right-44 sm:right-5"} top-[4rem] overflow-y-auto bg-white py-3 notification-shdow rounded-lg`}
        >
          <div className="flex justify-between border-b px-5 pb-2">
            <h2>Notifications</h2>
            <IoCloseOutline
              onClick={closeNotification}
              className="cursor-pointer"
              size={20}
            />
          </div>
          {/* <ul className="size-full">
            {notificationlist.map((notification) => (
              <li
                key={notification}
                className="flex hover:bg-gray-200 cursor-pointer items-start px-5 py-2 border-b gap-2"
              >
                <IoIosNotificationsOutline color="red" size={28} />
                <div>
                  <h2 className="text-sm">App Helper New Update</h2>
                  <p className="text-xs text-gray-500 pl-1">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Eius.
                  </p>
                </div>
              </li>
            ))}
          </ul> */}
          <p className="text-center text-sm text-gray-600 pt-4">No notification avilable</p>
        </div>
      </div>
    </>
  );
}
