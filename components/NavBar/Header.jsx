import React from "react";
import styled, { css } from "styled-components";

const HeaderContainer = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 6rem;
  box-sizing: border-box;

  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const ImageContainer = styled.div`
  padding: 1rem;
  img {
    cursor: pointer;
    height: 2rem;
		fill: #94d31b; 
  }
`;

const IconsContainer = styled.div`
  ${props =>
    props.type === "socialMedia"
      ? css`
          margin-right: 2rem;
        `
      : css`
          margin-left: 2rem;
        `}
  display: flex;
  align-items: center;
`;

// import IconChart from '../../chartComponents/IconChart/IconChart';

const Header = () => {
  return (
    <HeaderContainer>
      {/* <IconsContainer>
				<IconChart
					fill
				/>
			</IconsContainer> */}
      <IconsContainer type="socialMedia">
        <ImageContainer>
          <a
            href="https://twitter.com/AndSzesztai"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/static/icons/twitter.svg" alt="twitter icon" />
          </a>
        </ImageContainer>
        <ImageContainer>
          <a
            href="https://linkedin.com/in/andr%C3%A1s-szesztai-351a4379/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/static/icons/linkedin.svg" alt="linkedin icon" />
          </a>
        </ImageContainer>
        <ImageContainer>
          <a
            href="https://github.com/andras-newzoo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/static/icons/github.svg" alt="github icon" />
          </a>
        </ImageContainer>
      </IconsContainer>
    </HeaderContainer>
  );
};

export default Header;
