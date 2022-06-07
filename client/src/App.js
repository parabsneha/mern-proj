import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import React, { Component } from 'react'
import './index.css'
import LoginForm from './pages/LoginForm'
import LoginLink from './components/LoginLink'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import HrLogin from './pages/HrLogin'
import Dashboard from './pages/Dashboard'
import "./App.css";
import styled from 'styled-components'
import Sidebar from './components/Sidebar'
import Registration from './pages/Registration'
import AdminUsers from './pages/AdminUsers'
import { Link } from "react-router-dom";
import AddUser from './pages/AddUser'
import EditUser from './pages/Edituser'
import ViewUser from './pages/ViewUser'
import MyTeam from './pages/MyTeam'
import TodoList from './components/TodoList'
import 'bootstrap/dist/css/bootstrap.min.css';
import EmpTodo from './components/EmpTodo'
import DailyTasks from './components/DailyTasks' 
import EmpTaskList from './pages/EmptaskList'
import ShowEmpTaskList from './pages/ShowEmpTaskList'
import EditEmpTaskList from './pages/EditEmpTaskList'
import ViewEmpTask from './pages/ViewEmpTask'
import ProgressBar from './pages/ProgressBar'
import Forms from './pages/Forms'
import WeeklyTasks from './pages/WeeklyTasks'
// import LoginPage from './components/LoginPage'
// import "./styles.css";
import Modal  from './components/Modal';
import ModalApp from './components/ModalApp'
import Buddy from './pages/Buddy'
import Ratings from './pages/Ratings'
import OnboardFormOne from './pages/OnboardFormOne'
import Demo from './pages/Demo'
import LandingPage from './pages/LandingPage'
import CurrentDayTask from './pages/CurrentDayTask'

class App extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (

            <Router>


                <Routes>
                    <Route exact path='/' element={
                        <>
                            <LandingPage/>
                        </>
                    } >
                    </Route>
                </Routes>



                <Routes>
                    <Route path='/login' element={<LoginForm />} />
                    <Route path='/hrlogin' element={<HrLogin />} />
                    <Route path='/dashboard' element={<Dashboard />} />
                    <Route path='/aduser' element={<AdminUsers />} />
                    <Route path='/adduser' element={<AddUser />} />
                    <Route path='/edituser/:id' element={<EditUser />} />
                    <Route path='/viewuser/:id' element={<ViewUser />} />
                    <Route path='/myteam' element={<MyTeam />} />
                    <Route path='/todolist' element={<TodoList />} />
                    <Route path='/emptodo' element={<EmpTodo />} />
                    <Route path='/dailytasks' element={<DailyTasks />} />
                    <Route path='/modalapp' element={<ModalApp />} />
                    <Route path='/emptasklist' element={<EmpTaskList />} />
                    <Route path='/showemptasklist' element={<ShowEmpTaskList />} />
                    <Route path='/editemptask/:id' element={<EditEmpTaskList />} />
                    <Route path='/viewemptask/:id' element={<ViewEmpTask />} />
                    <Route path='/progress' element={<ProgressBar />} />
                    <Route path='/buddy' element={<Buddy/>} />
                    <Route path='/ratings' element={<Ratings/>} />
                    <Route path='/forms' element={<Forms/>} />
                    <Route path='/onboardformone' element={<OnboardFormOne/>} />
                    <Route path='/demo' element={<Demo/>} />
                    <Route path='/WeeklyTasks' element={<WeeklyTasks/>} />
                    <Route path='/CurrentDayTask' element={<CurrentDayTask/>} />
                    
                    {/* <Route path='/landing' element={<LandingPage/>} /> */}
                    {/* <Route path='/loginpage' element={<LoginPage />} /> */}
                </Routes>


            </Router>
        )
    }
}

export default App