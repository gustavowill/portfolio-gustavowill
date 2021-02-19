import styled, { css } from 'styled-components';
import breakpointsMedia from '../../../../theme/utils/breakpointsMedia';
import propToStyle from '../../../../theme/utils/propToStyle';

function applyColumnValue() {
  return ({ value }) => {
    if (value === undefined) return undefined;
    if (typeof value === 'number') {
      return css`
        flex: 0 0 ${((100 * value) / 12).toFixed(4)}%;
      `;
    }
    if (typeof value === 'object') {
      return () => {
        const baseObject = {};
        const keysArray = Object.keys(value);
        keysArray.forEach((key) => {
          baseObject[key] = css`
            flex: 0 0 ${((100 * value[key]) / 12).toFixed(4)}%;
          `;
        });
        return breakpointsMedia(baseObject);
      };
    }
    return undefined;
  };
}

function applyColumnOffset() {
  return ({ offset }) => {
    if (offset === undefined) return undefined;
    if (typeof offset === 'number') {
      return css`
        margin-left: ${((100 * offset) / 12).toFixed(4)}%;
      `;
    }
    if (typeof offset === 'object') {
      return () => {
        const baseObject = {};
        const keysArray = Object.keys(offset);
        keysArray.forEach((key) => {
          baseObject[key] = css`
            margin-left: ${((100 * offset) / 12).toFixed(4)}%;
          `;
        });
        return breakpointsMedia(baseObject);
      };
    }
    return undefined;
  };
}

const gridBreakpoints = {
  sm: css`
    max-width: 576px;
  `,
  md: css`
    max-width: 768px;
    padding: 0 16px;
  `,
  lg: css`
    max-width: 1160px;
  `,
  xl: css`
    max-width: 1222px;
  `,
};

const Grid = styled.div`
  width: 100%;
  padding-left: 28px;
  padding-right: 28px;
  margin-left: auto;
  margin-right: auto;
  max-width: initial;
  ${breakpointsMedia(gridBreakpoints)}
`;

Grid.Row = styled.div`
  flex-wrap: wrap;
  display: flex;
  ${propToStyle('margin')}
  margin-left: -16px;
  margin-right: -16px;
`;

Grid.Column = styled.div`
  padding-left: 16px;
  padding-right: 16px;
  flex-basis: 0;
  flex-grow: 1;
  ${applyColumnOffset()}
  ${applyColumnValue()}
`;

export default Grid;
