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
import EmployeeOngoingTable from './components/employee/EmployeeOngoingTable';
import EmployeeUserValidation from './components/employee/EmployeeUserValidation';
import EmployeeCreateProject from './components/employee/EmployeeCreateProject';
import ListofBids from './components/employee/ListofBids';
import EmployeeDashboard from './components/employee/EmployeeMainDashboard';
import EmployeeAward from './components/employee/EmployeeAward';
import ClientRegister from './components/client/ClientRegister';
import CheckMail from './components/CheckMail';
import ClientAward from './components/client/ClientAward';
// import ForgotPassword from './components/client/ForgotPassword';

export default function MainRouter() {


    return (

        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<ClientLogin />} />
                    <Route path='/clientregister' element={<ClientRegister />} />
                    <Route path='/check' element={<Check />} />
                    <Route path='/clientdashboard' element={<ClientDashboard />}>
                        <Route path='ongoing' element={<ClientOngoingTable />} />
                        <Route path='clientselected' element={<ClientSelectedTable />} />
                        <Route path='clientbids' element={<ClientBidsTable />} />
                        <Route path='myprojects' element={<ClientAward />} />
                    </Route>
                    <Route path="/register" element={<Register />} />
                    <Route path='/forgotPassword' element={<ForgotPassword />} />
                    <Route path='/employeedashboard' element={<EmployeeDashboard />}>
                        <Route path='employeeuservalidation' element={<EmployeeUserValidation />} />
                        <Route path='employeecreateproject' element={<EmployeeCreateProject />} />
                        <Route path='employeeongoing' element={<EmployeeOngoingTable />} />
                        <Route path='listofbids' element={<ListofBids />} />
                        <Route path='employeeawards' element={<EmployeeAward />} />
                    </Route>
                    <Route path="/verify/:id/verify/:token" element={<CheckMail />} />
                    <Route path="/forgot-password" element={<ForgotPassword />} />
                    {/* <Route path="/password-reset/:id/:token" element={<PasswordReset />} /> */}
                </Routes>
            </BrowserRouter>
        </>
    )
}
