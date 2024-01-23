// pages/index.tsx
import Head from "next/head";
import Logo from "../components/Logo";
import SearchBox from "../components/SearchBox";
import Image from "next/image";
import banner from "@/public/Assets/banner.png";

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

      <Logo />
      <hr className="w-full border-t" />

      <div className="mx-auto max-w-screen-xl p-4 ">
        {/* Banner Image */}
        <Image
          src={"/Images/banner.jpg"}
          alt="Banner"
          className="w-full"
          width={500}
          height={5}
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:w-[500px] p-4 rounded-md">
          <SearchBox onSearch={handleSearch} />
        </div>
      </div>
    </div>
  );
};

export default Home;
