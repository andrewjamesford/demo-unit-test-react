import React from 'react';
import { useState } from 'react';
import styles from './App.module.css';
import isFreeShipping from './utils';

function App() {
  const [totalPurchase, setTotalPurchase] = useState(0);

  const handleInputChange = (event) => {
    const enteredValue = event.target.value;
    console.log(enteredValue);
    setTotalPurchase(enteredValue);
  };

  return (
    <div className={styles.app}>
      <header className={styles.appHeader}>Unit Test React</header>
      <main className={styles.main}>
        <input
          type="number"
          onChange={handleInputChange}
          value={totalPurchase}
        />

        {isFreeShipping(totalPurchase) ? (
          <p>Free Shipping</p>
        ) : (
          <p>Shipping $10</p>
        )}
      </main>
    </div>
  );
}

export default App;
