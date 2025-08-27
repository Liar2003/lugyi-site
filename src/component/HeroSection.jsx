/**
 * v0 by Vercel.
 * @see https://v0.dev/t/p3kpW0HJoQV
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import BubbleFlame from "./BubleFrame";

import ImageSlider from "./ImageSlider";
import home from "/home.png";
import movies from "/movies.png";
import latest from "/latest-movies.png";
import vip from "/vip.png";
import profile from "/profile.png";
import HeroNavbar from "./HeroNavbar";

export default function Component() {
  const images = [
    movies,
    home,
    latest,
    vip,
    profile,

    // Add more image URLs as needed
  ];

  return (
    <>
      <section
        id="home"
        className="flex flex-col h-auto min-h-screen relative px-2 py-6 sm:px-4 sm:py-8 md:px-8 md:py-12 pt-16 bg-transparent"
      >
        <HeroNavbar />
        <div className="absolute inset-0 ">
          <BubbleFlame />
        </div>
        <div className="relative w-full flex flex-col md:flex-row items-center justify-center gap-8 md:gap-1 bg-transparent">
          <div className="flex-1 flex flex-col justify-center space-y-4 w-full md:w-auto">
            <div className="space-y-2 m-4 sm:m-8 md:m-10 lg:m-16">
              <h2 className="text-yellow-400 text-2xl sm:text-3xl md:text-4xl font-bold text-center md:text-left tracking-tighter">
                BEST MOVIE APP
              </h2>
              <p className="text-base sm:text-lg md:text-2xl text-center md:text-left leading-relaxed">
                <strong className="text-blue-600">
                  LiGyiCar App(V1.5-Latest)
                </strong>{" "}
                မှာ ရုပ်ရှင်များကို လွယ်ကူစွာ တိုက်ရိုက်ကြည့်ရှုနိုင်ပြီး၊
                Download လည်း ပြုလုပ်နိုင်ပါပြီ။
                <br />
                အခုပဲ Download လုပ်ပြီး ကြည့်ရှုလိုက်ပါ။
              </p>
              <div className="flex flex-col lg:justify-start sm:flex-row items-center gap-4 justify-center mt-4">
                <a
                  href="https://www.mediafire.com/file/3xrclcpc166rlm5/LuGyi+1.5.apk/file"
                  className="w-full sm:w-auto flex items-center justify-center"
                >
                  <img
                    className="h-12 w-36 sm:h-10 md:h-12 mt-2 mb-2 pl-2 pr-2 bg-black rounded-md sm:w-40 object-contain"
                    src="/mediafire.png"
                    alt="MediaFire Download"
                  />
                </a>
                <a
                  href="https://github.com/Liar2003/lugyi-site/releases/download/v1.5.0/app-release.apk"
                  className="w-full sm:w-auto"
                >
                  <img
                    className="h-12 w-full sm:h-14 md:h-14 object-contain"
                    src="/direct.png"
                    alt="Direct Download"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="flex-1 w-full md:w-auto flex items-center justify-center">
            <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg lg:mt-5">
              <ImageSlider images={images} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
// ...existing code...

// TODO: Rename this file to HeroSection.jsx for clarity
