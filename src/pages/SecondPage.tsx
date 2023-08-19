// src/pages/SecondPage.tsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Alert, Button } from '@mui/material';
import Component1 from '../components/Component1';
import Component2 from '../components/Component2';

const Data = [
  {
    department: "customer_service",
    sub_departments: ["support", "customer_success"],
  },
  {
    department: "design",
    sub_departments: ["graphic_design", "product_design", "web_design"],
  },
  {
    department: "Agriculture & Fishing",
    sub_departments: ["Agriculture", "Crops" , "Farming Animal & Livestock" , "Fishery & Aquaculture"],
  },
  {
    department: "Business Service",
    sub_departments: ["Auctions", "Accounting", "Call Center & Bussiness Centers"],
  },
];



function SecondPage() {
  const history = useNavigate();
  const [userData, setUserData] = useState<any | null>(null);

  useEffect(() => {
    const storedData = localStorage.getItem('userData');
    if (!storedData) {
      history('/');
    } else {
      setUserData(JSON.parse(storedData));
    }
  }, [history]);

  const handleLogout = () => {
    localStorage.removeItem('userData');
    history('/');
  };

  return (
    <div className="p-10  bg-slate-900">
      {userData ? (
        <div>
          <div className='mb-10 p-4'>
          <h1 className="text-2xl font-bold mb-4">User Details</h1>
          <p className='p-2'>Name: {userData.name}</p>
          <p className='p-2'>Phone Number: {userData.phoneNumber}</p>
          <p className='p-2 mb-2'>Email: {userData.email}</p>
          <Button variant="contained" color="primary" onClick={handleLogout}>
            Logout
          </Button>
          </div>

          <Component1 />
          <Component2 data = {Data} />
        
        </div>
      ) : (
        <Alert severity="warning">Please enter your details first.</Alert>
      )}
    </div>
  );
}

export default SecondPage;
