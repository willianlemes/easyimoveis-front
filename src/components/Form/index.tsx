/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from 'react';

import Header from '../Header';

type FormProps = {
  title: string;
} & React.FormHTMLAttributes<HTMLFormElement>;

const Form: React.FC<FormProps> = ({ title, children, ...props }) => {
  return (
    <div className="app_formbox app_widget">
      <form className="app_form" {...props}>
        <Header>{title}</Header>
        {children}
      </form>
    </div>
  );
};

export default Form;
