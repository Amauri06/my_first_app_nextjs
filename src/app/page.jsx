import Users from '@/components/Users';
import React from 'react'



async function HomePage() {

  const res =  await fetch(`https://reqres.in/api/users`)
  const users = await res.json()

  const {data} = users;

 

  return (

      <ul className='list-group'>
         {data.map(user =>(
            <Users key={user.id} user={user}/>
         ))}
      </ul>
   
  )
}

export default HomePage;