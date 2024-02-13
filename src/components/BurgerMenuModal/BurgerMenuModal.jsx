import styles from "./BurgerMenuModal.module.css"
import CloseIcon from "@/assets/icons/Close.svg?react"
import { UserBarBtnBox } from "../UserBarBtnBox/UserBarBtnBox"
import { useNavigate } from "react-router-dom"
import { Modal } from "../Modal/Modal"
import { useState } from "react"
import { SureLogOutModal } from "../SureLogOutModal/SureLogOutModal"
import { UserSetsModal } from "../UserSetsModal/UserSetsModal"

export const BurgerMenuModal = ({
  isOpened,
  onClose,
  setIsVisibleProfile,
  setIsVisibleLogout,
}) => {
  const navigate = useNavigate()

  const handleNavigate = to => {
    onClose(true)
    navigate(to)
  }
  if (!isOpened) return null
  return (
    <>
      <div className={styles.specialBox}>
        <div className={styles.backDrop} onClick={() => onClose(true)}></div>
        <div
          className={isOpened ? `${styles.wrapperModal} ${styles.active}` : ""}
        >
          <UserBarBtnBox
            onClose={onClose}
            setIsVisibleLogout={setIsVisibleLogout}
            setIsVisibleProfile={setIsVisibleProfile}
          />
          <button className={styles.closeButton} onClick={() => onClose(true)}>
            <CloseIcon className={styles.closeSvg} />
          </button>
          <ul className={styles.buttonList}>
            <button
              className={styles.expenseButton}
              onClick={() => handleNavigate("/transactions/history/expenses")}
            >
              All Expense
            </button>
            <button
              className={styles.incomeButton}
              onClick={() => handleNavigate("/transactions/history/incomes")}
            >
              All Income
            </button>
          </ul>
        </div>
      </div>
    </>
  )
}
