// pages/index.tsx
import Head from "next/head";
import Logo from "../components/Logo";
import SearchBox from "../components/SearchBox";
import Image from "next/image";

const Home: React.FC = () => {
  const handleSearch = (query: string) => {
    console.log("Searching for:", query);
    // Implement your search logic here
  };

  return (
    <div>
      <Head>
        <title>Your Page Title</title>
      </Head>
      <div className="w-full items-center">
        <hr className="w-full border-t border-t-[#000] absolute top-14" />
        <div className="">
          <Image
            src={"/Images/logo.png"}
            alt="Logo"
            className="mx-auto"
            width={100}
            height={100}
          />
        </div>
      </div>
      <div className="mx-auto max-w-screen-xl p-4 relative">
        <div className="relative rounded-[20px] overflow-hidden">
          <Image
            src={"/Images/banner.jpg"}
            alt="Banner"
            className="w-full"
            width={500}
            height={2}
          />
          {/* Black shape with low opacity */}
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40"></div>
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:w-[600px] w-full p-4 flex flex-col items-center rounded-md">
          <SearchBox onSearch={handleSearch} />
        </div>
      </div>
    </div>
  );
};

export default Home;
