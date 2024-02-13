import styles from "./AllUsersTab.module.css"

export const AllUsersTab = () => {
  return (
    <div className={styles.usersWrapper}>
      <ul className={styles.usersPhotosList}>
        <li className={styles.usersPhotosElem}>
          <picture>
            <source
              srcSet='/src/assets/images/women1@1x.png 1x,/src/assets/images/women1@2x.png 2x'
              type='image/png'
            />
            <img
              className={styles.userPhoto}
              src='/src/assets/images/women1@1x.png'
              alt='Photo of the user'
            />
          </picture>
        </li>
        <li className={styles.usersPhotosElemTwo}>
          <picture>
            <source
              srcSet='@/assets/images/men@1x.png,
              @/assets/images/men@2x.png'
              type='image/png'
            />
            <img
              className={styles.userPhoto}
              src='/src/assets/images/men@1x.png'
              alt='Photo of the user'
            />
          </picture>
        </li>
        <li>
          <picture>
            <source
              srcSet='/src/assets/images/women2@1x.png 1x, /src/assets/images/women2@2x.png 2x'
              type='image/png'
            />
            <img
              className={styles.userPhoto}
              src='/src/assets/images/women2@1x.png'
              alt='Photo of the user'
            />
          </picture>
        </li>
      </ul>
      <div className={styles.usersAmountInfo}>
        <h2 className={styles.usersAmount}>1000 users &#43;</h2>
        <p className={styles.description}>
          Trusted by users for reliable expense tracking!
        </p>
      </div>
    </div>
  )
}
