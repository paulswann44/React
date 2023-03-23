import React from 'react'
import "./Box.css"

export const Box = ({value, onClick}) => {
    //has two class names which is box & x if true
    //value is the parm
    const style = value === "X" ? "box x" : "box o";
    return (
        // style in the curly brackets refrences the js const variable of true
    <button className={style} onClick={onClick}> {value}

    </button>
    )
}

//The curly braces are a special syntax to let the JSX parser know that it needs to interpret the contents in between them as JavaScript instead of a string.