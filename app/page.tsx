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

export default function Home() {
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
            And I'm a <span className="text-sky-400">Frontend Developer</span>
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
              passHref={true}
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border-2 border-sky-600 transition-all hover:scale-110"
            >
              <FontAwesomeIcon
                icon={faFacebook}
                className="h-6 w-6 text-sky-400"
              />
            </Link>
            <Link
              href={"https://instagram.com/chrst_hdn"}
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border-2 border-sky-600 transition-all hover:scale-110"
            >
              <FontAwesomeIcon
                icon={faInstagram}
                className="h-6 w-6 text-sky-400"
              />
            </Link>
            <Link
              href={"https://github.com/christianHadinata"}
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border-2 border-sky-600 transition-all hover:scale-110"
            >
              <FontAwesomeIcon
                icon={faGithub}
                className="h-6 w-6 text-sky-400"
              />
            </Link>
            <Link
              href={"https://www.linkedin.com/in/christian-hadinata-905797243/"}
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border-2 border-sky-600 transition-all hover:scale-110"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                className="h-6 w-6 text-sky-400"
              />
            </Link>
          </div>
          <div className="mt-10 flex">
            <button className="rounded-full bg-sky-400 px-7 py-3 text-lg font-medium shadow-md shadow-sky-600 hover:shadow-md hover:shadow-sky-400">
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
          <h1 className="mb-3 text-5xl font-medium">
            About <span className="text-sky-400">Me</span>
          </h1>
          <h2 className="mb-3 text-3xl font-medium">Frontend Developer</h2>
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
        className="flex w-full flex-col items-center justify-center bg-blue-950 px-44 py-72 text-white"
      >
        <div className="text-5xl font-semibold text-white">My Skills </div>
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
          <a href="https://docs.npmjs.com/">
            <img
              src="https://skillicons.dev/icons?i=npm"
              alt=""
              title="NPM"
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
          <a href="https://www.figma.com/">
            <img
              src="https://skillicons.dev/icons?i=figma"
              alt=""
              title="Figma"
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
          <a href="https://vite.dev/guide/">
            <img
              src="https://skillicons.dev/icons?i=vite"
              alt=""
              title="Vite"
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
    </div>
  );
}
