import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import styled from "styled-components";
import { colorGrey, fontSizeXXL, fontSizeM } from "../../styles/sharedStyles";
import chroma from "chroma-js";
import Link from "next/link";

const CardContainer = styled.div`
  position: relative;
  overflow: hidden;
  cursor: pointer;
`;

const Title = styled.div`
  font-family: gill-sans-nova, sans-serif;
  font-weight: 200;
  box-sizing: border-box;
  width: 100%;
  height: 100%;

  .title {
    font-size: ${fontSizeXXL};
    line-height: 1.2;
    color: ${colorGrey};
  }

  .sub-title {
    margin-top: 1rem;
    font-size: ${fontSizeM};
    color: ${chroma(colorGrey).brighten()};
  }

  background: #fff;
  padding: 1.6rem 2.4rem;
  z-index: 100;

  position: absolute;
  top: 0;
  left: 0;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  pointer-events: none;
`;

const CornerRibbon = styled.div`
  width: 100px;
  position: absolute;
  font-weight: 300;
  text-align: center;
  line-height: 20px;
  letter-spacing: 1px;
  color: #fff;
  background: ${colorGrey};
  top: 12px;
  right: -30px;
  transform: rotate(45deg);
  z-index: 101;
  text-transform: uppercase;
  pointer-events: none;
`;

const ImageCardComponent = ({ title, chartImage, link, date, newVis }) => {
  const [showTitle, setShowTitle] = useState(false);
  return (
    <Link href={link}>
      <CardContainer>
        <Card
          onMouseEnter={() => setShowTitle(true)}
          onMouseLeave={() => setShowTitle(false)}
        >
          <CardMedia
            component="img"
            image={chartImage}
            title="Justice And Peace dashboard screenshot"
          />
          {newVis && <CornerRibbon>New</CornerRibbon>}
          {showTitle && (
            <Title>
              <div className="title">{title}</div>
              <div className="sub-title">{date}</div>
            </Title>
          )}
        </Card>
      </CardContainer>
    </Link>
  );
};

export default ImageCardComponent;
