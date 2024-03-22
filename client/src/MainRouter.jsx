import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Check from './components/Check';
import { ClientForm } from './components/client/ClientForm';
import ClientLogin from './components/client/ClientLogin';
import ClientDashboard from './components/client/ClientDashboard';
import ClientOngoingTable from './components/client/ClientOngoingTable';
import ClientSelectedTable from './components/client/ClientSelectedTable';
import ClientBidsTable from './components/client/ClientBidsTable';
import Register from './components/client/Register';
import ForgotPassword from './components/client/ForgotPassword';

export default function MainRouter() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route index element={<ClientLogin/>}/>
                    <Route path='/check' element={<Check/>}/>
                    <Route path='/clientdashboard' element={<ClientDashboard/>}>
                        <Route path='ongoing'  element={<ClientOngoingTable/>}/>
                        <Route path='clientselected'  element={<ClientSelectedTable/>}/>
                        <Route path='clientbids'  element={<ClientBidsTable/>}/>
                    </Route>
                    <Route path="/register" element={<Register/>}/>
                    <Route path='/forgotPassword' element={<ForgotPassword/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}
