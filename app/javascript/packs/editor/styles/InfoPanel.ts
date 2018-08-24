import styledComponents from 'styled-components';
const INTERVAL = '12px';
const BASE = '#141B23';
const PRIMARY = '#3B72A1';
export const main = styledComponents.div`
  width: 120px;
  height: 100%;
  background: #EBF1F6;
  margin-right: solod 1px #BDBDBD;
`;

export const title = styledComponents.div`
  padding: 6px ${INTERVAL};
  border-bottom: solid 1px #7E6C62;
  font-size: 16px;
  color: ${BASE};
  margin-bottom: 8px;
`;

export const piece = styledComponents.button`
  width: 100%;
  padding: 8px ${INTERVAL};
  font-size: 16px;
  text-align: left;
  color: ${(props: {primary: boolean}) => props.primary ? '#fff' : BASE};
  background: ${(props: {primary: boolean}) => props.primary ? PRIMARY : 'inherit'}
`;

export const pieceList = styledComponents.div`
`;
