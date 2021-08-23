import { scaleBand } from 'd3-scale';
import { truncate } from 'lodash/string';
import { range } from 'lodash/util';

import { WAFFLE_SIZE, WAFFLE_DIMENSIONS, TEAM_COLORS } from './constants';

// Accessors
const xyAccessor = (d) => d.fields['Jornada'];
const colorAccessor = (d) => d.fields['Clube'];
const labelAccessor = (d) => d.fields['Posição'];

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
          const color = TEAM_COLORS[colorAccessor(d)] || 'lightgray';

          // More info:
          // - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder
          // - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_OR
          const posValue = xyAccessor(d);
          const xValue = posValue % WAFFLE_DIMENSIONS || WAFFLE_DIMENSIONS;
          const yValue = Math.ceil(posValue / WAFFLE_DIMENSIONS);
          // console.log(posValue, xValue);
          // console.log(posValue, yValue);

          return (
            <rect
              key={d.id}
              x={scale(xValue)}
              y={scale(yValue)}
              width={cellSize}
              height={cellSize}
              fill={color}
            />
          );
        })}
      </g>
    </svg>
  );
}

export default WaffleChart;
