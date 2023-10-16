export interface ThumbnailProps {
  $img: string;
}

export interface CinemaDataProps {
  movieInfo: {
    movieId: number;
    name: string;
    thumbnailUrl: string;
    movieRating: string;
    info: string;
  };
  cinemaInfo: [
    {
      cinemaId: number;
      brand: string;
      name: string;
      address: string;
      latitude: number;
      longitude: number;
      screenInfoList: [
        {
          screenInfo: string;
          runningTimeList: [
            {
              runningTimeId: number;
              startTime: string;
              endTime: string;
            },
          ];
        },
      ];
    },
  ];
}
