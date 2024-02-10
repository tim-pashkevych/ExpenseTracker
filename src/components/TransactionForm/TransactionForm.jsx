import styles from "./TransactonForm.module.css";
import TransactionType from "../../constants/TransactionType";
import { useState } from "react";
import clsx from "clsx";
import TransactionFormActionType from "../../constants/TransactionFormActionType";
import CurrencyType from "../../constants/CurrencyType";
import { CategoriesModal } from "../CategoriesModal/CategoriesModal";
import { Modal } from "../Modal/Modal";

export const TransactionForm = ({
  actionType = TransactionFormActionType.Add,
  formData = {
    TransactionType: TransactionType.Expense,
    Date: new Date().toISOString().split("T")[0],
    Time: "00:00:00",
    Category: "",
    Sum: "",
    Comment: "",
  },
  currency = CurrencyType.UAH,
}) => {
  const [isModalWindowOpened, setIsModalWindowOpened] = useState(false);

  const [transactionType, setTransactionType] = useState(
    formData.TransactionType
  );
  const [transactionDate, setTransactionDate] = useState(formData.Date);
  const [transactionTime, setTransactionTime] = useState(formData.Time);
  const [transactionCategory, setTransactionCategory] = useState(
    formData.Category
  );
  const [transactionSum, setTransactionSum] = useState(formData.Sum);
  const [transactionComment, setTransactionComment] = useState(
    formData.Comment
  );

  const handleTransactionTypeChange = (event) => {
    setTransactionType(event.target.value);
  };

  const handleTransactionDateOnChange = (event) => {
    setTransactionDate(event.target.value);
  };

  const handleTransactionTimeOnChange = (event) => {
    setTransactionTime(event.target.value);
  };

  const handleCategoryFieldOnClickOnFocus = () => {
    const categoryTextBox = document.getElementById("categoryTextBox");
    categoryTextBox.blur();

    setIsModalWindowOpened(true);
  };

  const handleCategoryOnChange = (event) => {
    setTransactionCategory(event.target.value);
  };

  const handleSumOnChange = (event) => {
    setTransactionSum(event.target.value);
  };

  const handleCommentOnChange = (event) => {
    setTransactionComment(event.target.value);
  };

  const handleTransactionFormOnSubmit = (event) => {
    if (actionType === TransactionFormActionType.Add) {
      alert("New transaction was added");
    } else if (actionType === TransactionFormActionType.Send) {
      alert("New transaction was sended");
    }
    event.preventDefault();

    const formdata = {
      TransactionType: transactionType,
      Date: transactionDate,
      Time: transactionTime,
      Category: transactionCategory,
      Sum: transactionSum,
      Comment: transactionComment,
    };

    console.log(formdata);
  };

  const handleApproveCategory = (category) => {
    setIsModalWindowOpened(false);
    setTransactionCategory(category.name);
  };

  return (
    <>
      <div className={styles.transactionFormContainer}>
        <form
          className={styles.transactionForm}
          onSubmit={handleTransactionFormOnSubmit}
        >
          {/* Radio buttons */}
          <div className={styles.radioButtonsContainer}>
            <label className={styles.label}>
              <input
                className={styles.hiddenRadioButton}
                type="radio"
                name="transactionType"
                value={TransactionType.Expense}
                checked={transactionType === TransactionType.Expense}
                onChange={handleTransactionTypeChange}
              />
              <span className={styles.customRadioButton}></span>
              <span>Expense</span>
            </label>
            <label className={styles.label}>
              <input
                className={styles.hiddenRadioButton}
                type="radio"
                name="transactionType"
                value={TransactionType.Income}
                checked={transactionType === TransactionType.Income}
                onChange={handleTransactionTypeChange}
              />
              <span className={styles.customRadioButton}></span>
              <span>Income</span>
            </label>
          </div>
          {/* Date and time */}
          <div className={styles.dateAndTimeContainer}>
            <div className={styles.fieldContainer}>
              <label>Date</label>
              <input
                type="date"
                value={transactionDate}
                onChange={handleTransactionDateOnChange}
              ></input>
            </div>
            <div className={styles.fieldContainer}>
              <label>Time</label>
              <input
                className={clsx(styles.timeField, styles.timePicker)}
                type="time"
                value={transactionTime}
                onChange={handleTransactionTimeOnChange}
              ></input>
            </div>
          </div>
          {/* Category */}
          <div className={styles.fieldContainer}>
            <label>Category</label>
            <input
              className={clsx(styles.sharedTextFieldStyles, styles.sumField)}
              type="text"
              placeholder="Different"
              id="categoryTextBox"
              value={transactionCategory}
              onClick={handleCategoryFieldOnClickOnFocus}
              onFocus={handleCategoryFieldOnClickOnFocus}
              onChange={handleCategoryOnChange}
            ></input>
          </div>
          {/* Sum */}
          <div className={styles.fieldContainer}>
            <label>Sum</label>
            <input
              className={clsx(styles.sharedTextFieldStyles, styles.sumField)}
              type="text"
              pattern="[0-9]*"
              placeholder="Enter the sum"
              value={transactionSum}
              onChange={handleSumOnChange}
            ></input>
            <span className={styles.currencyLabel}>{currency}</span>
          </div>
          {/* Comment */}
          <div className={styles.fieldContainer}>
            <label>Comment</label>
            <div
              className={clsx(styles.commentField, styles.commentFieldWrapper)}
            >
              <textarea
                className={clsx(
                  styles.textArea,
                  styles.sharedTextFieldStyles,
                  styles.commentField
                )}
                name=""
                id=""
                placeholder="Enter the text"
                value={transactionComment}
                onChange={handleCommentOnChange}
              ></textarea>
            </div>
          </div>
          {/* Send */}
          <button className={styles.sendButton} type="submit">
            {actionType}
          </button>
        </form>
      </div>
      <Modal
        isOpened={isModalWindowOpened}
        onClose={() => setIsModalWindowOpened(false)}
      >
        <CategoriesModal
          transactionType={transactionType}
          approveCategory={handleApproveCategory}
        />
      </Modal>
    </>
  );
};

export default TransactionForm;
