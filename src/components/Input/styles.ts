import styled from 'styled-components';

export const StyledInput = styled.input`
  font-size: 1em;
  color: #888888;
  border: 2px solid #cccccc;
  display: block;
  background: none;
  width: 100%;
  padding: 10px;
`;

export const StyledLabel = styled.label`
  flex-basis: calc(50% - var(--area-small));
  display: block;
  margin-bottom: var(--area-normal);
  cursor: pointer;

  label:first-child {
    margin-right: var(--area-normal);
  }
`;

export const StyledSpan = styled.span`
  display: block;
  margin-bottom: 2px;
  font-size: var(--font-small);
  color: #888888;
`;
