// pages/index.tsx
import Head from "next/head";
import Logo from "../components/Logo";
import SearchBox from "../components/SearchBox";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useSpring, animated } from "react-spring";
import { FaArrowLeft } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Home: React.FC = () => {
  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [typedText, setTypedText] = useState("");
  const searchBoxRef = useRef<HTMLDivElement | any>(null);

  const handleSearch = (query: string) => {
    if (query !== "") {
      setIsSearch(true);
      console.log("Searching for:", query);
    }
  };

  const dataArray = [1, 2, 3];

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearch(query);
    }
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (searchBoxRef.current && !searchBoxRef.current.contains(event.target)) {
      setIsFocused(false);
    }
  };

  useEffect(() => {
    if (isSearch) {
      // Simulate typing animation
      const text = `وَ لَا تَاْكُلُوْۤا اَمْوَالَكُمْ بَیْنَكُمْ بِالْبَاطِلِ: اور آپس
      میں ایک دوسرے کا مال ناحق نہ کھاؤ اس آیت میں باطل طور پر کسی کا
      مال کھانا حرام فرمایا گیا خواہ لوٹ کرہو یا چھین کر ،چوری سے یا
      جوئے سے یا حرام تماشوں یا حرام کاموں یا حرام چیزوں کے بدلے یا رشوت
      یا جھوٹی گواہی سے یہ سب ممنوع و حرام ہے۔(احکام القرآن، باب ما
      یحلہ حکم الحاکم وما لا یحلہ،۱ / ۳۰۴) مسئلہ : اس سے معلوم ہوا کہ
      ناجائز فائدہ کے لیے کسی پر مقدمہ بنانا اور اس کو حکام تک لے جانا
      ناجائز و حرام ہے۔ `;
      const typingSpeed = 1 / text.length;

      let currentIndex = 0;

      const typingInterval = setInterval(() => {
        setTypedText((prev) => prev + text[currentIndex]);
        currentIndex += 1;

        if (currentIndex === text.length - 1) {
          clearInterval(typingInterval);
        }
      }, typingSpeed);

      return () => {
        clearInterval(typingInterval);
      };
    }
  }, [isSearch]);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const buttonSpring = useSpring({
    left: isFocused ? 10 : 50,
  });

  const box = useSpring({
    left: isFocused ? 10 : 50,
  });

  const borderColorClass = isFocused ? "border-[#49CAD2]" : "border-[#706f6f]";
  const btnColor = query?.length > 0 ? "bg-[#49CAD2]" : "bg-[#dbdbdb]";

  const onBackClick = () => {
    setIsSearch(false);
    setTypedText("");
    setIsFocused(false);
  };

  return (
    <div>
      <Head>
        <title>Your Page Title</title>
      </Head>

      {!isSearch ? (
        <div className="pb-10 h-screen overflow:hidden bg-white">
          {/* Background Image */}
          <Image
            src={"/Images/banner.jpg"}
            alt="Banner"
            className="absolute top-0 left-0 z-0"
            layout="fill"
            objectFit="cover"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40"></div>

          <div className="w-full items-center">
            <hr className="w-full border-t border-t-[#fff] absolute top-14" />
            <div className="relative z-1">
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
            {/* <div className="relative rounded-[20px] overflow-hidden">
            
              <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40"></div>
            </div> */}
            <div className="absolute top-[200px] left-1/2 transform -translate-x-1/2 -translate-y-1/2  md:w-[600px] w-full p-4 flex flex-col items-center">
              <div className="text-center">
                <h1 className="mb-4 sm:1xl md:text-3xl xl:text-3xl 2xl:text-4xl text-[#ffff]">
                  (هُدًى لِّلنَّاسِ وَ بَیِّنٰتٍ مِّنَ الْهُدٰى وَ
                  الْفُرْقَانِۚ)
                </h1>
                <div
                  ref={searchBoxRef}
                  className={`relative flex bg-white border w-full md:w-[600px] items-center justify-end rounded-md ${borderColorClass}`}
                >
                  <animated.button
                    style={buttonSpring}
                    onClick={() => handleSearch(query)}
                    className={`${btnColor} text-white p-2 rounded-full mr-3 w-10 h-10 absolute top-1/2 transform -translate-y-1/2 md:absolute md:top-1/2`}
                  >
                    <FaArrowLeft size={20} />
                  </animated.button>
                  <input
                    type="text"
                    value={query}
                    onFocus={() => setIsFocused(true)}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="..... اکتب ھنا"
                    className={`px-5 py-4 md:w-[500px] text-[#000] text-right rounded-md w-full focus:outline-none li ${
                      isFocused ? "md:h-32" : "md:h-14"
                    } sm:h-16 border-0`}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="pb-10 h-full overflow bg-white">
          <div className="mx-auto w-full max-w-screen-xl p-4 flex items-center">
            <div
              className="flex items-center cursor-pointer text-[#000] hover:text-[#0165fc]"
              onClick={onBackClick}
            >
              <FaArrowLeft size={20} className=" " />
              <h2 className=" ml-2 ]">Back </h2>
            </div>
          </div>
          {dataArray?.map((item: any, index: number) => {
            return (
              <div key={index}>
                <div className="mx-auto max-w-screen-xl p-[20px] md:p-[100px] bg-[#F9F9F9] items-center justify-center rounded-lg mt-5 border-2 border-[#c8c8c856]">
                  <h1 className="sm:1xl md:text-3xl xl:text-3xl 2xl:text-4xl text-[#375438] text-center font-[800] md:leading-[40px] xl:leading-[40px] 2xl:leading-[60px]">
                    وَلَا تَأْكُلُوا أَمْوَالَكُم بَيْنَكُم بِالْبَاطِلِ
                    وَتُدْلُوا بِهَا إِلَى الْحُكَّامِ لِتَأْكُلُوا فَرِيقًا
                    مِّنْ أَمْوَالِ النَّاسِ بِالْإِثْمِ وَأَنتُمْ تَعْلَمُونَ
                    (188)
                  </h1>
                  <animated.p className="mt-10 sm:text-[10px] md:text-[18px] xl:text-[22px] 2xl:text-[24px] text-[#010101] text-right">
                    {typedText}
                  </animated.p>
                </div>
                <div className="mx-auto w-full max-w-screen-xl p-4 flex items-center ">
                  <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram
                      size={20}
                      className="text-[#d23d3d] mx-1 cursor-pointer"
                    />
                  </a>
                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebookF
                      size={20}
                      className="text-[#4267B2] mx-1 cursor-pointer"
                    />
                  </a>
                  <a
                    href="https://twitter.com/login"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaTwitter
                      size={20}
                      className="text-[#1DA1F2] mx-1 cursor-pointer"
                    />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Home;
