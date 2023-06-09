import Head from "next/head";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import SanityClient, { urlFor } from "../data";

export default function Contect({ data }) {
  return (
    <motion.div
      animate={{
        opacity: [0, 1],
      }}
      className="min-h-screen flex items-center md:mt-0 mt-10  justify-center"
    >
      <Head>
        <title>Contact Me</title>
      </Head>
      <div className="flex md:flex-row bg-stone-900 md:h-[20em] flex-col w-full mx-10 max-w-[50em] sm:gap-10 shadow-xl rounded-xl overflow-hidden">
        <div className="h-full w-full md:w-[20em]">
          <img
            src={urlFor(data[0].contactImage).url()}
            className="w-full h-full object-cover"
            alt=""
          />
        </div>

        <div className="flex py-4 flex-col px-5 md:pr-10">
          <div className="text-xl font-bold">Contact With Me</div>
          <div className="text-sm text-zinc-300">Текст для сотруднечества.</div>

          <div className="text-sm sm:text-base md:mt-10 mt-2">
            <ul>
              <li className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  className="fill-zinc-500"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>

                <Link
                  className="inline-block my-1 sm:my-1  xs:h-auto underline hover:no-underline"
                  href="http://instagram.com/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Иnstagram
                </Link>
              </li>
              <li>
                <Link
                  href="tel:+9647700080820"
                  className="inline-block my-1 sm:my-1  xs:h-auto underline hover:no-underline"
                >
                  <svg
                    className="inline-block w-4 h-4 mr-3 opacity-40"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    ></path>
                  </svg>
                  +799999999 или телега
                </Link>
              </li>
              <li>
                <svg
                  className="inline-block w-4 h-4 mr-3 opacity-40"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  ></path>
                </svg>
                <Link
                  className="inline-block my-1 sm:my-1  xs:h-auto underline hover:no-underline"
                  href="mailto:sadiq_g@yahoo.com"
                >
                  мама@mail.com
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export async function getStaticProps() {
  const data = await SanityClient.fetch(`
  *[_type == "website"]{
    contactImage
  }
  `);

  return {
    props: {
      data,
    },
    revalidate: 10,
  };
}
