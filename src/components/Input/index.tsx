import React, { ReactNode } from 'react';
import TextField from '@material-ui/core/TextField';
import useStyles from './styles';

type InputsetProps = {
  /**
   * The fieldset's legend to be rendered.
   */
  placehouder: string;
  /**
   * The fieldset's legend to be rendered.
   */
  type?: string;
  /**
   * The fieldsets's children components.
   *
   */
  children?: ReactNode;
};
const Input: React.FC<InputsetProps> = ({
  placehouder,
  type,
  children
}: InputsetProps) => {
  const classes = useStyles();
  return (
    <>
      <TextField
        className={classes.input}
        id="outlined-search"
        label={placehouder}
        type={type}
        variant="outlined"
      />
      {children}
    </>
  );
};

export default Input;
