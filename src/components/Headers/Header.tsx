import React from 'react';
import './Header.css';
import UrlInput from '../UrlInput';
import ActionButtons from '../ActionButtons';
import HeaderSizeControls from './HeaderSizeControls';

interface HeaderProps {
  url: string;
  onUrlChange: (url: string) => void;
  onCarregar: () => void;
  onRemover: () => void;
  onReloadIframe: () => void;
  iframeHeight: number;
  setIframeHeight: (height: number) => void;
  iframeWidth: number;
  setIframeWidth: (width: number) => void;
}

const Header: React.FC<HeaderProps> = ({
  url,
  onUrlChange,
  onCarregar,
  onRemover,
  onReloadIframe,
  iframeHeight,
  setIframeHeight,
  iframeWidth,
  setIframeWidth
}) => {
  return (
    <div className="header">
      <UrlInput url={url} onUrlChange={onUrlChange} />
      <ActionButtons onCarregar={onCarregar} onRemover={onRemover} onReloadIframe={onReloadIframe} />
      <HeaderSizeControls iframeHeight={iframeHeight} setIframeHeight={setIframeHeight} iframeWidth={iframeWidth} setIframeWidth={setIframeWidth} />
    </div>
  );
};

export default Header;
