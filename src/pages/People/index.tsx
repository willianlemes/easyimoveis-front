import React, { useState, useEffect } from 'react';

import api from '../../services/api';

interface IPerson {
  id: string;
  userId: string;
  name: string;
  nickname: string;
  profile: string;
  type: string;
  genre: string;
  datebirth: string;
  rgIe: string;
  cpfCnpj: string;
  occupation: string;
  email: string;
  phone: string;
  cellPhone: string;
  address: string;
  addressNumber: string;
  neighborhood: string;
  cep: string;
  state: string;
  city: string;
  photo: string;
  status: string;
}

interface ColumnProps {
  children: React.ReactNode;
}

const Column: React.FC<ColumnProps> = ({ children }: ColumnProps) => {
  return (
    <p className="desc app_invoice_link transition">
      <a href="/">{children}</a>
    </p>
  );
};

interface ItemProps {
  person: IPerson;
}

const Item: React.FC<ItemProps> = ({ person }: ItemProps) => {
  const { id, name, nickname, profile, type } = person;
  return (
    <article key={id} className="app_launch_item">
      <Column>{name}</Column>
      <Column>{nickname}</Column>
      <Column>{profile}</Column>
      <Column>{type}</Column>
    </article>
  );
};

const People: React.FC = () => {
  const [people, setPeople] = useState<IPerson[]>();

  useEffect(() => {
    async function loadPeople() {
      try {
        const reponse = await api.get<IPerson[]>('/people');
        setPeople(reponse.data);
      } catch (error) {
        console.log(error);
      }
    }
    loadPeople();
  }, []);

  return (
    <article className="app_widget">
      <header className="app_widget_title">
        <h2 className="icon-user-plus">Pessoas</h2>
      </header>

      <nav className="menu">
        <ul>
          <li>
            <a className="icon-plus-circle radius transition" href="/">
              Novo
            </a>
          </li>
        </ul>
      </nav>

      <section className="app_launch_box">
        <div className="app_launch_item header">
          <p className="desc">Nome / Razão Social</p>
          <p className="desc">Apelido / Nome Fantasia</p>
          <p className="desc">Perfil</p>
          <p className="desc">Tipo</p>
        </div>
        {people?.map(person => {
          return <Item person={person} />;
        })}
      </section>
    </article>
  );
};

export default People;
