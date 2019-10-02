import { css } from 'styled-components'

const sizes = {
   largest: 1300,
   large: 1100,
   medium: 900,
   small: 770,
   smallest: 600,
   tiny: 450
   
}

export default Object.keys(sizes).reduce((acc, label) => {
   acc[label] = (...args) => css`
      @media (max-width: ${sizes[label]}px) {
         ${css(...args)};
      }
   `
   return acc
}, {})

// Usage

// ${media.largest`
// max-height: 80%;
// transform: translate(-2rem, -2rem);
// `}   

// ${media.large`
// max-height: 70%;
// transform: translate(-1.5rem, -1.5rem);
// `}   

// ${media.medium`
// max-height: 55%;
// transform: translate(-1rem, -1rem);
// `}   