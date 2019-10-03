import { css } from "styled-components";

const sizes = {
  largest: 1300,
  large: 1100,
  medium: 900,
  small: 770,
  smallest: 600,
  tiny: 450
};

export default Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label]}px) {
      ${css(...args)};
    }
  `;
  return acc;
}, {});

export const createBreakPoints = (customBreakpoints = sizes) =>
  Object.keys(customBreakpoints).reduce((acc, label) => {
    acc[label] = (...args) => css`
      @media (max-width: ${customBreakpoints[label]}px) {
        ${css(...args)};
      }
    `;
    return acc;
  }, {});
