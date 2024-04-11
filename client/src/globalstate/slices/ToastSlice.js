import { createSlice } from "@reduxjs/toolkit";
import { toast } from 'react-toastify';

let initialState = {
    name: '',
    message: '',
    status: '',
}

const toastModifier = createSlice({
    name: 'toast',
    initialState,
    reducers: {
        setToast: (state, action) => {
            const { name, status, message } = action.payload;
            switch (status) {

                // userStatus

                case 'user-success':
                    toast.success(message,
                        {
                            autoClose: 3000,
                            position: "bottom-right",
                        })
                    break;
                case 'user-not-verified':
                    toast.warn(message,
                        {
                            autoClose: 3000,
                            position: "bottom-right",
                        })
                    break; 
                case 'user-not-found':
                    toast.error(message,
                        {
                            autoClose: 3000,
                            position: "bottom-right",
                        })
                    break;
                default:
                    toast(message)
            }
        }
    }
})

export const { setToast } = toastModifier.actions;
export default toastModifier.reducer;