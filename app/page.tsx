import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <main className="w-screen h-screen relative">
      <div
        className="flex items-center w-full h-full bg-cover bg-center "
        style={{ backgroundImage: "url(/main-bg.webp)" }}
      >
        <div className="pl-20 md:pl-50 pb-56 md:pb-20 flex flex-col gap-5 z-[10] max-w-[750]">
          <h1 className="text-[50px] text-white font-semibold">
            Hi, I&apos;m Nora
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500 ">
              <br />
              Frontend Developer
            </span>
          </h1>
          <p className="text-gray-200 text-lg hidden md:block ">
            I&apos;m Nora, a passionate front end developer dedicated to
            creating engaging and user friendly web applications. Explore my
            work and let&apos;s embark on a journey of innovation and creativity
            together.
          </p>

          <div className="flex-col md:flex-row hidden md:flex gap-5">
            <Link
              href="/my-skills"
              className="rounded-[20px] group relative bg-transparent border border-white px-5 py-3 text-lg text-white max-w-[200px]"
            >
              <div className="absolute rounded-[20px] z-[-1] bg-white inset-0 opacity-0 group-hover:opacity-20" />
              Learn more
            </Link>
            <Link
              href="/contact-me"
              className="rounded-[20px] group relative bg-transparent border border-white px-5 py-3 text-lg text-white max-w-[200px]"
            >
              <div className="absolute rounded-[20px] z-[-1]  bg-white inset-0 opacity-0 group-hover:opacity-20" />
              Contact me
            </Link>

            <Link
              href="https://docs.google.com/document/d/1CnVnYNusv5LsYnhbNe4sAILvfXcgvqEH/edit?usp=sharing&ouid=113001388857918623343&rtpof=true&sd=true"
              className="rounded-[20px] group relative bg-transparent border border-white px-5 py-3 text-lg text-white max-w-[200px]"
              target="_blank"
              download
            >
              <div className="absolute rounded-[20px] z-[-1] bg-white inset-0 opacity-0 group-hover:opacity-20" />
              My Resume
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 z-[20] right-5 flex-col md:hidden">
        <Link
          href="/my-skills"
          className="rounded-[20px] group bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg  max-w-[200px]"
        >
          Learn more
        </Link>
        <Link
          href="/my-skills"
          className="rounded-[20px] group bg-blue-500 px-5 py-3 text-lg  max-w-[200px]"
        >
          My projects
        </Link>
        <Link
          href="/my-skills"
          className="rounded-[20px] group  bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg max-w-[200px]"
        >
          My projects
        </Link>
      </div>
      <Image
        src="/starts.png"
        alt="horse"
        height={300}
        width={300}
        className="absolute top-10 left-0 z-[10] "
      />
    </main>
  );
};

export default page;
