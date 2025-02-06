import React from 'react'

function Contact(props) {
    return (
        
        <div className="contact-card">
            <img src={props.img} alt='crad'/>
            <h3>{props.name}</h3>
            <div className="info-group">
                <img src="./images/phone.png" alt='phone'/>
                <p>{props.phone}</p>
            </div>
            <div className="info-group">
                <img src="./images/mail.png" alt='info'/>
                <p>{props.email}</p>
            </div>
        </div>
    )
}

//Contact.propTypes = {}

export default Contact
