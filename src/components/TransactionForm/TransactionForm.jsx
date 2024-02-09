import styles from "./TransactonForm.module.css";
import TransactionType from "../../constants/TransactionType";
import { useState } from "react";
import clsx from "clsx";

const TransactionForm = ({ defaultTransactionType }) => {
  const [transactionType, setTransactionType] = useState(
    defaultTransactionType
  );

  const handleTransactionTypeChange = (event) => {
    setTransactionType(event.target.value);
    alert("Yep");
  };

  return (
    <div>
      <form className={styles.transactionForm}>
        {/* Radio buttons */}
        <div className={styles.radioButtonsContainer}>
          <div className={styles.radioButtonWrapper}>
            <label className={styles.label} htmlFor="expense">
              <input
                className={styles.hiddenRadioButton}
                type="radio"
                name="transactionType"
                id="expense"
                value={TransactionType.Expense}
                checked={transactionType === TransactionType.Expense}
                onChange={handleTransactionTypeChange}
              />
              <span className={styles.customRadioButton}></span>
            </label>
            <span>Expense</span>
          </div>
          <div>
            <input
              className={styles.hiddenRadioButton}
              type="radio"
              name="transactionType"
              id="income"
              value={TransactionType.Income}
              checked={transactionType === TransactionType.Income}
              onChange={handleTransactionTypeChange}
            />
            <label htmlFor="income">Income</label>
          </div>
        </div>
        {/* Date and time */}
        <div className={styles.dateAndTimeContainer}>
          <div className={styles.fieldContainer}>
            <label>Date</label>
            <input type="date"></input>
          </div>
          <div className={styles.fieldContainer}>
            <label>Time</label>
            <input type="time"></input>
          </div>
        </div>
        {/* Sum */}
        <div className={styles.fieldContainer}>
          <label>Sum</label>
          <input className={styles.sharedFieldStyles} type="text"></input>
        </div>
        {/* Comment */}
        <div className={styles.fieldContainer}>
          <label>Comment</label>
          <textarea
            className={clsx(styles.textArea, styles.sharedFieldStyles)}
            name=""
            id=""
          ></textarea>
        </div>
        {/* Send */}
        <button className={styles.sendButton} type="submit">
          Send
        </button>
      </form>
    </div>
  );
};

export default TransactionForm;
