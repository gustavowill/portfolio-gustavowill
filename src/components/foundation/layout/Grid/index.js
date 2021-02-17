import styled, { css } from 'styled-components';
import breakpointsMedia from '../../../../theme/utils/breakpointsMedia';
import propToStyle from '../../../../theme/utils/propToStyle';

function applyColumnValue() {
  return ({ value }) => {
    if (value === undefined) return undefined;
    if (typeof value === 'number') {
      return css`
        flex-basis: ${((100 * value) / 12).toFixed(4)}%;
      `;
    }
    if (typeof value === 'object') {
      return () => {
        const baseObject = {};
        const keysArray = Object.keys(value);
        keysArray.forEach((key) => {
          baseObject[key] = css`
            flex-basis: ${((100 * value) / 12).toFixed(4)}%;
          `;
        });
      };
    }
    return undefined;
  };
}

function applyColumnOffset() {
  return ({ value }) => {
    if (value === undefined) return undefined;
    if (typeof value === 'number') {
      return css`
        flex-basis: ${((100 * value) / 12).toFixed(4)}%;
      `;
    }
    if (typeof value === 'object') {
      return () => {
        const baseObject = {};
        const keysArray = Object.keys(value);
        keysArray.forEach((key) => {
          baseObject[key] = css`
            flex-basis: ${((100 * value) / 12).toFixed(4)}%;
          `;
        });
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
  display: flex;
  flex-wrap: nowrap;
  ${propToStyle('margin')}
  margin-left: -16px;
  margin-right: -16px;
`;

Grid.Column = styled.div`
  padding-left: 16px;
  padding-right: 16px;
  flex-basis: 0;
  flex-grow: 1;
  ${applyColumnValue()}
  ${applyColumnOffset()}
`;

export default Grid;
