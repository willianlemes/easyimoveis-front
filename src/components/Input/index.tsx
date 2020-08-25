import React, { ReactNode } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import ContainerInput from './styles';

export const useStyles = makeStyles({
  input: {
    width: '50%',
    padding: 10
  }
});

type InputsetProps = {
  /**
   * The fieldset's legend to be rendered.
   */
  placehouder: string;

  /**
   * The fieldsets's children components.
   *
   */
  children?: ReactNode;
};
const Input: React.FC<InputsetProps> = ({
  placehouder,
  children
}: InputsetProps) => {
  const classes = useStyles();
  return (
    <ContainerInput>
      <TextField
        className={classes.input}
        id="outlined-search"
        label={placehouder}
        type="search"
        variant="outlined"
      />
      {children}
    </ContainerInput>
  );
};

export default Input;
