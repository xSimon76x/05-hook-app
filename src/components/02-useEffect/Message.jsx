import React, { useEffect } from 'react'

export const Message = () => {

    useEffect(() => {
        
        const  onMauseMove = ({ x, y }) => {
            const cord = {x, y};

            console.log(cord);
        }

        window.addEventListener('mousemove', onMauseMove);
    
        return () => {
            window.removeEventListener('mousemove', onMauseMove);
        }
    }, []);
    

    return (
        <>
        
            <h2>Usuario ya existe</h2>
        </>
    )
}
