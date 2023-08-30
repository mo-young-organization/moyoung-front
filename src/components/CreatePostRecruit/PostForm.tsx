import PostCinema from './PostForm/PostCinema';
import PostPersonnel from './PostForm/PostPersonnel';
import PostTitle from './PostForm/PostTitle';

const PostForm = () => {
  return (
    <div>
      <PostTitle />
      <PostCinema />
      <PostPersonnel />
      <div>
        <button>등록하기</button>
      </div>
    </div>
  );
};

export default PostForm;
