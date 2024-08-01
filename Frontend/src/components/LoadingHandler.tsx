import React from "react";
import Spinner from "./Spinner";

interface IProps<T> {
  isLoading: boolean;
  error: T;
  children: React.ReactNode;
  dataLength ? : number;
}

export default function LoadingHandler<T>({
  isLoading,
  error,
  children,
  dataLength
}: IProps<T>) {
  return (
    <>
      {isLoading ? (
        <div className="min-h-[510px] w-full flex-center py-20">
          <Spinner size={"2rem"} />
        </div>
      ) : error ? (
        <div className="min-h-[510px]">
          <p className="text-center text-2xl text-gray-600 mt-10">
            {error
              ? `Error while fetching projects \n ${error.toString()}`
              : "No Data Avilable"}
          </p>
        </div>
      ) : dataLength === 0 ? <p className="text-center text-2xl text-gray-600 my-10">No Data Avilable</p> : children}
    </>
  );
}
