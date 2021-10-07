import React from 'react';

const Footer = () => {
    const yr = new Date().getFullYear();
    return (
        <>
            <p className="footer">Coyright Ⓒ { yr}</p>
        </>
    )
}
export default Footer;