import styled from 'styled-components';

type NameProps = {
  name: string,
  role: string,
  email: string,
  Icon?: any,
  link?: string,
};

const Name = ({ name, role, email, Icon, link }: NameProps) => {
  return (
    <Container>
      <div>
        <span>{name}</span> <span className="role">{role}</span>
        <div className="email">{email}</div>
      </div>
      {Icon && (
        <div className='github-link'>
          <a href={link}>
            <Icon />
          </a>
        </div>
      )}
    </Container>
  );
};

export default Name;

const Container = styled.div`
  display: flex;

  margin-top: 10px;

  .role {
    font-size: 14px;
    color: gray;
  }

  .email {
    font-size: 10px;
    color: #8b8b8b;
  }

  .github-link {
    a:link{text-decoration:none};
    a:visited,a:active{color:black};
  }
`;
