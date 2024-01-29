import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../hook'
import { fetchUsers } from '../../redux/usersSlice'
import ItemUser from '../../components/ItemUser/ItemUser'


const Catalog = () => {

  const users = useAppSelector(state => state.users)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if(users.length === 0)dispatch(fetchUsers())
  }, [])

  return (
        <ul>
          {users?.map(user =>(
            <ItemUser id={user.id} name={user.name} key={user.id}/>
          ))}
        </ul>
  )
}

export default Catalog