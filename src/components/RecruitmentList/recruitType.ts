export interface RecruitProps {
  data: [
    {
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
