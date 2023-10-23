import React from 'react';
import styled, {keyframes, useTheme} from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const LoadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const LoadingSVG = styled.svg`
  animation: ${rotate} 1s linear infinite;
  width: 40px;
  height: 40px;
`;

const Loader = () => {
    const theme = useTheme();
    return <LoadingContainer>
        <LoadingSVG viewBox="0 0 40 40">
            <path
                d="M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946
        s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634
        c0-6.425,5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,26.541,26.626,31.749,20.201,31.749z"
                fill="none"
                stroke={theme.colors.blue}
                strokeWidth="2.5"
                strokeDasharray="17.6798 17.6798"
                transform="rotate(207.719 20 20)"
            />
        </LoadingSVG>
    </LoadingContainer>
};

export default Loader;