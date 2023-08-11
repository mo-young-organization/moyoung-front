import { styled } from 'styled-components';

type ArticleProps = {
  data: {
    recruitingArticleId: number;
    title: string;
    nicname: string;
    province: string;
    city: string;
  }[];
};

const Article = ({ data }: ArticleProps) => {
  return (
    <Container>
      {data.map(el => (
        <Content>{el.city}</Content>
      ))}
    </Container>
  );
};

export default Article;

const Container = styled.div`
  width: 240px;
  height: 340px;
  border-radius: 20px;
  background-color: #6a6a6a;
`;

const Content = styled.div`
  width: 200px;
  height: 290px;
  background-color: pink;
`;
