import React, { useState, useEffect, useRef } from "react";
import { BsArrowsFullscreen } from "react-icons/bs";
import "./IframeViewer.css";

// Função de validação de URL (pode ser movida para um arquivo utilitário)
const validateUrl = (urlString: string) => {
  try {
    new URL(urlString);
    return true;
  } catch (e) {
    return false;
  }
};

interface IframeViewerProps {
  url: string;
  height: number;
  width: number;
}

const IframeViewer: React.FC<IframeViewerProps> = ({ url, height, width }) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  const toggleFullScreen = () => {
    if (iframeRef.current) {
      if (!document.fullscreenElement) {
        iframeRef.current.requestFullscreen().catch((err) => {
          console.error(
            `Erro ao ativar o modo tela cheia: ${err.message} (${err.name})`
          );
          setHasError(true);
        });
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        }
      }
    }
  };

  useEffect(() => {
    const currentIframe = iframeRef.current;

    if (url && validateUrl(url)) {
      setIsLoading(true);
      setHasError(false);

      const handleLoad = () => {
        setIsLoading(false);
      };

      const handleError = () => {
        setIsLoading(false);
        setHasError(true);
      };

      currentIframe?.addEventListener("load", handleLoad);
      currentIframe?.addEventListener("error", handleError);

      return () => {
        currentIframe?.removeEventListener("load", handleLoad);
        currentIframe?.removeEventListener("error", handleError);
      };
    } else {
      setHasError(true);
      setIsLoading(false);
    }
  }, [url]);

  return (
    <>
      
        {url && validateUrl(url) ? (
          <>
            {isLoading && <div className="loading">Carregando...</div>}
            {hasError && <div className="error">Falha ao carregar o link.</div>}
            <iframe
              ref={iframeRef}
              src={url}
              className="iframe"
              style={{
                height: `${height}px`,
                width: `${width}px`,
                borderRadius: "10px",
              }}
              title="Iframe Viewer"
              onLoad={() => setIsLoading(false)}
              onError={() => setHasError(true)}
            ></iframe>
            <BsArrowsFullscreen
              className="full-screen"
              onClick={toggleFullScreen}
            />
          </>
        ) : (
          <span
            className="message"
          >
            {hasError
              ? "URL inválida ou erro ao carregar."
              : "Nenhum link sendo carregado."}
          </span>
        )}
    </>
  );
};

export default IframeViewer;
