import React from 'react';

import { StyledHeder } from './styles';

interface FormProps {
  title: string;
  children: React.ReactNode;
}

const Form: React.FC<FormProps> = ({ title, children }: FormProps) => {
  return (
    <div className="app_formbox app_widget">
      <form className="app_form">
        <StyledHeder>
          <h2>{title}</h2>
        </StyledHeder>
        {children}
      </form>
    </div>
  );
};

export default Form;
