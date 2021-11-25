import React, { useState, setState } from "react";
import useStorage from "../../Util/useStorage";
import Context from "./Context";

const Provider = ({children}) => {
    
    const [token, setToken] = useStorage('token');

    return(
        <Context.Provider
            value ={{
                token,
                setToken,
            }}
        >
            {children}
        </Context.Provider>
    )
}

export default Provider;