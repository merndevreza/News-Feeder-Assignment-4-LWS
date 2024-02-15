import { useContext } from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import NewsFeedContainer from "./components/NewsFeeds/NewsFeedContainer";
import { ThemeContext } from "./contexts";

const Page = () => {
  const{isDark}=useContext(ThemeContext)
  return (
    <div className={isDark?"dark":""}>
      <Header />
      <NewsFeedContainer/>
      <Footer/>
    </div>
  );
};

export default Page;
