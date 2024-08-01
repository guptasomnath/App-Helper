import { useEffect, useState } from "react";
import { IUserInfo } from "../types";

export const useAuthentication = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [userInfo, setUserInfo] = useState<IUserInfo | null>(null);

  const STORAGE_KEY_NAME = "userinfo";

  const setUserInformation = (info: IUserInfo | null) => {
    if (info === null) {
      window.localStorage.removeItem(STORAGE_KEY_NAME);
      setIsAuthenticated(false);
    }
    setUserInfo(info);
  };

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    if (window.localStorage.getItem(STORAGE_KEY_NAME)) {
      setIsAuthenticated(
        window.localStorage.getItem(STORAGE_KEY_NAME) ? true : false
      );
      const userInfo = JSON.parse(
        window.localStorage.getItem(STORAGE_KEY_NAME) || ""
      ) as IUserInfo;
      setUserInfo(userInfo);
    } else if (
      searchParams.has("email") &&
      searchParams.has("name") &&
      searchParams.has("picture") &&
      searchParams.has("access-key")
    ) {
      setIsAuthenticated(true);
      const info = {
        email: searchParams.get("email") || "",
        name: searchParams.get("name") || "",
        picture: searchParams.get("picture") || "",
        "access-key": searchParams.get("access-key") || "",
      };
      setUserInfo(info);
      window.localStorage.setItem(STORAGE_KEY_NAME, JSON.stringify(info));
    }
  }, []);

  return { isAuthenticated, userInfo, setUserInformation };
};
