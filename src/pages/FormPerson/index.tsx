import React, { useState, useEffect } from 'react';

import { useParams } from 'react-router';
import Form from '../../components/Form';
import Input from '../../components/Input';
import { InputGroup } from '../../assets/styles';
import api from '../../services/api';

interface IPerson {
  id: string;
  name: string;
  nickname: string;
}

interface FormPersonProps {
  id?: string;
}

const FormPerson: React.FC = () => {
  const [person, setPerson] = useState<IPerson>({
    id: '',
    name: '',
    nickname: ''
  });

  const { id } = useParams<FormPersonProps>();

  useEffect(() => {
    async function loadPerson() {
      if (id) {
        const response = await api.get(`people/${id}`);
        setPerson(response.data[0]);
      }
    }
    loadPerson();
  }, []);

  return (
    <Form title="Cadastro de Pessoas">
      <InputGroup>
        <Input label="Nome:" name="name" value={person.name} />
        <Input label="Apelido:" name="nickname" value={person.nickname} />
      </InputGroup>
    </Form>
  );
};

export default FormPerson;
