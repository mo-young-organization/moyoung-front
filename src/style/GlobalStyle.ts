import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

*{
  box-sizing: border-box;
  padding: 0px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
      'Open Sans', 'Helvetica Neue', sans-serif;
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
}
li {
  padding: 0;
}
`;

export default GlobalStyles;
