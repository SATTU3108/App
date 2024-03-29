import React from "react";
import Image from "next/image";

import Style from "./UserCard.module.css";
import images from "../../images";
const UserCard = ({ el, i, addFriends }) => {
  return (
    <div className={Style.UserCard}>
      <div className={Style.UserCard_box}>
        <Image
          className={Style.UserCard_box_img}
          src={images[`image${i + 1}`]}
          alt="user"
          width={100}
          height={100}
        />
        <div className={Style.UserCard_box_info}>
          <h3>{el.name}</h3>
          <div className={Style.tooltip}>
            <p>{el.accountAddress.slice(0, 25)}..</p>
            <p className={Style.tooltiptext}>{el.accountAddress}</p>
          </div>
        <button
          onClick={() =>
            addFriends({ name: el.name, userAddress: el.accountAddress })
          }
        >
          Add Friend
        </button>
      </div>
    </div>
      <small className={Style.number}>{i + 1}</small>
    </div>
  );
};

export default UserCard;
