import styles from "./TransactonForm.module.css";
import TransactionType from "../../constants/TransactionType";
import { useState } from "react";
import clsx from "clsx";
import TransactionFormActionType from "../../constants/TransactionFormActionType";
import CurrencyType from "../../constants/CurrencyType";
import { CategoriesModal } from "../CategoriesModal/CategoriesModal";
import { Modal } from "../Modal/Modal";
import { Controller, useForm } from "react-hook-form";
import TransactionFormFields from "../../constants/TransactionFormFields";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import TimePicker from "rc-time-picker";
import { Icon } from "./TimePicker/Icon";
import moment from "moment";
import "rc-time-picker/assets/index.css";
import "./TimePicker/TimePicker.css";
import { useDispatch } from "react-redux";
import { createTransactionThunk } from "@/redux/transactions/operations";
// import PropTypes from "prop-types";

export const TransactionForm = ({
  actionType = TransactionFormActionType.Add,
  TransactionType: Type = TransactionType.Expense,
  Date: TransactionDate = new Date().toISOString().split("T")[0],
  Time = moment(),
  Category = { _id: "", categoryName: "" },
  Sum = "",
  Comment = "",
  currency = CurrencyType.UAH,
}) => {
  const dispatch = useDispatch();

  const [isModalWindowOpened, setIsModalWindowOpened] = useState(false);
  const [activeCategory, setActiveCategory] = useState(Category._id);

  const schema = yup.object({
    [TransactionFormFields.TransactionType]: yup.string().required(),
    [TransactionFormFields.Date]: yup.string().required(),
    [TransactionFormFields.Time]: yup.string().required(),
    [TransactionFormFields.Category]: yup.string().required(),
    [TransactionFormFields.Sum]: yup.string().required(),
    [TransactionFormFields.Comment]: yup.string().min(3),
  });

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    getValues,
    formState: { errors },
    control,
  } = useForm({
    defaultValues: {
      [TransactionFormFields.TransactionType]: Type,
      Date: TransactionDate,
      Time: typeof Time === "object" ? Time : moment(Time, "HH:mm"),
      Category: Category.categoryName,
      Sum,
      Comment,
    },
    resolver: yupResolver(schema),
  });

  const handleCategoryFieldOnClickOnFocus = () => {
    const categoryTextBox = document.getElementById("categoryTextBox");
    categoryTextBox.blur();

    setIsModalWindowOpened(true);
  };

  const convertData = (data) => {
    const time = data.Time.split(":").slice(0, 2).join(":");

    const convertedData = {
      type: data.TransactionType + "s",
      date: data.Date,
      time,
      category: activeCategory,
      sum: parseInt(data.Sum),
      comment: data.Comment,
    };

    return convertedData;
  };

  const handleTransactionFormOnSubmit = (data) => {
    // if (data.Category === "") {
    //   data.Category = "Different";
    // }

    //10:30:23 GMT+1
    const fullTime = data.Time.split(" ");
    data.Time = fullTime[fullTime.length - 2];

    if (actionType === TransactionFormActionType.Add) {
      alert("New transaction was added");

      data = convertData(data);
      console.log(data);
      dispatch(createTransactionThunk(data));
    } else if (actionType === TransactionFormActionType.Send) {
      alert("New transaction was sended");

      console.log(convertData(data));
    }
    reset();
    setValue(
      TransactionFormFields.Date,
      new Date().toISOString().split("T")[0]
    );
    setValue(TransactionFormFields.Time, moment());
  };

  const handleApproveCategory = (category) => {
    setIsModalWindowOpened(false);
    setActiveCategory(category.id);
    setValue(TransactionFormFields.Category, category.name);
  };

  return (
    <>
      <div className={styles.transactionFormContainer}>
        <form
          className={styles.transactionForm}
          onSubmit={handleSubmit(handleTransactionFormOnSubmit)}
        >
          {/* Radio buttons */}
          <div className={styles.radioButtonsContainer}>
            <label className={styles.label}>
              <input
                className={styles.hiddenRadioButton}
                type="radio"
                name={TransactionFormFields.TransactionType}
                value={TransactionType.Expense}
                {...register(TransactionFormFields.TransactionType)}
              />
              <span className={styles.customRadioButton}></span>
              <span>Expense</span>
            </label>
            <label className={styles.label}>
              <input
                className={styles.hiddenRadioButton}
                type="radio"
                name={TransactionFormFields.TransactionType}
                value={TransactionType.Income}
                {...register(TransactionFormFields.TransactionType)}
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
                {...register(TransactionFormFields.Date)}
              ></input>
            </div>
            <div className={styles.fieldContainer}>
              <label>Time</label>
              <Controller
                name={TransactionFormFields.Time}
                control={control}
                render={({ field }) => (
                  <TimePicker
                    inputIcon={<Icon />}
                    clearIcon={<Icon />}
                    value={field.value}
                    onChange={(value) => {
                      field.onChange(value);
                    }}
                  />
                )}
              />
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
              onClick={handleCategoryFieldOnClickOnFocus}
              onFocus={handleCategoryFieldOnClickOnFocus}
              {...register(TransactionFormFields.Category)}
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
              {...register(TransactionFormFields.Sum)}
            ></input>
            <span className={styles.currencyLabel}>{currency}</span>
          </div>
          {/* Sum Validation error */}
          {errors[TransactionFormFields.Sum] && (
            <p style={{ color: "red" }}>
              {errors[TransactionFormFields.Sum]?.message}
            </p>
          )}
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
                name="comment"
                id="commentTextBox"
                placeholder="Enter the text"
                {...register(TransactionFormFields.Comment)}
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
          transactionType={getValues(TransactionFormFields.TransactionType)}
          approveCategory={handleApproveCategory}
        />
      </Modal>
    </>
  );
};
