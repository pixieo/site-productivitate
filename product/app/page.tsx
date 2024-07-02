import ArticlesPreview from "./component/articlePreview";
import AboutMe from "./component/aboutMe";
import AboutSite from "./component/aboutSite";
import Services from "./component/form";
import Instagram from "./component/instagram";
import Navbar from "./component/navbar";

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col hover:cursor-default">
        <AboutSite/>
        <AboutMe/>
        <ArticlesPreview />
        <Services />
        <Instagram />  
      </main>
    </>
  );
}
