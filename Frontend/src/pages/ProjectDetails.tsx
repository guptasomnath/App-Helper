import { LuDownload } from "react-icons/lu";
import { IoLayersOutline } from "react-icons/io5";
import { IoCardOutline } from "react-icons/io5";
import { IoExtensionPuzzleOutline } from "react-icons/io5";
import { Link, useSearchParams } from "react-router-dom";
import ImageSlider from "../components/ImageSlider";
import { useEffect, useState } from "react";
import { useMutation, useQuery } from "react-query";
import axios, { AxiosError } from "axios";
import { API_BASE_URL } from "../constant";
import { IProjects, ISuccess } from "../types";
import { formatNumber } from "../utils/formatNumber";
import { purifyText } from "../utils/purifyText";
import LoadingHandler from "../components/LoadingHandler";
import { downloadFile } from "../utils/downloadFile";
import { replaceSpacialChar } from "../utils/replaceSpacialChar";
import Spinner from "../components/Spinner";
import { setLoginDialogVisibility } from "../redux/slices/loginDialog.slice";
import { useDispatch } from "react-redux";
import { useAuthentication } from "../hooks/useAuthentication";
import { Helmet } from "react-helmet-async";
import { encodeUrl } from "../utils/purifyUrl";

export default function ProjectDetails() {
  const searchParams = useSearchParams();
  const [bannerList, setBannerList] = useState<string[]>([]);
  const { isAuthenticated, setUserInformation, userInfo } = useAuthentication();
  const dispatch = useDispatch();

  const PROJECT_ID = searchParams[0].get("id");

  const getSingleProject = async () => {
    const response = await axios.get(`${API_BASE_URL}/project/${PROJECT_ID}`);
    return response.data;
  };

  const hitDownloadFileApi = async () => {
    const response = await axios.post(
      `${API_BASE_URL}/project/download`,
      {
        id: PROJECT_ID,
      },
      {
        headers: {
          Authorization: `Bearer ${userInfo?.["access-key"]}`,
        },
      }
    );
    return response.data;
  };

  const { isLoading, error, data } = useQuery<ISuccess<IProjects>, Error>({
    queryKey: ["single-project-info", PROJECT_ID],
    queryFn: getSingleProject,
    staleTime: 1000 * 60 * 5, // 5 minutes
    cacheTime: 1000 * 60 * 10, // 10 minutes
  });

  const { isLoading: isPrograssing, mutate } = useMutation({
    mutationFn: hitDownloadFileApi,
    onError: (error: AxiosError<ISuccess<string>>) => {
      if (error.response?.status === 401) {
        //user should login
        setUserInformation(null);
        dispatch(setLoginDialogVisibility(true));
      } else {
        alert(error.response?.data.message);
      }
    },
    onSuccess(data: ISuccess<string>) {
      downloadFile(replaceSpacialChar(data.data as string));
    },
  });

  useEffect(() => {
    const images = [];

    const screenshots = data?.data?.SCREENSHOTS.split("<>");

    if (data?.data?.THUMBNAIL) {
      images.push(data?.data?.THUMBNAIL);
    }
    if (screenshots) {
      screenshots.forEach((src) => {
        if (src !== "") images.push(src);
      });
    }

    setBannerList(images);
  }, [data]);

  const isPaid = data?.data?.PRICE === "Paid";

  const handleDownloadBtn = () => {
    if (!isAuthenticated) {
      dispatch(setLoginDialogVisibility(true));
    } else {
      mutate();
    }
  };

  return (
    <LoadingHandler<Error | null> isLoading={isLoading} error={error}>
      <Helmet>
        <title>{data?.data?.PROJECTNAME} - App Helper Store</title>
        <meta
          name="description"
          content={
            "Browse a variety of real-world coding projects developed by Somnath Gupta, including full-stack applications and innovative web solutions."
          }
        />
        <meta
          property="og:title"
          content={data?.data?.PROJECTNAME + " - App Helper Store"}
        />
        <meta
          property="og:description"
          content="Browse a variety of real-world coding projects developed by Somnath Gupta, including full-stack applications and innovative web solutions."
        />
        <meta
          property="og:url"
          content={`/projects/${encodeUrl(
            data?.data?.PROJECTNAME || ""
          )}?id=${data?.data?.ID}`}
        />
        <meta property="og:image" content={data?.data?.THUMBNAIL} />
      </Helmet>
      <div className="flex flex-wrap gap-10 sm:gap-3">
        <div className="basis-96 aspect-video flex-grow rounded-xl relative flex items-center overflow-hidden">
          <ImageSlider image_list={bannerList} />
        </div>
        <div className="basis-96 sm:w-full flex-grow">
          <span className="text-[--subheading-color] text-sm sm:hidden">
            <Link to={"/"}>Home</Link> / <Link to={"/projects"}>Projects</Link>{" "}
            /{" "}
            <Link to={`?id=${data?.data?.ID}`}>{data?.data?.PROJECTNAME}</Link>
          </span>
          <h1 className="text-2xl font-medium mt-1">
            {data?.data?.PROJECTNAME}
          </h1>
          <h2 className="text-xs font-semibold text-[var(--heading-color)] pt-1">
            {data?.data?.STORENAME}
          </h2>
          <div className="flex items-center flex-wrap gap-5 pt-4">
            <div className="flex-center text-sm gap-1">
              <LuDownload />{" "}
              {formatNumber(parseInt(data?.data?.TOTALDOWNLOAD || "0"))}
            </div>
            <div className="flex-center text-xs gap-1">
              <IoExtensionPuzzleOutline /> {data?.data?.VERSION}
            </div>
            <div className="flex-center text-sm gap-1 text-nowrap">
              <IoLayersOutline /> {data?.data?.PLATFORM}
            </div>
            <div className="flex-center text-sm gap-1">
              <IoCardOutline /> {data?.data?.PRICE}
            </div>
          </div>

          {isPaid ? (
            <Link
              className="w-full flex-center bg-[var(--heading-color)] shadow-lg text-white mt-5 py-2"
              to={"mailto:appwalama@gmail.com"}
            >
              Contact Me
            </Link>
          ) : (
            <button
              onClick={handleDownloadBtn}
              type="submit"
              className="w-full bg-[var(--heading-color)] shadow-lg text-white mt-5 py-2"
            >
              {isPrograssing ? (
                <Spinner fill_color_css="fill-white" size="20px" />
              ) : (
                "Save Project"
              )}
            </button>
          )}
        </div>
      </div>

      <h4 className="mt-10 font-semibold">Description</h4>
      <div
        dangerouslySetInnerHTML={{
          __html: purifyText(data?.data?.DESCRIPTION || ""),
        }}
        className="mt-3 text-sm text-[var(--subheading-color)]"
      ></div>
    </LoadingHandler>
  );
}
