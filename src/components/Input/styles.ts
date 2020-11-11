import styled from 'styled-components';

interface StyledInputProps {
  isError: boolean;
}

export const StyledInput = styled.input<StyledInputProps>`
  font-size: 1em;
  color: #888888;
  border: 2px solid ${props => (props.isError ? '#f00' : '#cccccc')};
  display: block;
  background: none;
  width: 100%;
  padding: 10px;

  &:focus {
    outline-color: var(--body-color);
  }
`;

export const StyledLabel = styled.label`
  flex-basis: calc(50% - var(--area-small));
  display: block;
  margin-bottom: var(--area-normal);
  cursor: pointer;
`;

export const StyledSpan = styled.span`
  display: block;
  margin-bottom: 2px;
  font-size: var(--font-small);
  color: #888888;
`;

export const StyledErrorMessage = styled.div`
  color: var(--color-red);
  margin-top: 3px;
`;
