import React from "react";
import { useDispatch } from "react-redux";
import { setLoginDialogVisibility } from "../redux/slices/loginDialog.slice";

interface IProps {
  children? : React.ReactNode;
  className?: string;
}

export default function OpenLoginDialogBtn(props: IProps) {
  const dispatch = useDispatch();
  const loginBtnOnClick = () => {
    dispatch(setLoginDialogVisibility(true));
  };
  return (
    <button type="button" className={props.className} onClick={loginBtnOnClick}>
      {props.children}
    </button>
  );
}
