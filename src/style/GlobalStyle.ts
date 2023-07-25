import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

*{
  box-sizing: border-box;
}
html,
body,
body > div { /* the react root */
  margin: 0;
  padding: 0;  
}

body::-webkit-scrollbar {
  display: none;
}
body {
  -ms-overflow-style: none; /* 인터넷 익스플로러 */
  scrollbar-width: none; /* 파이어폭스 */
}

#root {
  display: flex;
}
ul {
  margin: 0;
  padding: 0 0 0 1.5em;
}
li {
  padding: 0;
}
`;

export default GlobalStyles;
