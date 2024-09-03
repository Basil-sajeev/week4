// pages/index.tsx

import { useEffect, useState } from 'react';
import GSTVerification from './components/GSTVerification';
import AadhaarVerification from './components/AadhaarVerification';
import PANVerification from './components/PANVerification';
import PhoneVerification from './components/phoneVerfication';
import PincodeVerification from './components/PincodeVerification';
import EmailVerification from './components/EmailVerification';
import  './globals.module.css'
import styles from './components/EmailVerification.module.css';
import Name from './components/Name';
import Birth from './components/birth';
import BankAccountVerification from './components/BankAccountVerification';

interface User {
  _id: string;
  name: string;
  email: string;
}

const HomePage = () => {
  const [users, setUsers] = useState<User[]>([]);
  

 

  return (
    <div id='mainn'>
      <div className={styles.m12}><Name /></div>
      <div className={styles.m12}><EmailVerification/></div>
      <div className={styles.m12}><PhoneVerification/></div>
      <div className={styles.m12}><AadhaarVerification/></div>
      <div className={styles.m12}><Birth/></div>

      <div className={styles.m12}><GSTVerification/></div>
      <div className={styles.m12}><PANVerification/></div>
      <div className={styles.m12}><PincodeVerification/></div>
      <div className={styles.m12}><BankAccountVerification/></div>

     

    </div>
  );
};

export default HomePage;
