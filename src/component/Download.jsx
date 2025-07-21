const APKPURE_URL = "https://mediafire.com/file/izreslsi3m9scbv/LuGyi.apk/file";
const DIRECT_APK_URL =
  "https://github.com/Liar2003/lugyi-site/releases/download/v1.1.0/app-release.apk";
const TELEGRAM_URL = "https://t.me/LuGyiandYoteshinMovies/2";

// Images from placeholder context
const APKPURE_IMG =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRv4fPcIck9HZx1fMFxWf3YVCeaWnMXI9UlQ&s";
const DIRECT_APK_IMG =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3076ZBXzbxhaLj43GvoQDwH9N1S6BBsSGMg&s";
const TELEGRAM_IMG = "https://telegram.org/img/website_icon.svg?4";

const cards = [
  {
    name: "APKPure",
    url: APKPURE_URL,
    img: APKPURE_IMG,
    label: "Download from MediaFire",
    bg: "from-[#e9d7ff] to-[#c7bfff] dark:from-[#241a36] dark:to-[#292143]",
    recommended: true,
    icon: "📦",
  },
  {
    name: "Direct APK",
    url: DIRECT_APK_URL,
    img: DIRECT_APK_IMG,
    label: "Direct APK Download",
    bg: "from-[#ffe7cf] to-[#fffdf5] dark:from-[#28222a] dark:to-[#362d3d]",
    recommended: false,
    icon: "⚡",
  },
  {
    name: "Telegram",
    url: TELEGRAM_URL,
    img: TELEGRAM_IMG,
    label: "Get via Telegram",
    bg: "from-[#d3e4fd] to-[#f8faff] dark:from-[#142736] dark:to-[#204857]",
    recommended: false,
    icon: "💬",
  },
];

const DownloadSection = () => {
  return (
    <section
      id="download"
      className="py-20 px-4 bg-gradient-to-br from-violet-200/80 via-white/70 to-purple-300/50 dark:from-[#1a1f2c] dark:via-[#26294b] dark:to-[#403e43] relative overflow-hidden"
    >
      {/* Animated background shapes */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20 dark:opacity-30 animate-pulse"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse at 32% 30%, #9b87f5 0%, transparent 60%),radial-gradient(ellipse at 70% 90%, #d946ef 0%, transparent 70%)",
        }}
      />
      <div className="relative max-w-3xl mx-auto text-center z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-br from-primary to-violet-600 dark:from-white dark:to-purple-300 bg-clip-text text-transparent mb-4 drop-shadow-lg">
          Download for Android
        </h2>
        <p className="text-lg mb-10 text-zinc-600 dark:text-zinc-200 font-medium">
          Get started today—download the Android app from your favorite source.
          Enjoy a safe and up-to-date experience.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card) => (
            <a
              key={card.name}
              href={card.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`
                group w-full rounded-3xl bg-gradient-to-br ${card.bg}
                shadow-2xl border border-white/40 dark:border-white/10 backdrop-blur-lg
                transition-transform hover:scale-105 hover:shadow-violet-400/30 hover:z-10
                flex flex-col items-center p-8 relative overflow-hidden
              `}
            >
              {/* Icon badge */}
              <span className="absolute top-4 left-4 text-2xl bg-white/70 dark:bg-black/40 rounded-full px-3 py-1 shadow font-bold">
                {card.icon}
              </span>
              {/* Recommended badge */}
              {card.recommended && (
                <span className="absolute top-4 right-4 bg-gradient-to-r from-violet-500 to-indigo-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg animate-bounce">
                  Recommended
                </span>
              )}
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden bg-white/60 dark:bg-black/30 shadow-lg flex items-center justify-center">
                <img
                  src={card.img}
                  alt={`${card.name} logo`}
                  className="w-full h-full object-contain transition-transform group-hover:scale-110"
                />
              </div>
              <span className="mt-6 font-bold text-lg text-zinc-900 dark:text-white drop-shadow">
                {card.label}
              </span>
              <button
                className="mt-4 px-6 py-2 rounded-full font-semibold bg-gradient-to-r from-violet-500 to-indigo-500 text-white shadow-lg transition-all hover:from-violet-600 hover:to-indigo-600 flex items-center gap-2 text-base group-hover:scale-105 group-hover:shadow-xl"
                tabIndex={-1}
                aria-label={card.label}
              >
                <svg
                  width="20"
                  height="20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  className="mr-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 5v14m7-7H5"
                  />
                </svg>
                Download
              </button>
            </a>
          ))}
        </div>
        <p className="mt-10 text-xs text-muted-foreground">
          * All download sources are safe and provide the latest version.
        </p>
      </div>
    </section>
  );
};

export default DownloadSection;
