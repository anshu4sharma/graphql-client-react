import React, { useEffect, useState } from 'react'
import { useQuery, gql } from '@apollo/client'
import { LOAD_USERS } from '../GraphQl/Query'
const GetUser = () => {
    const { error, loading, data } = useQuery(LOAD_USERS)
    const [users, SetUsers] = useState([])
    useEffect(() => {
        if (!loading) {
            SetUsers(data.getAllUser);
        }
    }, [data])
    if (error) {
        return <h1>Am error occured</h1>
    }
    return (
        <div>
            {users.length > 0 ? users.map((user, index) => {
                return <div key={index}>
                    {user.name}
                    {user.body}
                    {user.email}
                </div>
            })
                :
                <p>Loading</p>

            }
        </div>
    )
}

export default GetUser