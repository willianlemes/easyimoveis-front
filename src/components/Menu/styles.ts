/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const StyledMenu = styled.div`
  a {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: var(--area-small) var(--area-normal);
    background: var(--body-bg);
    margin-bottom: var(--area-small);
    font-size: var(--font-small);
    color: var(--body-color);
    font-weight: var(--weight-bold);
    text-decoration: none;
  }

  a:hover,
  a.active {
    background: var(--body-color);
    color: #ffffff;
  }
`;
