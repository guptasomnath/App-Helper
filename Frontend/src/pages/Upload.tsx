import { Helmet } from "react-helmet-async";

export default function Upload() {
  return (
    <section className="size-full">
      <Helmet>
        <title>Upload Your Projects - App Helper Store</title>
        <meta
          name="description"
          content="Contribute to the App Helper Store community by uploading your own projects and sharing valuable coding resources."
        />
        <meta
          name="keywords"
          content="upload projects, share source code, coding community, web development resources, contribute to projects"
        />
        <meta
          property="og:title"
          content="Upload Your Projects - App Helper Store"
        />
        <meta
          property="og:description"
          content="Share your coding projects with the App Helper Store community and contribute to a growing collection of development resources."
        />
        <meta property="og:url" content="https://www.apphelper.store/upload" />
        <meta
          property="og:image"
          content="https://lh3.googleusercontent.com/d/1GekyEMl_Gce3o6n0_YiDUPEcB4J2ezyz"
        />
      </Helmet>
      <h2 className="text-center">Coming soon...</h2>
    </section>
  );
}
