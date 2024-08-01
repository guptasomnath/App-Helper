import { MdContactSupport } from "react-icons/md";

import { IoCloseOutline } from "react-icons/io5";
import { useAuthentication } from "../hooks/useAuthentication";
import { useState } from "react";
import { MdOutlineMailOutline } from "react-icons/md";
import { PiTelegramLogoLight } from "react-icons/pi";
import { Link } from "react-router-dom";
import { CgWebsite } from "react-icons/cg";
import { VscGithub } from "react-icons/vsc";
import { FaLinkedinIn } from "react-icons/fa6";

const contact_info = [
  {
    icon: <MdOutlineMailOutline className="mt-1" size={20} />,
    heading: "Email ID",
    subtitle: "appwalama@gmail.com",
    link: "mailto:appwalama@gmail.com",
  },
  {
    icon: <PiTelegramLogoLight className="mt-1" size={20} />,
    heading: "Telegram Group",
    subtitle: "t.me/AppHelperofficial",
    link: "https://t.me/AppHelperofficial",
  },
  {
    icon: <CgWebsite className="mt-1" size={20} />,
    heading: "App Helper",
    subtitle: "apphelper.store",
    link: "https://www.apphelper.store",
  },
  {
    icon: <VscGithub className="mt-1" size={20} />,
    heading: "Somnath Gupta",
    subtitle: "guptasomnath",
    link: "https://www.github.com/guptasomnath",
  },
  {
    icon: <FaLinkedinIn className="mt-1" size={20} />,
    heading: "Somnath Gupta",
    subtitle: "guptasomnath",
    link: "https://www.linkdin.com/in/guptasomnath",
  },
];

export default function ContactUs() {
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
        <MdContactSupport
          className="cursor-pointer text-gray-600"
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
          onClick={(e) => e.stopPropagation()}
          className={`w-[20rem] max-h-[25rem] absolute ${
            isAuthenticated ? "right-28 sm:right-5" : "right-44 sm:right-5"
          } top-[4rem] overflow-y-auto bg-white pt-3 notification-shdow rounded-lg`}
        >
          <div className="flex justify-between border-b px-5 pb-2">
            <h2>Contact Information</h2>
            <IoCloseOutline
              onClick={closeNotification}
              className="cursor-pointer"
              size={20}
            />
          </div>
          <ul className="size-full">
            {contact_info.map((info, index) => (
              <li key={index}>
                <Link
                  to={info.link}
                  className="flex hover:bg-gray-200 cursor-pointer items-start px-5 py-2 border-b gap-3"
                >
                  {info.icon}
                  <div>
                    <h2 className="text-sm">{info.heading}</h2>
                    <p className="text-xs text-gray-500">
                      {info.subtitle}
                    </p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
