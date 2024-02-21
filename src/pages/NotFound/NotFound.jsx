import React, { Suspense } from "react"
import styles from "./NotFound.module.css"
import { Loader } from "@/components"

const NotFound = () => {
  return (
    // <Suspense fallback={<Loader />}>
    <div className={styles.containter}>
      <h1 className={styles.header}>404</h1>
    </div>
    // </Suspense>
  )
}

export default NotFound
