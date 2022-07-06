import React from "react";
import styled from "styled-components";

export default function LoadingSpinner() {
  return (
    <Wrapper>
        <div className="spinner-container">
            <div className="loading-spinner">
            </div>
        </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
    @keyframes spinner {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
    }
    .loading-spinner {
        position: absolute;
        top: 40%;
        left: 45%;
        transform: translate(-50%,-50%);
        width: 100px;
        height: 100px;
        border: 10px solid #f3f3f3; 
        border-top: 10px solid #383636; 
        border-radius: 50%;
        animation: spinner 1.5s linear infinite;

        @media (max-width: 600px) {
            position: absolute;
            left: 40%;
        }
    }
`