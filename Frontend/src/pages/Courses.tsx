import { Helmet } from "react-helmet-async";

export default function Courses() {
  return (
    <section className="size-full">
      <Helmet>
        <title>Coding Courses - App Helper Store by Somnath Gupta</title>
        <meta
          name="description"
          content="Enroll in coding courses offered by Somnath Gupta to learn web development, including JavaScript, React, Node.js, and full-stack application development."
        />
        <meta
          name="keywords"
          content="coding courses, JavaScript courses, React tutorials, web development training, full-stack development, online courses"
        />
        <meta
          property="og:title"
          content="Coding Courses - App Helper Store by Somnath Gupta"
        />
        <meta
          property="og:description"
          content="Learn web development with courses from Somnath Gupta. Explore tutorials on JavaScript, React, Node.js, and more."
        />
        <meta property="og:url" content="https://www.apphelper.store/courses" />
        <meta
          property="og:image"
          content="https://lh3.googleusercontent.com/d/1GekyEMl_Gce3o6n0_YiDUPEcB4J2ezyz"
        />
      </Helmet>
      <h2 className="text-center">Coming soon...</h2>
    </section>
  );
}
