import Page from "./Page"; 
import { NewsDataProvider } from "./providers";

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
