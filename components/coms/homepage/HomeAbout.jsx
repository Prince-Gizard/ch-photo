import React from "react";
import Link from "next/link";
import Contact from "../common/Contact";
export default function HomeAbout({ data }) {
  return (
    <section className="lg:w-4/6 md:w-5/6 mx-5 transition-all md:mx-auto">
      <div className="flex flex-col md:flex-row mt-10 items-center sm:gap-10 gap-5">
        <div className="flex items-center">
          <div className="w-full transition-all md:w-[20em] h-[25em]">
            <img
              src="/images/profile-shot.jpg"
              alt="logoProfile"
              className="w-full rounded h-full object-cover"
            />
          </div>
        </div>

        <div className="flex flex-col">
          <h2 className="capitalize font-bold text-4xl">about me </h2>
          <h3 className="mt-2">{data.website.aboutText}</h3>
          <Link
            className="bg-stone-700/50 w-max py-2 px-3 mt-5 sm:mt-10 border border-stone-600 active:scale-95 transition-all scale-1"
            href="/portfolio"
          >
            My projects
          </Link>
        </div>
      </div>

      <Contact data={data.website} />
    </section>
  );
}
