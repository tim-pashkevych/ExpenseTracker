import React, { useState } from "react"
import styles from "./UserBarBtnBox.module.css"
import { useSelector } from "react-redux"
import { selectAvatarUrl, selectName } from "@/redux/user/slice"
import clsx from "clsx"
import UserBarIcon from "@/assets/icons/UserBarIcon.svg?react"
import UserBarLogOutIcon from "@/assets/icons/UserBarLogOutIcon.svg?react"
import DropIcon from "@/assets/icons/DropIcon.svg?react"
import { Link } from "react-router-dom"

export const UserBarBtnBox = () => {
  const [rotated, setrotated] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const name = useSelector(selectName)
  const avatar = useSelector(selectAvatarUrl)
  const altText = name ? name[0] : "user"
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
          onClick={() => setIsOpen(!isOpen)}
        >
          <DropIcon
            className={styles.dropIcon}
            onClick={() => setrotated(prev => !prev)}
          />
        </button>
        <ul className={isOpen ? styles.listDrop : styles.listNone}>
          <li className={styles.itemDrop}>
            <UserBarIcon className={styles.iconUserHower} />
            <button className={styles.buttonStyle}>Profile settings</button>
          </li>
          <li className={styles.itemDrop}>
            <UserBarLogOutIcon className={styles.iconUserHower} />
            <button className={styles.buttonStyle}>Log out</button>
          </li>
        </ul>
      </div>
    </div>
  )
}
