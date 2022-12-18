import Head from "next/head";
import { Inter } from "@next/font/google";
import Header from "../components/Header";
import Image from "next/image";
import Logo from "../public/google.png";
import { SearchIcon, MicrophoneIcon } from "@heroicons/react/solid";
import Footer from "../components/Footer";
import { useRouter } from "next/router";
import { useRef } from "react";

const inter = Inter({ subsets: ["latin"] }); //this is the font I am using

export default function Home() {
  const router = useRouter(); //this is a hook that allows us to use the router
  const searchInputRef = useRef(null); //this is a hook that allows us to use the ref
  const search = (event) => {
    event.preventDefault(); //this prevents the page from refreshing when the button is clicked
    const term = searchInputRef.current.value; //this is the value of the input
    if (term.trim().length === 0) return; //this is a check to make sure the input is not empty and if it is it will not do anything I also added a trim method to remove any white space
    router.push(`/search?term=${term.trim()}`); //this is the router push that will take us to the search page with the term we searched for and the trim method will remove any white space
  };
  const styles = {
    searchContainer: "flex flex-col  mt-40 items-center",
    logo: "object-fit",
    searchWrapper:
      "flex w-full mt-5 mx-auto max-w-[90%] border border-gary-200 hover:shadow-lg focus-within:shadow-lg px-5 py-3 rounded-full items-center sm:max-w-xl lg:max-w-2xl",
    iconSearch: "h-6 text-gray-500 mr-3",
    iconMike: "h-6  text-gray-500",
    input: "flex-grow focus:outline-none",
    buttonsWrapper:
      "flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-[10rem] mt-5 ",
    buttons: "btn", //this is a class I made in the global.css file that looks like the Google search buttons of Google Search and I'm Feeling Lucky
  };
  return (
    <>
      <Head>
        <title>Google Clone by Art Beckett</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}

      <Header />

      {/* Body */}

      <form className={styles.searchContainer}>
        <Image
          src={Logo}
          alt="Google Logo"
          width={600}
          height={40}
          className={styles.logo}
        />
        <div className={styles.searchWrapper}>
          {/* Search */}
          <SearchIcon className={styles.iconSearch} />
          {/* Input */}
          <input
            defaultValue={router.query.term} //this is the default value of the input
            ref={searchInputRef} //this is the ref
            type="text" //this is the type of input
            className={styles.input}
          />
          {/* microphone */}
          <MicrophoneIcon className={styles.iconMike} />
        </div>
        <div className={styles.buttonsWrapper}>
          {/* Buttons */}
          <button
            onClick={search} //this is the onClick event that will trigger the search function
            className={styles.buttons}
          >
            Google Search
          </button>
          <button className={styles.buttons}>I&apos;m Feeling Lucky</button>
        </div>
      </form>
      {/* Footer */}
      <Footer />
    </>
  );
}
