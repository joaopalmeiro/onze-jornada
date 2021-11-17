import { ChakraProvider } from '@chakra-ui/react';
import { findLast } from 'lodash/collection';
import { has, get } from 'lodash/object';
import { useEffect, useState } from 'react';

import Eleven from './Eleven';
import theme from './theme';

// More info:
// - https://chakra-ui.com/docs/getting-started#set-up-provider
// - https://github.com/chakra-ui/chakra-ui/blob/main/tooling/cra-template/template/src/App.js
function App() {
  const [players, setPlayers] = useState(null);
  const [currentMatchday, setCurrentMatchday] = useState(null);

  // Source:
  // - https://www.freecodecamp.org/news/how-to-access-secret-api-keys-using-netlify-functions-in-a-react-app/
  // - https://github.com/iamshaunjp/Complete-React-Tutorial/blob/lesson-17/dojo-blog/src/Home.js
  useEffect(() => {
    async function fetchData() {
      const url = '/.netlify/functions/airtable';

      try {
        const data = await fetch(url).then((res) => res.json());

        setPlayers(data);
        // Source: https://stackoverflow.com/a/44852681
        setCurrentMatchday(
          get(
            findLast(data, (o) => has(o, 'fields.Nome') && has(o, 'fields.Clube')),
            'fields.Jornada'
          )
        );
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);

  // console.log(players);
  // console.log(currentMatchday);

  return (
    <ChakraProvider resetCSS={true} theme={theme}>
      <Eleven data={players} />
    </ChakraProvider>
  );
}

export default App;
