import styled from 'styled-components';

const Card = styled.div`
max-height: 42vh;
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
  height: fi-content;
  max-height: 50vh;
  background-color: #fff;
  box-shadow: 1px 1px 10px 5px rgba(0, 0, 0, 0.05);
  @media screen and (max-width: 690px) {
  max-height: 78vh;
  }
`

export {Card,Modal}