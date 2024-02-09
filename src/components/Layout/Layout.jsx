import { Outlet } from "react-router-dom";
import { Container } from "../index";
import Icon from "icons/Logo.svg?react";
import classNames from "classnames";
import styles from "./Layout.module.css";
export const Layout = () => {
  const isLoggedIn = true;

  const classNamess = classNames({
    [styles.red]: isLoggedIn,
  });

  // styles[`host-btn-${size}`],
  return (
    <Container>
      {/* Header  */}
      {isLoggedIn && (
        <p className={classNamess}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel obcaecati
          quidem, voluptas iusto delectus libero commodi nobis reiciendis,
          aliquam error consequuntur, quo aperiam ut sequi facere. Similique
          accusamus nam earum. Assumenda harum reprehenderit officia magnam
          fugiat deleniti veritatis dolore illum, consequatur, eveniet ad soluta
          dolor ea. Nihil odio, exercitationem similique itaque recusandae iure
          voluptatibus rem, reprehenderit veritatis cupiditate voluptatum
          dolore.
        </p>
      )}
      <Icon />
      <Outlet />
    </Container>
  );
};
