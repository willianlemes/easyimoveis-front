import React from 'react';
import HomeIcon from '@material-ui/icons/HomeOutlined';
import { Divider, FormControl, Select, MenuItem } from '@material-ui/core';
import FormContainer from '../../containers/FormContainer';
import {
  ContainerTab,
  ContainerForm,
  useStyles,
  ContainerInput
} from './styles';
import Input from '../../components/Input/index';

const Properties: React.FC = () => {
  const classes = useStyles();

  return (
    <FormContainer title="Cadastro de Imoveis" icon={<HomeIcon />}>
      <Divider />
      <ContainerTab>
        <h1>TAB1</h1>
        <h1>TAB2</h1>
      </ContainerTab>
      <ContainerForm>
        <h2>Sobre o Imóvel</h2>
        <p>Proprietário :</p>
        <FormControl className={classes.root}>
          <Select label="Dia da Semana" name="week_day" variant="outlined">
            <MenuItem value="Proprietário 1">Proprietário 1</MenuItem>
            <MenuItem value="Proprietário 2">Proprietário 2</MenuItem>
            <MenuItem value="Proprietário 3">Proprietário 3</MenuItem>
          </Select>
        </FormControl>
        <ContainerInput>
          <Input placehouder="Finalidade" type="text" />
          <Input placehouder="Tipo" type="text" />
          <Input placehouder="Preço de Venda" type="number" />
        </ContainerInput>
      </ContainerForm>
    </FormContainer>
  );
};

export default Properties;
