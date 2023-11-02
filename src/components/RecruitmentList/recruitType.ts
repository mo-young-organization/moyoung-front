export interface RecruitProps {
  data: [
    {
      age: string;
      cinemaName: string;
      cinemaBrand: string;
      cinemaRegion: string;
      currentNum: number;
      gender: string;
      maxNum: number;
      movieName: string;
      movieRating: string;
      movieThumbnailUrl: string;
      recruitingArticleId: number;
      screenInfo: string;
      startTime: string;
      title: string;
      writerAge: string;
      writerDisplayName: string;
      writerGender: string;
    },
  ];
  pageInfo: {
    page: number;
    size: number;
    totalElements: number;
    totalPages: number;
  };
}

export interface ListProps {
  recruitingArticleId: number;
  writerDisplayName: string;
  writerAge: string;
  title: string;
  cinemaRegion: string;
  cinemaName: string;
  movieThumbnailUrl: string;
  movieName: string;
  startTime: string;
  screenInfo: string;
  maxNum: number;
  currentNum: number;
  gender: string;
  age: string;
  nicname: string;
  province: string;
  city: string;
}

export interface PosterProps {
  $posterImg: string;
}
