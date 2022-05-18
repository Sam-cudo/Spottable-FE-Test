import styled from 'styled-components';

const Card = styled.div`
max-height: 45vh;
display: flex;
flex-direction: column;
border-radius: 10px;
border: 1px solid #ccc;
overflow-y: auto;
::-webkit-scrollbar {
  width: 0px;
  background: transparent;
}
@media screen and (max-width: 690px) {
  max-height: 75vh;
  }
`
const Modal = styled(Card)`
  position: absolute; 
  z-index: 1;
  width: calc(100% - 22vmax);
  min-width: max-content;
  max-height: 52vh;
  background-color: #fff;
  box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0.05);
  @media screen and (max-width: 690px) {
  max-height: 78vh;
  }
`

export {Card,Modal}