import React from 'react'
import './Notification.css'
import { GoPrimitiveDot } from 'react-icons/go'

function Notification({title, description, dateTime, read="unread"}) {
    return (
        <>
        <div className='notification'>
            <span className={read} style={{
                gridColumn:"1/2",
                gridRow:"1/3",
                alignSelf:"center",
                justifySelf:"center"}}><GoPrimitiveDot /> </span>
            <h4 style={{
                gridColumn:"2/3",
                whiteSpace:"nowrap",
                overflow:"hidden",
                textOverflow:"ellipsis"}}>{title}</h4>
            <p style={{
                color:"#7c7e8b",
                gridColumn:"3/4",
                fontSize:".85rem",
                alignSelf:"center",
                justifySelf:"flex-end"}}>{dateTime}</p>
            <p className={read} style={{
                fontSize:".8rem",
                maxHeight:"55px",
                maxWidth:"296px",
                gridColumn:"2/4",
                whiteSpace:"normal",
                overflow:"hidden",
                textOverflow:"ellipsis",
                textAlign:"left"}}>{description}</p>
        </div>
        <hr style={{
            margin:"10px 0",
            backgroundColor:"#F1F3F6", 
            border:"1px #F1F3F6 solid"}} />
        </>
        
    )
}

export default Notification
