import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  root: {
    marginTop: 15,
    width: '100%',
    background: '#DCDCDC',
    borderRadius: 10
  }
});
export const ContainerInput = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const ContainerTab = styled.div`
  display: flex;
  border: 0.5px;
  border-style: solid;
  border-color: #d3d3d3;
  border-right: 0;

  h1 {
    padding: 10px;
    margin-left: 1.5rem;
    margin-right: 1.5rem;
  }
`;
export const ContainerForm = styled.div`
  margin-top: 3rem;
  padding: 1rem;
  border: 3px;
  border-style: solid;
  border-color: #008b8b;
  border-radius: 0.5rem;

  h2 {
    background-color: #008b8b;
    padding: 0.8rem;
    margin-left: 1rem;
    margin-right: 40rem;
    border-radius: 0.7rem;
    color: #fff;
    margin-top: -3rem;
  }
  p {
    margin-top: 1rem;
    font-size: 24px;
  }
`;

export const ContainerLocation = styled.div`
  margin-top: 3rem;
  padding: 1rem;
  border: 3px;
  border-style: solid;
  border-color: #008b8b;
  border-radius: 0.5rem;
  h2 {
    background-color: #008b8b;
    padding: 0.8rem;
    margin-left: 1rem;
    margin-right: 40rem;
    border-radius: 0.7rem;
    color: #fff;
    margin-top: -3rem;
  }
  p {
    margin-top: 1rem;
    font-size: 18;
  }
`;
