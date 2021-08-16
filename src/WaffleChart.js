import { scaleBand } from 'd3-scale';
import { range } from 'lodash/util';

import { WAFFLE_SIZE, WAFFLE_DIMENSIONS, TEAM_COLORS } from './constants';

// Accessors
const xyAccessor = (d) => d.fields['Jornada'];
const colorAccessor = (d) => d.fields['Clube'];

function WaffleChart({ data }) {
  // console.log(data);

  // More info: https://github.com/d3/d3-scale#band-scales
  const domain = range(WAFFLE_DIMENSIONS, 0, -1);
  // console.log(domain);
  const scale = scaleBand().domain(domain).range([0, WAFFLE_SIZE]).paddingInner(0.1);

  const cellSize = scale.bandwidth();
  // console.log(cellSize);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      overflow="auto"
      width={WAFFLE_SIZE}
      height={WAFFLE_SIZE}
    >
      {/* More info: https://github.com/airbnb/visx/blob/master/packages/visx-group/src/Group.tsx */}
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
