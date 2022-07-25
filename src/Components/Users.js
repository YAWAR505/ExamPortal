import React, { useEffect } from 'react'
import BaseUrl from '../utils/BaseUrl';
const Users = () => {
    useEffect(() => {
        const result = BaseUrl.get("/admin/users")
        console.log(result);
    }, []);
    return (
        <div>
            Users
        </div>
    )
}

export default Users
