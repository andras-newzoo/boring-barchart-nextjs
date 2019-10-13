
import React from 'react';
import { Modal } from '../../../components';
import { ModalContainer } from '../styles';
import { FlexContainer, TextSpan, fontWeightL } from '../../../styles';

const ModalComponent = ({
  openModal, handleClick, data
}) => {
  return ( 
    <Modal open={openModal} handleClick={handleClick}>
    <ModalContainer>
      <span className="icon" onClick={handleClick}>
        ×
      </span>
      {data.map(el => (
        <FlexContainer
          direction="column"
          align="flex-start"
          justify="flex-start"
        >
          <TextSpan paddingBottom={1} weight={fontWeightL}>
            {el.title}
          </TextSpan>
          {el.text.map(par => (
            <>
              <div>{par}</div>
              <br />
            </>
          ))}
          {el.gif && <img src={el.gif} alt={el.gifAlt} />}
        </FlexContainer>
      ))}
    </ModalContainer>
  </Modal>
   );
}
 
export default ModalComponent;