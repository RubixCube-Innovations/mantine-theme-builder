export const generateCSSTemplate = () => {
  return `

    .globalMantineInput {
  &:focus-within {
    outline: rem(1px) solid var(--mantine-primary-color-filled) ;
  }
}
  
    `;
};
