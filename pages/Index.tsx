// pages/index.tsx
import Head from "next/head";
import Logo from "../components/Logo";
import SearchBox from "../components/SearchBox";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useSpring, animated } from "react-spring";
import { FaArrowLeft } from "react-icons/fa6";

const Home: React.FC = () => {
  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const searchBoxRef = useRef(null);

  const handleSearch = (query: string) => {
    setIsSearch(true);
    console.log("Searching for:", query);
    // Implement your search logic here
  };

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
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const buttonSpring = useSpring({
    left: isFocused ? 10 : 50,
    // opacity: isFocused ? 100 : 0,
  });
  const borderColorClass = isFocused ? "border-[#49CAD2]" : "border-[#706f6f]";
  return (
    <div className="pb-10">
      <Head>
        <title>Your Page Title</title>
      </Head>
      <div className="w-full items-center">
        <hr className="w-full border-t border-t-[#000] absolute top-14" />
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
      {!isSearch ? (
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
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  md:w-[600px] w-full p-4 flex flex-col items-center">
            <div className="text-center">
              <h1 className="mb-4 sm:1xl md:text-3xl xl:text-3xl 2xl:text-4xl text-[#ffff]">
                (هُدًى لِّلنَّاسِ وَ بَیِّنٰتٍ مِّنَ الْهُدٰى وَ الْفُرْقَانِۚ)
              </h1>
              <div
                ref={searchBoxRef}
                className={`relative flex bg-white border w-full md:w-[600px] items-center justify-between rounded-md ${borderColorClass}`}
              >
                <animated.button
                  style={buttonSpring}
                  onClick={() => handleSearch(query)}
                  className="bg-[#49CAD2] text-white p-2 rounded-full mr-3 w-10 h-10 absolute top-1/2 transform -translate-y-1/2 md:absolute md:top-1/2"
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
                  className={`px-5 py-4 md:w-[600px] text-[#000] rounded-md w-full focus:outline-none ${
                    isFocused ? "md:h-32" : "md:h-14"
                  } sm:h-16 border-0`}
                  style={{ textAlign: "right" }}
                />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div
            className="mx-[160px] w-[100px] flex items-center cursor-pointer"
            onClick={() => setIsSearch(false)}
          >
            <FaArrowLeft size={20} className="text-[#000]" />
            <h2 className="text-[#000] ml-2">Back </h2>
          </div>
          <div className="mx-auto max-w-screen-xl p-[100px] bg-[#F9F9F9] items-center justify-center rounded-lg mt-5 border-2 border-[#c8c8c856]">
            <h1 className="sm:1xl md:text-3xl xl:text-3xl 2xl:text-4xl text-[#375438] text-center font-[800] md:leading-[40px] xl:leading-[40px] 2xl:leading-[60px]">
              وَلَا تَأْكُلُوا أَمْوَالَكُم بَيْنَكُم بِالْبَاطِلِ وَتُدْلُوا
              بِهَا إِلَى الْحُكَّامِ لِتَأْكُلُوا فَرِيقًا مِّنْ أَمْوَالِ
              النَّاسِ بِالْإِثْمِ وَأَنتُمْ تَعْلَمُونَ (188)
            </h1>
            <p className="mt-10 sm:text-[12px] md:text-[20px] xl:text-[30px] 2xl:text-[30px] text-[#010101] text-center">
              وَ لَا تَاْكُلُوْۤا اَمْوَالَكُمْ بَیْنَكُمْ بِالْبَاطِلِ: اور آپس
              میں ایک دوسرے کا مال ناحق نہ کھاؤ اس آیت میں باطل طور پر کسی کا
              مال کھانا حرام فرمایا گیا خواہ لوٹ کرہو یا چھین کر ،چوری سے یا
              جوئے سے یا حرام تماشوں یا حرام کاموں یا حرام چیزوں کے بدلے یا رشوت
              یا جھوٹی گواہی سے یہ سب ممنوع و حرام ہے۔(احکام القرآن، باب ما
              یحلہ حکم الحاکم وما لا یحلہ،۱ / ۳۰۴) مسئلہ : اس سے معلوم ہوا کہ
              ناجائز فائدہ کے لیے کسی پر مقدمہ بنانا اور اس کو حکام تک لے جانا
              ناجائز و حرام ہے۔ اسی طرح اپنے فائدہ کی غرض سے دوسرے کو ضرر
              پہنچانے کے لیے حکام پر اثر ڈالنا، رشوتیں دینا حرام ہے ۔حکام تک
              رسائی رکھنے والے لوگ اس آیت کے حکم کو پیش نظر رکھیں۔حضرت ابو بکر
              صدیق رَضِیَ اللہُ تَعَالٰی عَنْہُ سے روایت ہے، نبی کریم صَلَّی
              اللہُ تَعَالٰی عَلَیْہِ وَاٰلِہٖ وَسَلَّمَ نے ارشاد فرمایا: ’’وہ
              شخص ملعون ہے جو اپنے مسلمان بھائی کو نقصان پہنچائے یا اس کے ساتھ
              دھوکہ کرے۔(تاریخ بغداد، باب محمد، محمد بن احمد بن محمد بن جابر۔۔۔
              الخ،۱ / ۳۶۰، رقم: ۲۶۲) یہ بھی معلوم ہوا کہ جھوٹی گواہی، جھوٹی
              وکالت، جھوٹے مقدمہ کی پیروی و کوشش کی اجرتیں حرام ہیں۔ حرام کے
              بارے میں آگے تفصیل سے بیان آئے گا۔
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
