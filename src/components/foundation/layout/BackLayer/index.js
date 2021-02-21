/* eslint-disable indent */
import styled, { css } from 'styled-components';
import breakpointsMedia, { breakpointsMediaYAxis } from '../../../../theme/utils/breakpointsMedia';

const BackLayer = styled.div`
  ${breakpointsMedia({
    xs: css`
      ${breakpointsMediaYAxis({
        yxs: { minHeight: '800vh' },
        ysm: { minHeight: '550vh' },
        ymd: { minHeight: '390vh' },
        ylg: { minHeight: '320vh' },
        yxl: { minHeight: '280vh' },
       })}
    `,
    md: css`
      ${breakpointsMediaYAxis({
        yxs: { minHeight: '830vh' },
        ysm: { minHeight: '410vh' },
        ymd: { minHeight: '300vh' },
        ylg: { minHeight: '260vh' },
        yxl: { minHeight: '235vh' },
       })}
    `,
  })}
`;

BackLayer.Container = styled.div`
  position: sticky;
  top: 8vh;
`;

export default BackLayer;
