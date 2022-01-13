import React , { useState }from 'react'
import Header from '../../Components/Header'
import './Notifications.css'
import Notification from '../../Components/Notification'
import { MdDeleteSweep } from 'react-icons/md'

function Notifications() {
    const [read, setRead] = useState("unread")

    return (
        <>
        <Header />
        <div className='notifications'>
            <h3 style={{
                alignSelf:"center",
                justifySelf:"flex-start",
                gridColumn:"1/2",
                marginTop:"10px"}}>Notifications</h3>
            <MdDeleteSweep size={25} style={{
                gridColumn:"2/3",
                gridRow:"1/2",
                alignSelf:"center",
                justifySelf:"flex-end" }}/>
            <h6 style={{
                marginRight:"10px",
                marginTop:"10px",
                gridColumn:"span 2",
                alignSelf:"center",
                justifySelf:"flex-end"}} >Mark All as Read</h6>
                
            <div className="transactionsPage">
                <Notification 
                read={read}
                title={"Release of Cash Assistance"} 
                description={"Hello! Your cash assistance for 2nd Semester S.Y. 2020-2021 is now credited to your account. You can now request a withdrawal anytime."}
                dateTime={"Yesterday - 10:06AM"} />
                <Notification 
                title={"Release of Cash Assistance"} 
                description={"Hello! Your cash assistance for 2nd Semester S.Y. 2020-2021 is now credited to your account. You can now request a withdrawal anytime."}
                dateTime={"Yesterday - 10:06AM"} />
                <Notification 
                read={"read"}
                title={"Release of Cash Assistance"} 
                description={"Hello! Your cash assistance for 2nd Semester S.Y. 2020-2021 is now credited to your account. You can now request a withdrawal anytime."}
                dateTime={"Yesterday - 10:06AM"} />
                <Notification 
                read={"read"}
                title={"Release of Cash Assistance"} 
                description={"Hello! Your cash assistance for 2nd Semester S.Y. 2020-2021 is now credited to your account. You can now request a withdrawal anytime."}
                dateTime={"Yesterday - 10:06AM"} />
                <Notification 
                read={"read"}
                title={"Release of Cash Assistance"} 
                description={"Hello! Your cash assistance for 2nd Semester S.Y. 2020-2021 is now credited to your account. You can now request a withdrawal anytime."}
                dateTime={"Yesterday - 10:06AM"} />
                
            </div>
        </div>
        </>
    )
}

export default Notifications
