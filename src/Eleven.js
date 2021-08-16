import { filter } from 'lodash/collection';
import { useEffect, useState } from 'react';

import { positions } from './enums';
import WaffleChart from './WaffleChart';

function Eleven() {
  const [players, setPlayers] = useState(null);

  // Source:
  // - https://www.freecodecamp.org/news/how-to-access-secret-api-keys-using-netlify-functions-in-a-react-app/
  // - https://github.com/iamshaunjp/Complete-React-Tutorial/blob/lesson-17/dojo-blog/src/Home.js
  useEffect(() => {
    async function fetchData() {
      const url = '/.netlify/functions/airtable';

      try {
        const data = await fetch(url).then((res) => res.json());
        // console.log(data);
        setPlayers(data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);

  // console.log(players);

  return (
    players && (
      <>
        <WaffleChart data={filter(players, { fields: { Posição: positions.GR } })} />
        <WaffleChart data={filter(players, { fields: { Posição: positions.DD } })} />
        <WaffleChart data={filter(players, { fields: { Posição: positions.DCD } })} />
        <WaffleChart data={filter(players, { fields: { Posição: positions.DCE } })} />
        <WaffleChart data={filter(players, { fields: { Posição: positions.DE } })} />
        <WaffleChart data={filter(players, { fields: { Posição: positions.MD } })} />
        <WaffleChart data={filter(players, { fields: { Posição: positions.MC } })} />
        <WaffleChart data={filter(players, { fields: { Posição: positions.ME } })} />
        <WaffleChart data={filter(players, { fields: { Posição: positions.AD } })} />
        <WaffleChart data={filter(players, { fields: { Posição: positions.AC } })} />
        <WaffleChart data={filter(players, { fields: { Posição: positions.AE } })} />
      </>
    )
  );
}

export default Eleven;
