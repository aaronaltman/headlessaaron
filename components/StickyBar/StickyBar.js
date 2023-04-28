import React from "react";
import style from "components/StickyBar/StickyBar.module.scss";

const StickyBar = ({ leftText, buttonText, backgroundColor = "green" }) => {
    return (
        <div
            className={style.topbanner}
            style={{ backgroundColor: backgroundColor }}
        >
            <div className={style.contentWrapper}>
                <div className={style.leftcolumn}>{leftText}</div>
                <div className={style.rightcolumn}>
                    <button className={style.button}>{buttonText}</button>
                </div>
            </div>
        </div>
    );
};

export default StickyBar;
