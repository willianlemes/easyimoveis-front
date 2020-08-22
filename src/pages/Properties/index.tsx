import React from 'react';
import HomeIcon from '@material-ui/icons/HomeOutlined';
import { Divider } from '@material-ui/core';
import FormContainer from '../../containers/FormContainer';
import { ContainerTab, ContainerForm } from './styles';

const Properties: React.FC = () => (
  <FormContainer title="Cadastro de Imoveis" icon={<HomeIcon />}>
    <Divider />
    <ContainerTab>
      <h1>TAB1</h1>
      <h1>TAB2</h1>
    </ContainerTab>
    <ContainerForm>
      <h2>Sobre o Imóvel</h2>
      <p>Proprietário</p>
    </ContainerForm>
  </FormContainer>
);

export default Properties;
