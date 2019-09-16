import React from 'react';
import styled from 'styled-components'
import '../styles/main.scss'

const Title = styled.h1`
  font-size: 50px;
  font-family: 'gill-sans-nova, sans-serif';
`

export default function About() {
  return (
    <div>
      <Title>Test Title</Title>
      <p>This is the about page</p>
    </div>
  );
}