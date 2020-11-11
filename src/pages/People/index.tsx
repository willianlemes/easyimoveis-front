import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import Header from '../../components/Header';

interface IPerson {
  id: string;
  userId: string;
  name: string;
  nickname: string;
  profile: { value: string; label: string };
  type: { value: string; label: string };
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
    <Link to={`pessoa/${id}`}>
      <article key={id} className="app_launch_item">
        <Column>{name}</Column>
        <Column>{nickname}</Column>
        <Column>{profile.label}</Column>
        <Column>{type.label}</Column>
      </article>
    </Link>
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
      <Header>Pessoas</Header>

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
