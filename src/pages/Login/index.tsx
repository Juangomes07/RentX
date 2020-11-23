import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <Title>Estamos quase lá.</Title>
      <Form>
        <input placeholder="Email" />
      </Form>
      <Form>
        <input placeholder="Senha" />
        <button type="submit">Login</button>
      </Form>
      <Repositories>
        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/72666763?s=460&u=7358172f30f2f6e71aedba639ded5360829ea6db&v=4"
            alt="Juan Gomes"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>Easy peasy highly scalable ReactJS & React Native forms!</p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
