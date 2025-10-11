import React, { useContext } from 'react'
import UserContext from '../context/userContext'

const Profile = () => {
    const {user} = useContext(UserContext)
    console.log(user)
    if(!user) return <div>Please Login.</div>
    return <div>Welcome {user.username || "nothing"}</div>
}

export default Profile