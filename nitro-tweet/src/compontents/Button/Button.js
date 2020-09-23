import React from "react";
import "./button.scss";

const STYLES = ["btn--primary", "btn--outline"];
const SIZES = ["btn--medium", "btn--mobile", "btn--large", "btn--wide"];
const COLOR = ["primary", "blue", "red", "green"];


export const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize,
    buttonColor
}) => {
    //Проверяем есть ли в этой кнопке указанные стили при помощи тернарного оператора
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : buttonStyle = STYLES[0];
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : buttonSize = SIZES[0];
    const checkButtonColor = COLOR.includes(buttonColor) ? buttonColor : buttonColor = null;

    return (
        <button
            className={`btn ${checkButtonStyle} ${checkButtonSize} ${checkButtonColor}`}
            type={type}
            onClick={onClick}
        >{children}</button>
    );
};