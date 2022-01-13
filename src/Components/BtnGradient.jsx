import React from 'react'

function BtnGradient({text, style, onClick}) {
    return (
        <>
            <button onClick={onClick} style={{...style,
                background:"linear-gradient(to right bottom, #79fc86, #21c6e9)"
            }}>{text}</button>
        </>
    )
}

export default BtnGradient
