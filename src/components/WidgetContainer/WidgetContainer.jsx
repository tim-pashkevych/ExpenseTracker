import clsx from "clsx"
import styles from "./WidgetContainer.module.css"

export const WidgetContainer = ({ children }) => {
  return <article className={clsx(styles.widgetContainer)}>{children}</article>
}
