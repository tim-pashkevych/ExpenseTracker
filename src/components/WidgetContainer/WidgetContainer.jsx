import clsx from "clsx"
import styles from "./WidgetContainer.module.css"
import { useNavigate } from "react-router-dom"

export const WidgetContainer = ({ className, children, moneyDeal }) => {
  const navigate = useNavigate()

  return (
    <article
      className={clsx(styles.widgetContainer, className)}
      onClick={() => navigate(`/transactions/${moneyDeal}`)}
    >
      {children}
    </article>
  )
}
