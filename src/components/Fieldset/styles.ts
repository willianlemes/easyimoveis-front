import styled from 'styled-components';

export const StyledFieldset = styled.fieldset`
  padding: 10px 15px;
  margin: 10px 0px;
  font-size: var(--font-small);
  -webkit-border-radius: var(--radius-normal);
  -moz-border-radius: var(--radius-normal);
  border-radius: var(--radius-normal);
  border: 2px solid var(--body-color);
`;

export const StyledLegend = styled.legend`
  padding: 5px 10px;
  font-weight: bold;
  text-transform: uppercase;
  /* background: var(--body-color); */
  background: var(--body-color);
  color: #ffffff;
  -webkit-border-radius: var(--radius-normal);
  -moz-border-radius: var(--radius-normal);
  border-radius: var(--radius-normal);
`;
