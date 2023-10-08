export interface RecruitProps {
  data: [
    {
      recruitingArticleId: number;
      title: string;
      maxNum: number;
      currentNum: number;
      gender: string;
      age: string;
      runningTimeInfo: {
        runningTimeId: number;
        startTime: string;
        endTime: string;
      };
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
  title: string;
  maxNum: number;
  currentNum: number;
  gender: string;
  age: string;
  runningTimeInfo: {
    runningTimeId: number;
    startTime: string;
    endTime: string;
  };
  nicname: string;
  province: string;
  city: string;
}
