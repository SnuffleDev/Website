import React, { ReactElement } from "react";
import styles from "./Staff.module.css";
import { IStaff } from "./StaffTeam";

export default function Staff({
    color,
    imageURL,
    role,
    staffName,
    socials,
}: IStaff): ReactElement {
    return (
        <div className={styles.staffCard}>
            <h3>{staffName}</h3>
            <div className={styles.staffouter}>
                <img
                    className={styles.staffinner}
                    src={imageURL}
                    alt={`${staffName}'s Profile Picture`}
                />
            </div>
            <h4>{role}</h4>
            {socials ? (
                socials.map((social) => (
                    <div>
                        <i className={social.icon}>
                            <a href={social.url}></a>
                        </i>
                    </div>
                ))
            ) : (
                <div></div>
            )}
        </div>
    );
}
