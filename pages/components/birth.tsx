// components/EmailVerification.tsx

import React, { useState } from 'react';
import axios from 'axios';
import styles from './EmailVerification.module.css'

const Birth: React.FC = () => {




  return (
    <main>
    <div className={styles.h1}>

      <p>Date of Birth</p>
      <input 
        className={styles.in}
        type="date"
        placeholder="Enter your Date of Birth"
      />
    </div>
    </main>
  );
};

export default Birth;