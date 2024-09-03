// components/EmailVerification.tsx

import React, { useState } from 'react';
import axios from 'axios';
import styles from './birth.module.css'

interface NameProps {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  }

const Name: React.FC = (NameProps) => {




  return (
    <main>
    <div className={styles.h1}>
      <h1>Registration</h1>
      <p>Name</p>
      <input 
        className={styles.in}
        type="text"
        placeholder="Enter your Name"
      />
    </div>
    </main>
  );
};

export default Name;