import React from 'react';
import './HeaderSizeControls.css';

interface HeaderSizeControlsProps {
  iframeHeight: number;
  setIframeHeight: (height: number) => void;
  iframeWidth: number;
  setIframeWidth: (width: number) => void;
}

const HeaderSizeControls: React.FC<HeaderSizeControlsProps> = ({
  iframeHeight, setIframeHeight, iframeWidth, setIframeWidth
}) => {
  return (
    <div className="inputsSize">
      <label className="labelSizeControl">H:</label>
      <input
        type="number"
        className="inputWidthHeight"
        min="100"
        max="1080"
        value={iframeHeight}
        onChange={(e) => setIframeHeight(Number(e.target.value))}
      />
      <label className="labelSizeControl">W:</label>
      <input
        className="inputWidthHeight"
        type="number"
        min="100"
        max="1920"
        value={iframeWidth}
        onChange={(e) => setIframeWidth(Number(e.target.value))}
      />
    </div>
  );
};

export default HeaderSizeControls;
