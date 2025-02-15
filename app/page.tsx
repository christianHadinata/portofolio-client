import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faLinkedin,
  faGithub,
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
    </div>
  );
}
