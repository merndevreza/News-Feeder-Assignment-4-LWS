import Page from "./Page";
import { NewsDataProvider, SearchProvider } from "./providers";
import ThemeProvider from "./providers/ThemeProvider";

function App() {
  return (
    <>
      <NewsDataProvider>
        <SearchProvider>
          <ThemeProvider>
            <Page />
          </ThemeProvider>
        </SearchProvider>
      </NewsDataProvider>
    </>
  );
}

export default App;
