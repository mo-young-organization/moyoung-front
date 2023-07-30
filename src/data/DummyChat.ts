export type Chat = {
  writerId: number;
  name: string;
  gender: 'male' | 'female';
  age: string;
  content: string;
  time: string;
  readCount: string;
};

const dummyChatData: Chat[] = [
  {
    writerId: 1,
    name: '이세영',
    gender: 'male',
    age: '70',
    content: '여러분 안녕하세요 우리 멋진 웹사이트 만들어봐요!',
    time: '오후 13:24',
    readCount: '2',
  },
  {
    writerId: 2,
    name: '송준상',
    gender: 'male',
    age: '20',
    content: '모영 팀의 백엔트를 책임지는 송준상입니다. 데이터 처리는 저에게 맡겨주세요!!!',
    time: '오후 13:25',
    readCount: '1',
  },
  {
    writerId: 3,
    name: '최영아',
    gender: 'female',
    age: '20',
    content: '디자인 천재 최영아입니다. 뛰어난 ux가 뭔지 제대로 보여드리죠',
    time: '오후 13:25',
    readCount: '1',
  },
  {
    writerId: 4,
    name: '김현우',
    gender: 'male',
    age: '30',
    content: '저는 무임승차를 담당합니다. 감사합니다',
    time: '오후 13:26',
    readCount: '1',
  },
];

export type Participants = {
  name: string;
  id: number;
  age: number;
  gender: 'male' | 'female';
};

export const dummyParticipants = [
  {
    name: '이세영',
    id: 1,
    age: 70,
    gender: 'male',
  },
  {
    name: '송준상',
    id: 2,
    age: 20,
    gender: 'male',
  },
  {
    name: '최영아',
    id: 3,
    age: 20,
    gender: 'female',
  },
  {
    name: '김현우',
    id: 4,
    age: 20,
    gender: 'male',
  },
];

export default dummyChatData;
