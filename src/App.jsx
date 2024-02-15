import Page from "./Page";
import { NewsDataProvider } from "./providers";
import ThemeProvider from "./providers/ThemeProvider";

function App() {
  return (
    <>
      <NewsDataProvider>
        <ThemeProvider>
          <Page />
        </ThemeProvider>
      </NewsDataProvider>
    </>
  );
}

export default App;
