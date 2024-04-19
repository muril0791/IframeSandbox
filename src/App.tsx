// src/App.tsx
import { useState } from "react";
import validateUrl from "./utils/validateUrl";
import "./App.css";
import Header from "./components/Headers/Header";
import IframeViewer from "./components/IframeViewer";

function App() {
  const [url, setUrl] = useState("");
  const [iframeHeight, setIframeHeight] = useState(712);
  const [iframeWidth, setIframeWidth] = useState(1274);
  const [isValidUrl, setIsValidUrl] = useState(true);

  const loadURL = (newUrl: string) => {
    if (newUrl === "") {
      setUrl("");
      setIsValidUrl(false);
    } else if (validateUrl(newUrl)) {
      setUrl(newUrl);
      setIsValidUrl(true);
    } else {
      setIsValidUrl(false);
    }
  };

  const removerURL = () => setUrl("");
  const reloadIframe = () => {
    setUrl("");
    setTimeout(() => {
      setUrl(url);
    }, 10);
  };

  return (
    <div className="app">
      <section style={{width: '100%', height:'100%'}}>
        {" "}
        <Header
          url={url}
          onUrlChange={setUrl}
          onCarregar={() => loadURL(url)}
          onRemover={removerURL}
          onReloadIframe={reloadIframe}
          iframeHeight={iframeHeight}
          setIframeHeight={setIframeHeight}
          iframeWidth={iframeWidth}
          setIframeWidth={setIframeWidth}
        />
      </section>
      <section>
        {" "}
        {!isValidUrl && (
          <p className="error-message">Por favor, insira uma URL válida.</p>
        )}
        <IframeViewer url={url} height={iframeHeight} width={iframeWidth} />
      </section>
    </div>
  );
}

export default App;
