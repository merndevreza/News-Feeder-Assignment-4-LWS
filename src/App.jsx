import Page from "./Page";
import { NewsDataProvider, SearchProvider } from "./providers";

function App() {
  return (
    <>
      <NewsDataProvider>
        <SearchProvider>
          <Page />
        </SearchProvider>
      </NewsDataProvider>
    </>
  );
}

export default App;
