import { Grid, GridItem } from '@chakra-ui/react';
import { filter } from 'lodash/collection';
import { findLast } from 'lodash/collection';
import { has, get } from 'lodash/object';
import { useEffect, useState } from 'react';

import { positions } from './enums';
import WaffleChart from './WaffleChart';

const elevenTemplateAreas = `
'. . . gr . . .'
'dd . dcd . dce . de'
'. md . mc . me .'
'ad . . ac . . ae'
`;

function Eleven() {
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
        // console.log(data);

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

  // More info:
  // - https://chakra-ui.com/docs/layout/grid#props
  // - https://github.com/chakra-ui/chakra-ui/discussions/3098#discussioncomment-301572
  // - `rowGap`: https://chakra-ui.com/docs/theming/theme#spacing
  return (
    players && (
      <Grid templateAreas={elevenTemplateAreas} rowGap={4} justifyItems="center">
        <GridItem gridArea="gr">
          <WaffleChart data={filter(players, { fields: { Posição: positions.GR } })} />
        </GridItem>
        <GridItem gridArea="dd">
          <WaffleChart data={filter(players, { fields: { Posição: positions.DD } })} />
        </GridItem>
        <GridItem gridArea="dcd">
          <WaffleChart data={filter(players, { fields: { Posição: positions.DCD } })} />
        </GridItem>
        <GridItem gridArea="dce">
          <WaffleChart data={filter(players, { fields: { Posição: positions.DCE } })} />
        </GridItem>
        <GridItem gridArea="de">
          <WaffleChart data={filter(players, { fields: { Posição: positions.DE } })} />
        </GridItem>
        <GridItem gridArea="md">
          <WaffleChart data={filter(players, { fields: { Posição: positions.MD } })} />
        </GridItem>
        <GridItem gridArea="mc">
          <WaffleChart data={filter(players, { fields: { Posição: positions.MC } })} />
        </GridItem>
        <GridItem gridArea="me">
          <WaffleChart data={filter(players, { fields: { Posição: positions.ME } })} />
        </GridItem>
        <GridItem gridArea="ad">
          <WaffleChart data={filter(players, { fields: { Posição: positions.AD } })} />
        </GridItem>
        <GridItem gridArea="ac">
          <WaffleChart data={filter(players, { fields: { Posição: positions.AC } })} />
        </GridItem>
        <GridItem gridArea="ae">
          <WaffleChart data={filter(players, { fields: { Posição: positions.AE } })} />
        </GridItem>
      </Grid>
    )
  );
}

export default Eleven;
