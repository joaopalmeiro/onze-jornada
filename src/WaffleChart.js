import { Tooltip } from '@chakra-ui/react';
import { Text, Stack, StackDivider } from '@chakra-ui/react';
import { scaleBand } from 'd3-scale';
import { truncate } from 'lodash/string';
import { range } from 'lodash/util';

import { WAFFLE_SIZE, WAFFLE_DIMENSIONS, TEAM_COLORS, DEFAULT_COLOR } from './constants';

// Accessors
const xyAccessor = (d) => d.fields['Jornada'];
const colorAccessor = (d) => d.fields['Clube'];
const labelAccessor = (d) => d.fields['Posição'];
const nameAccessor = (d) => d.fields['Nome'];

// Tooltip
const TooltipContent = (props) => (
  <Stack align="center" spacing={2} divider={<StackDivider borderColor={props.color} />}>
    <Text fontSize="md">Jornada {props.matchday}</Text>
    <Text fontSize="md">
      {props.name} ({props.team})
    </Text>
  </Stack>
);

function WaffleChart({ data }) {
  // console.log(data);

  // More info: https://github.com/d3/d3-scale#band-scales
  const domain = range(WAFFLE_DIMENSIONS, 0, -1);
  // console.log(domain);
  const scale = scaleBand().domain(domain).range([0, WAFFLE_SIZE]).paddingInner(0.1);

  const cellSize = scale.bandwidth();
  // console.log(cellSize);

  const posLabel = labelAccessor(data[0]);

  // More info:
  // - https://github.com/airbnb/visx/blob/master/packages/visx-group/src/Group.tsx
  // - https://chakra-ui.com/docs/features/css-variables#styling-non-chakra-components
  // - https://chakra-ui.com/docs/features/the-sx-prop#defining-css-custom-properties
  // - https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/text-anchor
  // - https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/dominant-baseline
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      overflow="auto"
      width={WAFFLE_SIZE}
      height={WAFFLE_SIZE}
    >
      <text
        x={cellSize / 2}
        y={cellSize}
        // y={cellSize / 2}
        textAnchor="middle"
        // dominantBaseline="middle"
        fontFamily="var(--chakra-fonts-mono)"
        fontSize="var(--chakra-fontSizes-xs)"
      >
        {truncate(posLabel, { length: 2, omission: '' })}
      </text>
      <g>
        {data.map((d) => {
          // More info:
          // - https://eslint-plugin-es.mysticatea.dev/rules/no-nullish-coalescing-operators.html
          // - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator
          const color = TEAM_COLORS[colorAccessor(d)] || DEFAULT_COLOR;

          // More info:
          // - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder
          // - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_OR
          const posValue = xyAccessor(d);
          const xValue = posValue % WAFFLE_DIMENSIONS || WAFFLE_DIMENSIONS;
          const yValue = Math.ceil(posValue / WAFFLE_DIMENSIONS);
          // console.log(posValue, xValue);
          // console.log(posValue, yValue);

          return (
            // More info:
            // - https://chakra-ui.com/docs/overlay/tooltip
            // - https://chakra-ui.com/docs/overlay/popover
            // - https://chakra-ui.com/docs/theming/theme
            // - https://github.com/chakra-ui/chakra-ui/blob/main/packages/theme/src/components/tooltip.ts
            // - https://chakra-ui.com/docs/features/style-props#borders
            color !== DEFAULT_COLOR ? (
              <Tooltip
                key={d.id}
                hasArrow
                // label={`J${posValue}: ${nameAccessor(d)} (${colorAccessor(d)})`}
                label={
                  <TooltipContent
                    matchday={posValue}
                    name={nameAccessor(d)}
                    team={colorAccessor(d)}
                    color={color}
                  />
                }
                aria-label={`Jornada ${posValue}: ${nameAccessor(d)} (${colorAccessor(d)})`}
                closeOnClick={true}
                // defaultIsOpen={true}
                colorMode="dark"
                bg="white"
                border="1px"
                borderColor="gray.900"
              >
                <rect
                  x={scale(xValue)}
                  y={scale(yValue)}
                  width={cellSize}
                  height={cellSize}
                  fill={color}
                  // cursor="pointer"
                  cursor="context-menu"
                />
              </Tooltip>
            ) : (
              <rect
                key={d.id}
                x={scale(xValue)}
                y={scale(yValue)}
                width={cellSize}
                height={cellSize}
                fill={color}
              />
            )
          );
        })}
      </g>
    </svg>
  );
}

export default WaffleChart;
