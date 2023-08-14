import React from 'react';
import styled from 'styled-components';

type NameProps = {
  name: string;
  role: string;
  email: string;
  link?: string;
  children?: React.ReactNode;
};

const Name = ({ name, role, email, link, children }: NameProps) => {
  return (
    <Container>
      <div className="name">
        <span>{name}</span> <span className="role">{role}</span>
        <div className="email">{email}</div>
      </div>
      <div className="github-link">
        <a href={link} target="_blank">
          {children}
        </a>
      </div>
    </Container>
  );
};

export default Name;

const Container = styled.div`
  display: flex;

  margin-top: 10px;

  .name {
    width: 140px;
  }

  .role {
    font-size: 14px;
    color: gray;
  }

  .email {
    font-size: 10px;
    color: #8b8b8b;
  }

  .github-link {
    a:link {
      text-decoration: none;
    }
    a:visited,
    a:active {
      color: black;
    }
  }
`;
