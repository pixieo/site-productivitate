import { gotu } from "@/app/ui/fonts";
import ArticlesPreview from "./component/articlePreview";
import AboutMe from "./component/aboutMe";
import AboutSite from "./component/aboutSite";
import Products from "./component/products";
import Instagram from "./component/instagram";
import Navbar from "./component/navbar";

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col">
        <AboutSite/>
        <AboutMe/>
        <ArticlesPreview />
        <Products />
        <Instagram />  
      </main>
    </>
  );
}
