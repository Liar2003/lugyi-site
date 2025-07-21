import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./roadmap.module.css";

const roadmapData = [
  {
    year: "Home Page",
    description: "Welcome to the app! Discover the best movies and series.",
    src: "home.png",
    icon: "🏠",
  },
  {
    year: "Movies Page",
    description: "Browse trending movies and find your favorites.",
    src: "movies.png",
    icon: "🎬",
  },
  {
    year: "Series Page",
    description: "Explore top-rated series and binge-worthy shows.",
    src: "series.png",
    icon: "📺",
  },
  {
    year: "Movie Detail Page",
    description: "Get detailed info, trailers, and reviews for each movie.",
    src: "movies_detail.png",
    icon: "🔎",
  },
  {
    year: "Series Detail Page",
    description: "Dive deep into your favorite series with episode guides.",
    src: "series_detail.png",
    icon: "📖",
  },
];

const Roadmap = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-purple-100 via-white to-violet-200 dark:from-[#18122B] dark:via-[#2D1B4A] dark:to-[#3E206B] relative">
      {/* Decorative background shapes */}
      <div
        className="absolute inset-0 pointer-events-none opacity-10 dark:opacity-20 animate-pulse z-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse at 20% 10%, #a78bfa 0%, transparent 60%),radial-gradient(ellipse at 80% 90%, #d946ef 0%, transparent 70%)",
        }}
      />
      <div className="relative max-w-4xl mx-auto text-center z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-violet-600 to-indigo-500 dark:from-white dark:to-purple-300 bg-clip-text text-transparent mb-4 drop-shadow-lg">
          Roadmap
        </h2>
        <p className="text-lg mb-10 text-zinc-700 dark:text-zinc-200 font-medium">
          See how our app evolves—each step brings new features and improvements
          for a better experience.
        </p>
        <VerticalTimeline>
          {roadmapData.map((item, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--work h-[100vh]"
              contentStyle={{
                background: `url(${item.src}) center/cover no-repeat`,
                color: "#222",
                padding: "0",
                borderRadius: "18px",
                boxShadow: "0 8px 32px 0 rgba(80, 0, 120, 0.12)",
                border: "1px solid #e0e0e0",
                position: "relative",
                minHeight: "220px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              contentArrowStyle={{ borderRight: "7px solid #a78bfa" }}
              iconStyle={{
                background: "linear-gradient(135deg,#a78bfa,#d946ef)",
                color: "#fff",
                boxShadow: "0 4px 16px #a78bfa80",
              }}
              icon={
                <span className="flex h-full items-center justify-center text-3xl animate-bounce">
                  {item.icon}
                </span>
              }
            >
              <div className="w-full h-[100vh] flex items-end justify-center">
                <div
                  className="backdrop-blur-lg bg-white/70 dark:bg-black/40 rounded-xl shadow-lg p-6 w-full max-w-md mx-auto"
                  style={{ boxShadow: "0 8px 32px 0 rgba(80, 0, 120, 0.12)" }}
                >
                  <h3 className="text-2xl md:text-3xl font-bold vertical-timeline-element-title mb-2 bg-gradient-to-r from-violet-600 to-indigo-500 bg-clip-text text-transparent">
                    {item.year}
                  </h3>
                  <p className="text-base md:text-lg text-zinc-700 dark:text-zinc-200 mb-2">
                    {item.description}
                  </p>
                </div>
              </div>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Roadmap;
