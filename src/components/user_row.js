import React from 'react'

const UserRow = ({ user, key, index }) => {
    return (
        <tr>
            <td>{index}</td>
            <td>{user.name.first}</td>
            <td>{user.name.last}</td>
            <td>{user.dob.age}</td>
            <td>{user.gender}</td>
            <td>{user.email}</td>
            <td>{user.nat}</td>
            <td>
                <img src={user.picture.medium} alt={user.name.first} className='me-4 image-fluid'/>
                <span>{user.name.first}</span>                
            </td>
        </tr>
    )
}

export default UserRow