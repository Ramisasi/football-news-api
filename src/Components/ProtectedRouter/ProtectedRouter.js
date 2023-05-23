import React from 'react'
import { Navigate } from 'react-router-dom';
import useUserData from '../../Hooks/useUserData';

// ProtectedRouter OR Router Guard
export default function ProtectedRouter(props) {
    let {isLogin} = useUserData();
        if (isLogin == false) {
            return <Navigate to={"/Auth"} />
        }
        else {
            return props.children;
        }
}
