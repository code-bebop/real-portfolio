import { css } from "styled-components";

const sizes = {
  mobile: 768
};

export default Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media screen and (max-width: ${sizes[label]}px) {
      ${css(...args)}
    }
  `;

  return acc;
}, {});
