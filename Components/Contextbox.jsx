import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { auth } from "./Firebase";
import { Link } from "react-router-dom";
import { SwiperSlide } from "swiper/react";
export const MyContext = createContext();

export const Contextfun = ({ children }) => {
  const [hamburger, setHamburger] = useState(true);
  const [darkmod, setDarkmod] = useState(true);
  const [accardion, setAccardion] = useState(false);
  const [fetchData, setFetchData] = useState("");
  const [account, setAccount] = useState(false);
  const [loader, setLoader] = useState(true);
  const [shortsFetch, setShortsFetch] = useState("");

  const handleAccount = () => {
    setAccount(!account);
  };

  const hendleHamburger = () => {
    setHamburger(!hamburger);
  };

  const hendleDarkmod = () => {
    setDarkmod(!darkmod);
  };

  const hendleRotate = () => {
    setAccardion(!accardion);
  };
  // fetch fun....

  const myDataFun = async () => {
    const options = {
      method: "GET",
      url: "https://youtube-v3-alternative.p.rapidapi.com/trending",
      params: {
        geo: "US",
        lang: "en",
      },
      headers: {
        "X-RapidAPI-Key": "ba543beb6cmsh53468101855d482p1c46c7jsn65cb1da67182",
        "X-RapidAPI-Host": "youtube-v3-alternative.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      console.log(response);

      setLoader(false);

      {
        const contentData = response.data.data.map((obj) => (
          <div key={obj.videoId} className={`flex flex-col max-w-xs`}>
            <div className={`relative`}>
              <Link to={`/single/${obj.videoId}`}>
                <img
                  className="object rounded-md"
                  src={obj.thumbnail[1].url}
                  alt={obj.title}
                />
              </Link>
              <span
                className={`absolute right-3 bottom-2 px-1 rounded text-whitetext bg-darkbg`}>
                {obj.lengthText}
              </span>
            </div>
            <div className={`flex flex-col px-2 pt-2 max-w-full`}>
              <h5 className={`block truncate`}>{obj.title.slice(0, 20)}...</h5>
              <p className="block text-sm mt-3">{obj.channelTitle}</p>
              <p className="block text-sm">{obj.publishedText}</p>
            </div>
          </div>
        ));
        console.log(contentData);
        const shortsContent = response.data.data.map((short, index) => (
          <SwiperSlide key={index}>
            <Link to={`/single/${short.videoId}`}>
              <img
                className="object rounded-md min-w-screen"
                src={short.thumbnail[2].url}
                alt={short.title}
              />
            </Link>
          </SwiperSlide>
        ));
        if (response.data) {
          setFetchData(contentData);
          setShortsFetch(shortsContent);
        }
      }
    } catch (error) {
      console.error(error);
      setLoader(false);
    }
  };
  useEffect(() => {
    setLoader(true);
    myDataFun();
  }, []);

  // unsubscribe...
  const [user, setUser] = useState(null);
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userSearch) => {
      if (userSearch) {
        setUser(userSearch);
      } else {
        setUser(null);
      }
    });
    return unsubscribe;
  });

  return (
    <MyContext.Provider
      value={{
        hamburger,
        hendleHamburger,
        darkmod,
        hendleDarkmod,
        accardion,
        hendleRotate,
        fetchData,
        loader,
        user,
        handleAccount,
        account,
        shortsFetch,
      }}>
      {children}
    </MyContext.Provider>
  );
};
