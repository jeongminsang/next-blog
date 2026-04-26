"use client";

import { useRouter, usePathname } from "next/navigation";
import ThemeToggleButton from "./ThemeChanger";

const Header = () => {
  const router = useRouter();
  const params = usePathname();

  const goHomeHandle = () => {
    router.push("/");
  };
  const goBlogHandle = () => {
    router.push("/blog");
  };

  const goGitHubHandle = () => {
    window.open("https://github.com/jeongminsang");
  };

  return (
    <header className="fixed w-full bg-background-cr/10 backdrop-blur-[5px] z-[1000]">
      <div className="flex flex-row items-center justify-between w-full max-w-[800px] h-[70px] mx-auto px-4">
        <h4
          onClick={goHomeHandle}
          className="p-[10px] rounded-[5px] cursor-pointer hover:bg-hv-cr transition-colors duration-200"
        >
          minsang.dev
        </h4>
        <div className="flex flex-row items-center justify-end">
          <div className="flex flex-row">
            <div
              onClick={goBlogHandle}
              className={`text-[17px] p-[8px] m-[5px] bg-transparent rounded-[5px] cursor-pointer hover:bg-hv-cr transition-colors duration-200 ${
                params.includes("blog") ? "text-text-color" : "text-gray-500"
              }`}
            >
              blog
            </div>
          </div>
          <ThemeToggleButton />
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='32'
            height='30'
            viewBox='0 0 96 96'
            className="absolute w-0 h-0 overflow-hidden"
          >
            <mask
              id='gh-mask'
              maskUnits='userSpaceOnUse'
              x='0'
              y='0'
              width='33'
              height='32'
            >
              <path
                d='M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z'
                fill='white'
                transform='scale(0.33)'
              />
            </mask>
          </svg>
          <div
            onClick={goGitHubHandle}
            className="group relative w-[50px] h-[50px] ml-[10px] border-none rounded-[10px] bg-github-bg flex items-center justify-center overflow-hidden cursor-pointer"
          >
            <div
              className="github-icon relative ml-[2px] w-[33px] h-[32px] bg-text-color"
              style={{
                mask: "url(#gh-mask)",
                WebkitMask: "url(#gh-mask)",
              }}
            >
              <div
                className="absolute inset-0 bg-gradient-to-r from-github-first-cr to-github-last-cr bg-[length:200%] bg-left opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:bg-right"
                style={{
                  mask: "url(#gh-mask)",
                  WebkitMask: "url(#gh-mask)",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
