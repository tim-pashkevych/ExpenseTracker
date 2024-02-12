import React, { useState } from "react"
import styles from "./UserBarBtn.module.css"
import DropIcon from "@/assets/icons/DropIcon.svg?react"
import UserBarIcon from "@/assets/icons/UserBarIcon.svg?react"
import UserBarLogOutIcon from "@/assets/icons/UserBarLogOutIcon.svg?react"
import clsx from "clsx"
import { useSelector } from "react-redux"
import { selectAvatarUrl, selectName } from "@/redux/user/slice"
import { SureLogOutModal } from "../SureLogOutModal/SureLogOutModal"
import { Modal } from "../Modal/Modal"

export const UserBarBtn = () => {
  const [rotated, setrotated] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const name = useSelector(selectName)
  const avatar = useSelector(selectAvatarUrl)
  const altText = name ? name[0] : ""
  const handleChangeBar = () => {
    setIsOpen(!isOpen)
    setrotated(prev => !prev)
  }
  return (
    <div className={styles.boxAbsolute}>
      <div className={styles.wrapperSummary}>
        {avatar ? (
          <img
            src={avatar ? avatar : undefined}
            alt={altText}
            className={styles.imageUser}
          />
        ) : (
          <span className={styles.spanFirstL}>{altText}</span>
        )}
        <p className={styles.nameUserStyle}>{name}</p>
        <button
          className={clsx({
            [styles.buttonDropDown]: true,
            [styles.rotated]: rotated,
          })}
          onClick={() => handleChangeBar()}
        >
          <DropIcon className={styles.dropIcon} />
        </button>
        <ul className={isOpen ? styles.listDrop : styles.listNone}>
          <li className={styles.itemDrop}>
            <button className={styles.buttonStyle}>
              <UserBarIcon className={styles.iconUserHower} />
              Profile settings
            </button>
          </li>
          <li className={styles.itemDrop}>
            <button
              className={styles.buttonStyle}
              onClick={() => setIsVisible(true)}
            >
              <UserBarLogOutIcon className={styles.iconUserHower} />
              Log out
            </button>
          </li>
        </ul>
        <Modal isOpened={isVisible} onClose={() => setIsVisible(false)}>
          <SureLogOutModal />
        </Modal>
      </div>
    </div>
  )
}
