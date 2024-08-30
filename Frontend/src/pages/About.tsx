import { Link } from "react-router-dom";
import BadgeItem from "../components/BadgeItem";
import { GrLinkNext } from "react-icons/gr";
import { BsGithub, BsLinkedin, BsPhoneFill } from "react-icons/bs";
import { MdMarkEmailRead } from "react-icons/md";
import { Helmet } from "react-helmet-async";

const skills = [
  {
    type: "Known Technologies : ",
    skills: [
      "React",
      "Next",
      "Express",
      "MySql",
      "MongoDb",
      "SQL",
      "TypeScript",
      "JavaScript",
      "Core Java",
      "Core Php",
    ],
  },
];

export default function About() {
  return (
    <section>
      <Helmet>
        <title>About Somnath Gupta</title>
        <meta
          name="description"
          content="Learn more about Somnath Gupta, a skilled full-stack web developer specializing in React, Node.js, and other modern web technologies."
        />
        <meta
          name="keywords"
          content="Somnath Gupta, full-stack developer, JavaScript developer, web development, about Somnath, App Helper Store"
        />
        <meta
          property="og:title"
          content="About Somnath Gupta - App Helper Store"
        />
        <meta
          property="og:description"
          content="Get to know Somnath Gupta, the developer behind App Helper Store, with expertise in React, Node.js, and full-stack development."
        />
        <meta property="og:url" content="https://www.apphelper.store/about" />
        <meta
          property="og:image"
          content="https://www.apphelper.store/profile_image.67decf5d.jpg"
        />
      </Helmet>
      <div className="grid grid-cols-2 py-10 px-6 h-full gap-16 sm:grid-cols-1 sm:gap-10 sm:px-0 sm:py-5">
        <div className="flex flex-col gap-5 sm:order-2 h-full">
          <h1 className="font-[600] uppercase text-5xl tracking-widest text-nowrap sm:text-wrap sm:text-3xl">
            Somnath Gupta
          </h1>
          <p className="text-gray-500 text-justify font-[300]">
            Full Stack Developer with expertise in MERN stack. Familiar with
            core Java, core PHP. Seeking new opportunities.
          </p>
          {/* contact info */}
          <div className="flex flex-wrap gap-x-10 sm:gap-x-5 gap-y-4">
            <Link
              className="flex items-center gap-2 text-gray-600"
              to={"mailto:somnathgupta112@gmail.com"}
            >
              <MdMarkEmailRead />
              somnathgupta112@gmail.com
            </Link>
            <Link
              className="flex items-center gap-2 text-gray-600"
              to={"tel:9382413005"}
            >
              <BsPhoneFill />
              +91 9382413005
            </Link>
            <Link
              className="flex items-center gap-2 text-gray-600"
              to={"https://github.com/guptasomnath?tab=repositories"}
            >
              <BsGithub />
              guptasomnath
            </Link>
            <Link
              className="flex items-center gap-2 text-gray-600"
              to={"https://www.linkedin.com/in/guptasomnath/"}
            >
              <BsLinkedin />
              guptasomnath
            </Link>
          </div>
          {skills.map((info) => (
            <div className="space-y-3 w-full">
              <h2 className="font-medium">{info.type}</h2>
              <div className="flex items-center gap-5 flex-wrap">
                {info.skills.map((skill) => (
                  <BadgeItem className="bg-gray-300 text-black">
                    {skill}
                  </BadgeItem>
                ))}
              </div>
            </div>
          ))}

          {/* Action Buttons */}

          <div className="flex flex-wrap gap-x-5 gap-y-3">
            <Link className="flex-grow" to={"/projects?category=web-apps"}>
              <BadgeItem className="bg-[var(--button-bg)] py-3 hover:bg-[#5d5492da] text-white shadow-2xl uppercase space-x-3 transition-all duration-300">
                <span>My Projects</span>
                <GrLinkNext />
              </BadgeItem>
            </Link>
            <Link
              className="flex-grow"
              to={
                "https://drive.google.com/file/d/1E-1fktTun_Z1t9_Hn-X5ueKFSzCWkJ3I/view"
              }
            >
              <BadgeItem className="bg-gray-300 py-3 hover:bg-gray-400 text-black shadow-2xl uppercase space-x-3 transition-all duration-300">
                <span>My Resume</span>
                <GrLinkNext />
              </BadgeItem>
            </Link>
          </div>
        </div>
        <div className="sm:order-1 h-full">
          <img
            className="w-96 rounded-3xl object-contain"
            src="/profile_image.67decf5d.jpg"
            alt="Profile Image"
          />
        </div>
      </div>
    </section>
  );
}
