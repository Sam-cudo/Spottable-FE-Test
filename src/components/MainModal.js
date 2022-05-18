import React from 'react';
import { Modal } from './styledComponents';
import { FaUserTie } from 'react-icons/fa';
import { MdOutlineSearchOff } from 'react-icons/md';
import '../styles/mainCard_mainModal.css';

export default function MainCard (props) {

    const {searchResult,refl,handleSelect,pointer,getInitials} = props;

    return(
        <Modal className='modal' ref={refl}>
          {
            //display "No result found" if search result is empty
            searchResult.length === 0 ?
              <div className='no-result'>
                <MdOutlineSearchOff style={{ fontSize: "3vmax" }} />
                <p>No result found</p>
              </div>
              :
              searchResult.map((item,i) => {
                return (
                  <div key={item.id} onClick={(e) => handleSelect(e,item)} tabIndex="0" className={pointer===i?'pointed':null}>
                    <div className='csm-list' style={{ cursor: "pointer", border: "none"}}>
                      <div className="csm-details">
                        <div className='csm-avatar'>
                          <p className="avatar-text">{getInitials(item.name)}</p>
                        </div>
                        <div className='csm-info'>
                          <h2>{item.name}</h2>
                          <div className='csm-descriptions'>
                            <div className='csm-post'>
                              <FaUserTie style={{ color: "#9d9d9d", fontSize: "1vmax" }} />
                              <h3>{item.post}</h3>
                            </div>
                            <h3>&bull; {item.email}</h3>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="border-bottom"></div>
                  </div>
                );
              })
          }
        </Modal>
    )
}
