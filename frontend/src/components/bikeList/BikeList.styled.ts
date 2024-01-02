import styled from 'styled-components';

export const StyledBikeList = styled.ul`
  list-style-type: none;
  padding: 9px 9px 9px 12px; 
  margin: 0; 
`;

export const StyledBike = styled.li<{
  $status?: string;
}>`
background: #E8E8E8;
padding: 12px 12px 12px 18px;
margin-bottom: 12px;
border-radius: 10px;
border: 1px solid #6FCF97;

position: relative;
${(props) =>
    props.$status === 'Available' &&
    `
          border: 2px solid #6FCF97;
    `};
${(props) =>
    props.$status === 'Busy' &&
    `
          border: 2px solid #F2994A;
    `};
${(props) =>
    props.$status === 'Unavailable' &&
    `
          border: 2px solid #EB5757;
    `};
`;
export const Title = styled.div<{
  $status?: string;
}>`
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: left;
  
  ${(props) =>
    props.$status === 'Unavailable' &&
    `
    opacity: 0.5;
    `};
`;

export const ID = styled.div<{
  $status?: string;
}>`
font-size: 8px;
font-weight: 400;
line-height: 13px;
letter-spacing: 0em;
text-align: left;
color: #717171;
${(props) =>
    props.$status === 'Unavailable' &&
    `
    opacity: 0.5;
    `};
`;

export const StatusAndPrice = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin-top: 5px;
`;

export const Price = styled.span<{
  $status?: string;
}>`
font-size: 24px;
font-weight: 400;
line-height: 38px;
letter-spacing: 0em;
text-align: left;
${(props) =>
    props.$status === 'Unavailable' &&
    `
      opacity: 0.5;
    `};
`;

export const Label = styled.label`
font-size: 14px;
font-weight: 400;
line-height: 22px;
letter-spacing: 0em;
text-align: left;
`;

export const Select = styled.select`
background-color: #E8E8E8;
font-size: 14px;
font-weight: 400;
line-height: 22px;
letter-spacing: 0em;
text-align: right;
border: none;
width: auto;
`;

export const DeleteButton = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
 background-color: #E8E8E8;
  color: #000000;
  border: none;
  padding: 4px 8px;
  cursor: pointer;
  font-size: 14px;
  border-radius: 4px;

  &:hover {
    background-color: #dbd9d9;
  }
`;