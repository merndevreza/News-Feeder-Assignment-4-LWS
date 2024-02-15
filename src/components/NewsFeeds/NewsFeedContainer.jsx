import FeaturedNews from "./FeaturedNews"; 

const NewsFeedContainer = () => {  
  return (
    <main className="my-10 lg:my-14">
      <div className="container mx-auto grid grid-cols-12 gap-8">
        <FeaturedNews />
      </div>
    </main>
  );
};

export default NewsFeedContainer;
