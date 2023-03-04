import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  //const [packageData, setPackageData] = useState(null);

  // axios.post('/api/insert-users').then((res)=>{
        
  //       const data = {
  //         firstName:'bharath', lastName:'g', email:'b@gmail.com'
  //       }

  //       res.status(201).send(data);
  // })

//   const data = {name:'brindha',email:'xyaa'}
//   axios.post('/users', data , { timeout: 5000 })
//   .then((response) => {
//     console.log(response.data);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

//   axios.get('/').then((res)=>{
//   })

//   return (
//     <div>
//       <h1>hello</h1>
//     </div>
//   );
// }

const [users, setUsers] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const createUsers = async () => {
    try{
    const response = await axios.post('/users',{name:'bharath',email:'b@gmail.com',phone:1234567890},(req,res)=>{
      console.log(res);
      setEmail(res.email);
      setName(res.name);
      setPhone(res.phone);
    });
  }catch(e){
    console.log(e);
  }
  };

  // const fetchUsers = async () => {
  //   const response = await axios.get('http://localhost:5000/users');
  //   setUsers(response.data);
  // };

  createUsers().then().catch((e)=>{console.log(e)});

  return(
    <div>
    <div><h1>{name}</h1></div>
    <div><h1>{email}</h1></div>
    <div><h1>{phone}</h1></div>
    </div>
  )


  const handleSubmit = async (event) => {
    event.preventDefault();
  }
}





export default App;
