import { useEffect, useState } from 'react';

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

  console.log(players);

  return <div>Hello, World!</div>;
}

export default Eleven;
