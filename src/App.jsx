import Page from "./Page";
import NewsDataProvider from "./providers/NewsDataProvider";

function App() {
  return (
    <>
    <NewsDataProvider>
      <Page />
    </NewsDataProvider>
    </>
  );
}

export default App;
