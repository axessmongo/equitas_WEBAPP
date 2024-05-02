import { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


export default function ToastModal(props) {
    const notify = () => {
        toast.success(props.msg, {
            position: "bottom-right"
        });
    };

    useEffect(() => {
        if (props.triggerToast) {
            notify();
        }
        console.log(props );
    }, [props.triggerToast]);

    return (
        <>
            <ToastContainer autoClose={2000} />
        </>
    );
}