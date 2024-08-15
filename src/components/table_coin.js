import React from 'react'
import UserRow from './user_row'

const titles = ['#', 'Nombre', 'Apellido', 'Edad', 'Genero', 'Email', 'Nacionalidad', 'Foto']

const TableCoin = ({ users }) => {
    return (
        <table className='table table-dark mt-4 table-hover'>
            <thead>
                <tr>
                    {
                        titles.map(title => (
                            <td>{title}</td>
                        ))
                    }
                </tr>
            </thead>
            <tbody>
                {users.map((user, index) => (
                    <UserRow user={user} key={index+2} index={index + 1} />
                ))}
            </tbody>
        </table>
    )
}

export default TableCoin