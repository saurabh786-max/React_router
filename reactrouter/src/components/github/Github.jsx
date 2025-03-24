import React, { useState } from 'react';
import { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';

const Github = () => {
//     const [data, setData] = useState([]);
//     useEffect(() => {
//     fetch('https://api.github.com/users/hiteshchoudhary')
//     .then(response=> response.json())
//     .then(data=>{
//         console.log(data);
//         setData(data);
//     })
//    }, [])
const data =useLoaderData() 
   
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
      <h1>Github Followers: {data.followers}</h1>
      <img src={data.avatar_url} alt="" width={300} />
    </div>
  );
};

export default Github;

export const githubInfoLoader = async()=>{
    const response = await fetch('https://api.github.com/users/hiteshchoudhary')
    return response.json();
}