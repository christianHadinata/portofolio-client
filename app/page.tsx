"use client";

import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faLinkedin,
  faGithub,
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import Typed from "typed.js";
import { useEffect, useRef } from "react";

export default function Home() {
  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Front-end Developer",
        "Back-end Developer",
        "Full-stack Developer",
      ],
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 1000,
      loop: true,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <div className="flex flex-col">
      <div
        id="home"
        className="flex w-full items-center bg-blue-950 px-44 py-72 text-white"
      >
        <div className="flex w-3/5 flex-col">
          <h2 className="mb-3 text-3xl font-medium">Hi, I'm</h2>
          <h1 className="mb-3 text-5xl font-semibold">Christian Hadinata</h1>
          <h2 className="mb-3 text-3xl font-medium">
            And I'm a <span className="text-sky-400" ref={el}></span>
          </h2>
          <p className="pt-7 text-justify text-lg">
            I am a passionate, detail-oriented web developer who builds secure,
            scalable, and user-focused websites with modern, responsive, and
            optimized performance, ensuring accessibility, efficiency, and
            innovation in every project.
          </p>
          <div className="mt-10 flex gap-x-5">
            <Link
              href={"https://facebook.com/christian.hadinata.568"}
              target="blank"
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border-2 border-sky-600 transition-all hover:scale-110"
            >
              <FontAwesomeIcon
                icon={faFacebook}
                className="h-6 w-6 text-sky-400"
              />
            </Link>
            <Link
              href={"https://instagram.com/chrst_hdn"}
              target="blank"
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border-2 border-sky-600 transition-all hover:scale-110"
            >
              <FontAwesomeIcon
                icon={faInstagram}
                className="h-6 w-6 text-sky-400"
              />
            </Link>
            <Link
              href={"https://github.com/christianHadinata"}
              target="blank"
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border-2 border-sky-600 transition-all hover:scale-110"
            >
              <FontAwesomeIcon
                icon={faGithub}
                className="h-6 w-6 text-sky-400"
              />
            </Link>
            <Link
              href={"https://www.linkedin.com/in/christian-hadinata-905797243/"}
              target="blank"
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border-2 border-sky-600 transition-all hover:scale-110"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                className="h-6 w-6 text-sky-400"
              />
            </Link>
          </div>
          <div className="mt-10 flex">
            <button className="rounded-full bg-sky-400 px-7 py-3 text-lg font-medium capitalize shadow-md shadow-sky-600 hover:bg-sky-300 hover:shadow-md">
              Download CV
            </button>
          </div>
        </div>
        <div className="flex w-2/5 justify-center">
          <img
            src="/photo-png-version.png"
            alt=""
            className="h-[400px] w-[400px] rounded-full bg-[linear-gradient(180deg,_#38bdf8,_#0284c7)]"
          />
        </div>
      </div>
      <div
        id="about"
        className="flex w-full items-center bg-blue-950 px-44 py-72 text-white"
      >
        <div className="flex w-2/5 justify-center">
          <img
            src="/photo-png-version.png"
            alt=""
            className="h-[480px] w-[480px] rounded-xl border-8 border-sky-400"
          />
        </div>
        <div className="flex w-3/5 flex-col">
          <h1 className="mb-3 text-5xl font-semibold">
            About <span className="text-sky-400">Me</span>
          </h1>
          <h2 className="mb-3 text-3xl font-medium capitalize">
            Christian Hadinata
          </h2>
          <p className="pt-7 text-justify text-lg">
            I am a third-grade Computer Science student at UNPAR with a strong
            passion for web development, specializing in front-end and
            full-stack technologies. With experience in Next.js, TypeScript, and
            Spring Boot, I build modern, scalable, and user-friendly
            applications. I am also exploring e-commerce development, ensuring
            secure, high-performance websites. Beyond web, I have studied
            artificial intelligence, information security, and software
            engineering, strengthening my problem-solving and analytical skills.
          </p>
        </div>
      </div>

      <div
        id="skills"
        className="flex w-full flex-col items-center justify-center bg-blue-950 px-44 py-48 text-white"
      >
        <div className="text-5xl font-semibold text-white">
          My <span className="text-sky-400">Skills</span>
        </div>
        <div className="mt-20 flex flex-wrap gap-7">
          <a href="https://developer.mozilla.org/en-US/docs/Web/HTML">
            <img
              src="https://skillicons.dev/icons?i=html"
              alt=""
              title="HTML"
              className="h-32 w-32 transition-all duration-150 hover:scale-110"
            />
          </a>
          <a href="https://developer.mozilla.org/en-US/docs/Web/CSS">
            <img
              src="https://skillicons.dev/icons?i=css"
              alt=""
              title="CSS"
              className="h-32 w-32 transition-all duration-150 hover:scale-110"
            />
          </a>
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
            <img
              src="https://skillicons.dev/icons?i=js"
              alt=""
              title="JavaScript"
              className="h-32 w-32 transition-all duration-150 hover:scale-110"
            />
          </a>
          <a href="https://www.typescriptlang.org/docs/">
            <img
              src="https://skillicons.dev/icons?i=ts"
              alt=""
              title="TypeScript"
              className="h-32 w-32 transition-all duration-150 hover:scale-110"
            />
          </a>
          <a href="https://docs.oracle.com/en/java/">
            <img
              src="https://skillicons.dev/icons?i=java"
              alt=""
              title="Java"
              className="h-32 w-32 transition-all duration-150 hover:scale-110"
            />
          </a>
          <a href="https://sass-lang.com/documentation/">
            <img
              src="https://skillicons.dev/icons?i=sass"
              alt=""
              title="SASS"
              className="h-32 w-32 transition-all duration-150 hover:scale-110"
            />
          </a>
          <a href="https://v2.tailwindcss.com/docs">
            <img
              src="https://skillicons.dev/icons?i=tailwind"
              alt=""
              title="Tailwind CSS"
              className="h-32 w-32 transition-all duration-150 hover:scale-110"
            />
          </a>
          <a href="https://react.dev/">
            <img
              src="https://skillicons.dev/icons?i=react"
              alt=""
              title="React"
              className="h-32 w-32 transition-all duration-150 hover:scale-110"
            />
          </a>
          <a href="https://vite.dev/guide/">
            <img
              src="https://skillicons.dev/icons?i=vite"
              alt=""
              title="Vite"
              className="h-32 w-32 transition-all duration-150 hover:scale-110"
            />
          </a>
          <a href="https://nextjs.org/docs">
            <img
              src="https://skillicons.dev/icons?i=next"
              alt=""
              title="Next JS"
              className="h-32 w-32 transition-all duration-150 hover:scale-110"
            />
          </a>
          <a href="https://docs.spring.io/spring-framework/reference/index.html">
            <img
              src="https://skillicons.dev/icons?i=spring"
              alt=""
              title="Spring"
              className="h-32 w-32 transition-all duration-150 hover:scale-110"
            />
          </a>
          <a href="https://nodejs.org/docs/latest/api/">
            <img
              src="https://skillicons.dev/icons?i=nodejs"
              alt=""
              title="Node JS"
              className="h-32 w-32 transition-all duration-150 hover:scale-110"
            />
          </a>
          <a href="https://expressjs.com/">
            <img
              src="https://skillicons.dev/icons?i=express"
              alt=""
              title="Express JS"
              className="h-32 w-32 transition-all duration-150 hover:scale-110"
            />
          </a>
          <a href="https://jestjs.io/docs/getting-started">
            <img
              src="https://skillicons.dev/icons?i=jest"
              alt=""
              title="Jest"
              className="h-32 w-32 transition-all duration-150 hover:scale-110"
            />
          </a>
          <a href="https://www.postgresql.org/docs/">
            <img
              src="https://skillicons.dev/icons?i=postgresql"
              alt=""
              title="PostgreSQL"
              className="h-32 w-32 transition-all duration-150 hover:scale-110"
            />
          </a>
          <a href="https://www.mongodb.com/docs/">
            <img
              src="https://skillicons.dev/icons?i=mongodb"
              alt=""
              title="MongoDB"
              className="h-32 w-32 transition-all duration-150 hover:scale-110"
            />
          </a>
          <a href="https://devdocs.io/c/">
            <img
              src="https://skillicons.dev/icons?i=c"
              alt=""
              title="C"
              className="h-32 w-32 transition-all duration-150 hover:scale-110"
            />
          </a>
          <a href="https://devdocs.io/cpp/">
            <img
              src="https://skillicons.dev/icons?i=cpp"
              alt=""
              title="C++"
              className="h-32 w-32 transition-all duration-150 hover:scale-110"
            />
          </a>
          <a href="https://docs.python.org/3/">
            <img
              src="https://skillicons.dev/icons?i=python"
              alt=""
              title="Python"
              className="h-32 w-32 transition-all duration-150 hover:scale-110"
            />
          </a>
          <a href="https://go.dev/doc/">
            <img
              src="https://skillicons.dev/icons?i=go"
              alt=""
              title="Go"
              className="h-32 w-32 transition-all duration-150 hover:scale-110"
            />
          </a>
          <a href="https://docs.netlify.com/">
            <img
              src="https://skillicons.dev/icons?i=netlify"
              alt=""
              title="Netlify"
              className="h-32 w-32 transition-all duration-150 hover:scale-110"
            />
          </a>
          <a href="https://vercel.com/docs">
            <img
              src="https://skillicons.dev/icons?i=vercel"
              alt=""
              title="Vercel"
              className="h-32 w-32 transition-all duration-150 hover:scale-110"
            />
          </a>
          <a href="https://www.figma.com/">
            <img
              src="https://skillicons.dev/icons?i=figma"
              alt=""
              title="Figma"
              className="h-32 w-32 transition-all duration-150 hover:scale-110"
            />
          </a>
          <a href="https://helpx.adobe.com/id_id/photoshop/user-guide.html">
            <img
              src="https://skillicons.dev/icons?i=photoshop"
              alt=""
              title="Adobe Photoshop"
              className="h-32 w-32 transition-all duration-150 hover:scale-110"
            />
          </a>
          <a href="https://helpx.adobe.com/premiere-pro/user-guide.html">
            <img
              src="https://skillicons.dev/icons?i=premiere"
              alt=""
              title="Adobe Premiere Pro"
              className="h-32 w-32 transition-all duration-150 hover:scale-110"
            />
          </a>
          <a href="https://helpx.adobe.com/after-effects/user-guide.html">
            <img
              src="https://skillicons.dev/icons?i=aftereffects"
              alt=""
              title="Adobe After Effects"
              className="h-32 w-32 transition-all duration-150 hover:scale-110"
            />
          </a>
          <a href="https://git-scm.com/doc">
            <img
              src="https://skillicons.dev/icons?i=git"
              alt=""
              title="Git"
              className="h-32 w-32 transition-all duration-150 hover:scale-110"
            />
          </a>
          <a href="https://docs.github.com/en">
            <img
              src="https://skillicons.dev/icons?i=github"
              alt=""
              title="GitHub"
              className="h-32 w-32 transition-all duration-150 hover:scale-110"
            />
          </a>
          <a href="https://about.gitlab.com/">
            <img
              src="https://skillicons.dev/icons?i=gitlab"
              alt=""
              title="GitLab"
              className="h-32 w-32 transition-all duration-150 hover:scale-110"
            />
          </a>
          <a href="https://learning.postman.com/docs/introduction/overview/">
            <img
              src="https://skillicons.dev/icons?i=postman"
              alt=""
              title="Postman"
              className="h-32 w-32 transition-all duration-150 hover:scale-110"
            />
          </a>
        </div>
      </div>
      <div
        id="portfolio"
        className="flex w-full flex-col items-center justify-center bg-blue-950 px-44 py-48 text-white"
      >
        <div className="text-5xl font-semibold text-white">
          My <span className="text-sky-400">Portfolio</span>
        </div>
        <div className="mt-20 flex w-full gap-x-10">
          <img src="/portfolio/01-movieDB.png" alt="" className="w-3/5" />
          <div className="flex w-2/5 flex-col justify-center">
            <h2 className="text-3xl font-semibold">Movie DB</h2>
            <h3 className="mt-10 text-justify text-xl font-normal">
              The Movie DB website is a versatile platform for discovering a
              wide range of movies, featuring release years, related content,
              and upcoming projects. It provides detailed information on various
              films, making it an excellent resource for movie enthusiasts and
              researchers looking to explore and track movie timelines and
              details.
            </h3>
            <h3 className="mt-5 text-xl font-normal">
              <a
                href="https://moviedb-ch.netlify.app/"
                className="capitalize text-sky-400 hover:text-sky-300"
                target="blank"
              >
                Movie DB On Netlify
              </a>
            </h3>

            <h3 className="mt-5 text-justify text-xl font-normal">Tech:</h3>
            <div className="mt-3 flex gap-x-2">
              <img
                src="https://skillicons.dev/icons?i=html"
                alt=""
                title="HTML"
                className="transition-all duration-150 hover:scale-110"
              />
              <img
                src="https://skillicons.dev/icons?i=css"
                alt=""
                title="CSS"
                className="transition-all duration-150 hover:scale-110"
              />
              <img
                src="https://skillicons.dev/icons?i=js"
                alt=""
                title="JavaScript"
                className="transition-all duration-150 hover:scale-110"
              />
              <img
                src="https://skillicons.dev/icons?i=tailwind"
                alt=""
                title="Tailwind CSS"
                className="transition-all duration-150 hover:scale-110"
              />
              <img
                src="https://skillicons.dev/icons?i=react"
                alt=""
                title="React"
                className="transition-all duration-150 hover:scale-110"
              />
              <img
                src="https://skillicons.dev/icons?i=netlify"
                alt=""
                title="Netlify"
                className="transition-all duration-150 hover:scale-110"
              />
              <img
                src="https://skillicons.dev/icons?i=postman"
                alt=""
                title="Postman"
                className="transition-all duration-150 hover:scale-110"
              />
              <img
                src="https://skillicons.dev/icons?i=github"
                alt=""
                title="GitHub"
                className="transition-all duration-150 hover:scale-110"
              />
            </div>
          </div>
        </div>
        <div className="mt-40 flex w-full gap-x-10">
          <div className="flex w-2/5 flex-col justify-center">
            <h2 className="text-3xl font-semibold">Tokosiceha</h2>
            <h3 className="mt-10 text-justify text-xl font-normal">
              Tokosiceha is a comprehensive e-commerce platform offering a wide
              range of categories, including fashion, groceries, electronics,
              etc. Whether you're updating your wardrobe, upgrading your tech,
              or anything, Tokosiceha ensures quality and convenience at your
              fingertips. Designed for a seamless shopping experience, inspired
              by{" "}
              <a
                href="https://tokopedia.com"
                className="text-sky-400 hover:text-sky-300"
                target="blank"
              >
                Tokopedia
              </a>
              .
            </h3>

            <h3 className="mt-10 text-justify text-xl font-normal">Tech:</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              <img
                src="https://skillicons.dev/icons?i=html"
                alt=""
                title="HTML"
                className="transition-all duration-150 hover:scale-110"
              />
              <img
                src="https://skillicons.dev/icons?i=css"
                alt=""
                title="CSS"
                className="transition-all duration-150 hover:scale-110"
              />
              <img
                src="https://skillicons.dev/icons?i=js"
                alt=""
                title="JavaScript"
                className="transition-all duration-150 hover:scale-110"
              />
              <img
                src="https://skillicons.dev/icons?i=ts"
                alt=""
                title="TypeScript"
                className="transition-all duration-150 hover:scale-110"
              />
              <img
                src="https://skillicons.dev/icons?i=tailwind"
                alt=""
                title="Tailwind CSS"
                className="transition-all duration-150 hover:scale-110"
              />
              <img
                src="https://skillicons.dev/icons?i=react"
                alt=""
                title="React"
                className="transition-all duration-150 hover:scale-110"
              />
              <img
                src="https://skillicons.dev/icons?i=next"
                alt=""
                title="Next JS"
                className="transition-all duration-150 hover:scale-110"
              />
              <img
                src="https://skillicons.dev/icons?i=nodejs"
                alt=""
                title="Node JS"
                className="transition-all duration-150 hover:scale-110"
              />
              <img
                src="https://skillicons.dev/icons?i=express"
                alt=""
                title="Express JS"
                className="transition-all duration-150 hover:scale-110"
              />
              <img
                src="https://skillicons.dev/icons?i=postgresql"
                alt=""
                title="PostgreSQL"
                className="transition-all duration-150 hover:scale-110"
              />
              <img
                src="https://skillicons.dev/icons?i=postman"
                alt=""
                title="Postman"
                className="transition-all duration-150 hover:scale-110"
              />
              <img
                src="https://skillicons.dev/icons?i=github"
                alt=""
                title="GitHub"
                className="transition-all duration-150 hover:scale-110"
              />
            </div>
          </div>
          <img src="/portfolio/02-tokosiceha.png" alt="" className="w-3/5" />
        </div>
        <div className="mt-40 flex w-full gap-x-10">
          <img src="/portfolio/03-stravibe.png" alt="" className="w-3/5" />
          <div className="flex w-2/5 flex-col justify-center">
            <h2 className="text-3xl font-semibold">Stravibe</h2>
            <h3 className="mt-10 text-justify text-xl font-normal">
              Stravibe is your ultimate running companion, designed to track and
              enhance your running experience. With a user-friendly dashboard,
              it helps you monitor your progress, set goals, even join races.
              Whether you're a beginner or a seasoned runner, Stravibe empowers
              you to run with your heart and let your journey define you,
              inspired by{" "}
              <a
                href="https://strava.com"
                target="blank"
                className="text-sky-400 hover:text-sky-300"
              >
                Strava
              </a>
              .
            </h3>
            <h3 className="mt-10 text-justify text-xl font-normal">Tech:</h3>
            <div className="mt-3 flex gap-x-2">
              <img
                src="https://skillicons.dev/icons?i=html"
                alt=""
                title="HTML"
                className="transition-all duration-150 hover:scale-110"
              />
              <img
                src="https://skillicons.dev/icons?i=css"
                alt=""
                title="CSS"
                className="transition-all duration-150 hover:scale-110"
              />
              <img
                src="https://skillicons.dev/icons?i=js"
                alt=""
                title="JavaScript"
                className="transition-all duration-150 hover:scale-110"
              />
              <img
                src="https://skillicons.dev/icons?i=tailwind"
                alt=""
                title="Tailwind CSS"
                className="transition-all duration-150 hover:scale-110"
              />
              <img
                src="https://skillicons.dev/icons?i=java"
                alt=""
                title="Java"
                className="transition-all duration-150 hover:scale-110"
              />
              <img
                src="https://skillicons.dev/icons?i=spring"
                alt=""
                title="Spring"
                className="transition-all duration-150 hover:scale-110"
              />
              <img
                src="https://skillicons.dev/icons?i=postgresql"
                alt=""
                title="PostgreSQL"
                className="transition-all duration-150 hover:scale-110"
              />
              <img
                src="https://skillicons.dev/icons?i=postman"
                alt=""
                title="Postman"
                className="transition-all duration-150 hover:scale-110"
              />
              <img
                src="https://skillicons.dev/icons?i=github"
                alt=""
                title="GitHub"
                className="transition-all duration-150 hover:scale-110"
              />
            </div>
          </div>
        </div>
      </div>
      <form
        id="contact"
        className="flex w-full flex-col items-center justify-center bg-blue-950 px-44 py-48 text-white"
      >
        <h1 className="text-5xl font-semibold">
          Contact <span className="text-sky-400">Me</span>
        </h1>
        <div className="mt-10 flex w-full flex-col items-center gap-5">
          <div className="flex w-1/2 gap-x-5">
            <input
              type="text"
              className="w-1/2 bg-blue-900 p-5"
              placeholder="Full Name"
            />
            <input
              type="email"
              className="w-1/2 bg-blue-900 p-5"
              placeholder="Email Address"
            />
          </div>
          <div className="flex w-1/2 gap-x-5">
            <input
              type="tel"
              className="w-1/2 bg-blue-900 p-5"
              placeholder="Mobile Number"
            />
            <input
              type="text"
              className="w-1/2 bg-blue-900 p-5"
              placeholder="Email Subject"
            />
          </div>
          <textarea
            className="h-[250px] w-1/2 resize-none bg-blue-900 p-5"
            placeholder="Your Message"
          />
        </div>
        <button
          type="submit"
          className="mt-10 rounded-full bg-sky-400 px-7 py-3 text-lg font-medium capitalize shadow-md shadow-sky-600 hover:bg-sky-300 hover:shadow-md"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
