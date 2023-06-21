import React, { useState } from 'react'
import './App.css';
import { useEffect } from 'react';
function App() {
  const [column,setColumn]=useState([])
  const [records,setRecords]=useState([])

  useEffect(()=>{
    fetch('https://dummyjson.com/users')
    .then(res=>res.json())
    .then(data=>{
      setColumn(Object.keys(data.users[0]))
      setRecords(data.users)
    })
  },[])
  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            {column.map((c,i)=>(
              <th key={i}>{c}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {
            records.map((record,i)=>(
              <tr key={i}>
                <td>{record.id}</td>
                <td>{record.firstName}</td>
                <td>{record.lastName}</td>
                <td>{record.maidenName}</td>
                <td>{record.age}</td>
                <td>{record.gender}</td>
                <td>{record.email}</td>
                <td>{record.phone}</td>
                <td>{record.username}</td>
                <td>{record.password}</td>
                <td>{record.birthDate}</td>
                <td>{record.image}</td>
                <td>{record.bloodGroup}</td>
                <td>{record.height}</td>
                <td>{record.weight}</td>
                <td>{record.eyeColor}</td>
                <td>{record.hair.color}</td>
                <td>{record.hair.type}</td>
                <td>{record.domain}</td>
                <td>{record.ip}</td>
                <td>{record.address.address}</td>
                <td>{record.address.city}</td>
                <td>{record.address.coordinates.lat}</td>
                <td>{record.address.coordinates.lng}</td>
                <td>{record.address.postalCode}</td>
                <td>{record.address.state}</td>
                <td>{record.macAddress}</td>
                <td>{record.university}</td>
                <td>{record.bank.cardExpire}</td>
                <td>{record.bank.cardNumber}</td>
                <td>{record.bank.cardType}</td>
                <td>{record.bank.currency}</td>
                <td>{record.bank.iban}</td>
                <td>{record.company.address.address}</td>
                <td>{record.company.address.city}</td>
                <td>{record.company.address.coordinates.lat}</td>
                <td>{record.company.address.coordinates.lng}</td>
                <td>{record.company.address.postalCode}</td>
                <td>{record.company.address.state}</td>
                <td>{record.company.department}</td>
                <td>{record.company.name}</td>
                <td>{record.company.title}</td>
                <td>{record.ein}</td>
                <td>{record.ssn}</td>
                <td>{record.userAgent}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
}

export default App;
