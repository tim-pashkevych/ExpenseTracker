import React from "react";
import s from "./ProfileSettingsComponent.module.css";
import UserBaseImg from "@/assets/icons/UserBaseImg.svg?react";

export const UserSetsModal = () => {
  return (
    <div>
      <div className={s.wrapperSettings}>
        <h3 className={s.titleProfileSettings}>Profile settings</h3>
        <svg className={s.closeButtonX} />
        <UserBaseImg className={s.userImg} />
        <button>Upload new photo</button>
        <select></select>
        <p>Name User</p>
        <button className={s.buttonRemove}>Remove</button>
        <button className={s.buttonSave}>Save</button>
      </div>
    </div>
  );
};
