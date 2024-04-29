import React, { useState } from 'react';
import MiniDrawer from '../assets/components/sidebar';


function budget() {
  const [totalBudget, setTotalBudget] = useState(0);
  const [bucketValues, setBucketValues] = useState({
    "Stocks": 0,
    "Crypto": 0,
    "ETFs": 0,
    "Index Funds": 0,
    "Bonds": 0,
    "Mutual Funds": 0,
    "Roth IRA": 0,
    "401 k": 0,
    "Travel": 0,
    "Miscellaneous": 0
  });

  const updateBucketValues = () => {
    const total = parseFloat(totalBudget);
    const numBuckets = 10;
    const equalAmount = (total * 1) / numBuckets;
    const updatedBuckets = {};
    for (const key in bucketValues) {
      updatedBuckets[key] = equalAmount.toFixed(1);
    }
    setBucketValues(updatedBuckets);
  };

  const handleTotalBudgetChange = (e) => {
    const { value } = e.target;
    setTotalBudget(value);
    updateBucketValues();
  };

  return (
    <box>
      <MiniDrawer/>
    <form>
      <label>
        Total Budget:
        <input
          type="number"
          value={totalBudget}
          onChange={handleTotalBudgetChange}
        />
      </label>
      {Object.keys(bucketValues).map((category) => (
        <div key={category}>
          <label>
            {category}:
            <input
              type="text"
              readOnly
              value={bucketValues[category]}
            />
          </label>
        </div>
      ))}
    </form>
    </box>
  );
}

export default budget;
