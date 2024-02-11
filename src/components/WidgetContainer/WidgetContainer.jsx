import clsx from "clsx"
import css from "./WidgetContainer.module.css"

export const WidgetContainer = ({ children }) => {
  return <article className={clsx(css.widgetContainer)}>{children}</article>
}
