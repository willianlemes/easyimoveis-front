import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { Formik } from 'formik';
import Yup from '../../validator';

import Form from '../../components/Form';
import Fieldset from '../../components/Fieldset';
import Input from '../../components/Input';
import InputDatePicker from '../../components/InputDatePicker';
import Select from '../../components/Select';
import { InputGroup } from '../../assets/styles';
import api from '../../services/api';

interface IPerson {
  id: string;
  name: string;
  nickname: string;
  profile: string;
  type: string;
  dateBirth: string;
  occupation: string;
  rgIe: string;
  cpfCnpj: string;
  phone: string;
  cellPhone: string;
  email: string;
  address: string;
  addressNumber: string;
  neighborhood: string;
  cep: string;
  state: string;
  city: string;
}

interface FormPersonProps {
  id?: string;
}

const PersonSchema = Yup.object().shape({
  name: Yup.string().min(2).max(255).required(),
  nickname: Yup.string().min(2).max(255)
});

const FormPerson: React.FC = () => {
  const [person, setPerson] = useState<IPerson>({
    id: '',
    name: '',
    nickname: '',
    profile: '',
    type: '',
    dateBirth: '',
    occupation: '',
    rgIe: '',
    cpfCnpj: '',
    phone: '',
    cellPhone: '',
    email: '',
    address: '',
    addressNumber: '',
    neighborhood: '',
    cep: '',
    state: '',
    city: ''
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
  }, [id]);

  return (
    <Formik<IPerson>
      enableReinitialize
      initialValues={person}
      validationSchema={PersonSchema}
      onSubmit={(values, actions) => {
        try {
          api.post('/people', values);
        } catch (error) {
          console.log(error);
        }
      }}
    >
      {({
        values,
        handleBlur,
        handleChange,
        handleSubmit,
        errors,
        touched
      }) => (
        <Form title="Cadastro de Pessoas" onSubmit={handleSubmit}>
          <Fieldset legend="Identificação">
            <InputGroup>
              <Select
                label="Perfil:"
                name="profile"
                value={values.profile}
                onChange={handleChange}
                onBlur={handleBlur}
                options={[
                  {
                    label: 'Cliente',
                    value: 'Customer'
                  },
                  {
                    label: 'Corretor',
                    value: 'Broker'
                  },
                  {
                    label: 'Outro',
                    value: 'Other'
                  }
                ]}
              />
              <Select
                label="Tipo:"
                name="type"
                value={values.type}
                onChange={handleChange}
                onBlur={handleBlur}
                options={[
                  {
                    label: 'Física',
                    value: 'F'
                  },
                  {
                    label: 'Jurídica',
                    value: 'J'
                  }
                ]}
              />
            </InputGroup>
            <InputGroup>
              <Input
                label={
                  values.type === 'F' || !values.type
                    ? 'Nome:'
                    : 'Razão Social:'
                }
                name="name"
                value={values.name}
                onBlur={handleBlur}
                onChange={handleChange}
                errorMessage={errors.name}
              />
              <Input
                label={
                  values.type === 'F' || !values.type
                    ? 'Apelido:'
                    : 'Nome Fantasia:'
                }
                name="nickname"
                value={values.nickname}
                onBlur={handleBlur}
                onChange={handleChange}
                errorMessage={errors.nickname}
              />
            </InputGroup>
            <InputGroup>
              <InputDatePicker
                label={
                  values.type === 'F' || !values.type
                    ? 'Data de Nascimento:'
                    : 'Data de Fundação:'
                }
                name="dateBirth"
                value={values.dateBirth}
                onBlur={handleBlur}
                onChange={handleChange}
              />
              <Input
                label="Profissão:"
                name="nickname"
                value={values.occupation}
                onBlur={handleBlur}
                onChange={handleChange}
              />
            </InputGroup>
            <InputGroup>
              <Input
                label={values.type === 'F' || !values.type ? 'CPF:' : 'CNPJ:'}
                name="cpfCnpj"
                value={values.cpfCnpj}
                onBlur={handleBlur}
                onChange={handleChange}
              />
              <Input
                label={values.type === 'F' || !values.type ? 'RG:' : 'IE:'}
                name="rgIe"
                value={values.rgIe}
                onBlur={handleBlur}
                onChange={handleChange}
              />
            </InputGroup>
          </Fieldset>
          <Fieldset legend="Contato">
            <InputGroup>
              <Input
                label="Telefone:"
                name="phone"
                value={values.phone}
                onBlur={handleBlur}
                onChange={handleChange}
              />
              <Input
                label="Celular:"
                name="cellPhone"
                value={values.cellPhone}
                onBlur={handleBlur}
                onChange={handleChange}
              />
            </InputGroup>
            <InputGroup>
              <Input
                label="E-mail:"
                name="email"
                value={values.email}
                onBlur={handleBlur}
                onChange={handleChange}
              />
            </InputGroup>
          </Fieldset>
          <Fieldset legend="Endereço">
            <InputGroup>
              <Input
                label="Logradouro:"
                name="address"
                value={values.address}
                onBlur={handleBlur}
                onChange={handleChange}
              />
              <Input
                label="Número:"
                name="addressNumber"
                value={values.addressNumber}
                onBlur={handleBlur}
                onChange={handleChange}
              />
            </InputGroup>
            <InputGroup>
              <Select
                label="Estado:"
                name="state"
                value={values.state}
                onBlur={handleBlur}
                onChange={handleChange}
                options={[
                  {
                    label: 'Paraná',
                    value: 'PR'
                  },
                  {
                    label: 'São Paulo',
                    value: 'SP'
                  }
                ]}
              />
              <Input
                label="Cidade:"
                name="city"
                value={values.city}
                onBlur={handleBlur}
                onChange={handleChange}
              />
            </InputGroup>
            <InputGroup>
              <Input
                label="CEP:"
                name="cep"
                value={values.cep}
                onBlur={handleBlur}
                onChange={handleChange}
              />
            </InputGroup>
          </Fieldset>

          <div className="al-center">
            <div className="app_formbox_actions">
              <button
                type="submit"
                className="btn btn_inline radius transition icon-pencil-square-o"
              >
                Salvar
              </button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default FormPerson;
