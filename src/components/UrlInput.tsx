// src/components/UrlInput.tsx
import React from 'react';
import styled from 'styled-components';
interface UrlInputProps {
  onUrlChange: (url: string) => void;
  url: string;
}
const SerchBar = styled.input`
border: 1px solid #ccc;
border-radius: 20px;
padding: 10px;
margin-right: 10px;
color: #000000;
`
const UrlInput: React.FC<UrlInputProps> = ({ onUrlChange, url }) => {
  return (
    <SerchBar
      type="text"
      value={url}
      onChange={(e) => onUrlChange(e.target.value)}
      placeholder="Digite a URL aqui"
      className="urlInput"
    />
  );
};

export default UrlInput;
