import React, { useEffect } from 'react'

export const Message = () => {

    useEffect(() => {
        
        console.log("Message mounted");
    
        return () => {
            console.log("Message unmounted");
        }
    }, []);
    

    return (
        <>
        
            <h2>Usuario ya existe</h2>
        </>
    )
}
