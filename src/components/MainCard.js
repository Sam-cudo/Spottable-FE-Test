import React from 'react';
import { Card } from './styledComponents';
import { MdDelete} from 'react-icons/md';
import '../styles/mainCard_mainModal.css';

export default function MainModal (props) {

    const {csm,handleDelete,getInitials} = props;

    return(
        <Card >
        {/* list  of csm's with avatar, name ,post and delete button */}
        {csm.map((item) => {
          return (
            <div key={item.id}>
              <div className='csm-list' >
                <div className="csm-details">
                  <div className='csm-avatar'>
                    <p className="avatar-text">{getInitials(item.name)}</p>
                  </div>
                  <div className='csm-info'>
                    <h2>{item.name}</h2>
                    <h3>{item.post}</h3>
                  </div>
                </div>
                <div className='csm-delete'>
                  <MdDelete onClick={() => handleDelete(item.id)} style={{ color: "#1d31a1", fontSize: "2.5vmax", cursor: "pointer" }} />
                </div>
              </div>
            </div>
          );
        })}
      </Card>
    )
}