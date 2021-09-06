import { Grid, GridItem } from '@chakra-ui/react';
import { filter } from 'lodash/collection';

import { positions } from './enums';
import WaffleChart from './WaffleChart';

const elevenTemplateAreas = `
'. . . gr . . .'
'dd . dcd . dce . de'
'. md . mc . me .'
'ad . . ac . . ae'
`;

function Eleven({ data }) {
  // More info:
  // - https://chakra-ui.com/docs/layout/grid#props
  // - https://github.com/chakra-ui/chakra-ui/discussions/3098#discussioncomment-301572
  // - `rowGap`: https://chakra-ui.com/docs/theming/theme#spacing
  return (
    data && (
      <Grid templateAreas={elevenTemplateAreas} rowGap={4} justifyItems="center">
        <GridItem gridArea="gr">
          <WaffleChart data={filter(data, { fields: { Posição: positions.GR } })} />
        </GridItem>
        <GridItem gridArea="dd">
          <WaffleChart data={filter(data, { fields: { Posição: positions.DD } })} />
        </GridItem>
        <GridItem gridArea="dcd">
          <WaffleChart data={filter(data, { fields: { Posição: positions.DCD } })} />
        </GridItem>
        <GridItem gridArea="dce">
          <WaffleChart data={filter(data, { fields: { Posição: positions.DCE } })} />
        </GridItem>
        <GridItem gridArea="de">
          <WaffleChart data={filter(data, { fields: { Posição: positions.DE } })} />
        </GridItem>
        <GridItem gridArea="md">
          <WaffleChart data={filter(data, { fields: { Posição: positions.MD } })} />
        </GridItem>
        <GridItem gridArea="mc">
          <WaffleChart data={filter(data, { fields: { Posição: positions.MC } })} />
        </GridItem>
        <GridItem gridArea="me">
          <WaffleChart data={filter(data, { fields: { Posição: positions.ME } })} />
        </GridItem>
        <GridItem gridArea="ad">
          <WaffleChart data={filter(data, { fields: { Posição: positions.AD } })} />
        </GridItem>
        <GridItem gridArea="ac">
          <WaffleChart data={filter(data, { fields: { Posição: positions.AC } })} />
        </GridItem>
        <GridItem gridArea="ae">
          <WaffleChart data={filter(data, { fields: { Posição: positions.AE } })} />
        </GridItem>
      </Grid>
    )
  );
}

export default Eleven;
