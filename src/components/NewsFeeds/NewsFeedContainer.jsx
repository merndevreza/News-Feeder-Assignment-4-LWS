import { useContext } from "react";
import FeaturedNews from "./FeaturedNews"; 
import { NewsContext } from "../../contexts";

const NewsFeedContainer = () => { 
  const{loading}=useContext(NewsContext) 
  return (
    <main className="my-10 lg:my-14">
      <div className="container mx-auto grid grid-cols-12 gap-8">
        {
          loading.state? "Loading...":<FeaturedNews />
        }
      </div>
    </main>
  );
};

export default NewsFeedContainer;
