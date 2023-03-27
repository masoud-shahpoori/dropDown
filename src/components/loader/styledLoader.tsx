import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;
export const LoaderContainer = styled.div`
  border: 3px solid #f3f3f3;
  border-top: 3px solid var(--active-color);
  border-radius: 50%;
  width: 30px;
  height: 30px;
  animation: ${spin} 2s linear infinite;
  position: absolute;
  bottom: 5px;
  right: 5px;
`;
