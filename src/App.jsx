import { BrowserRouter , Routes, Route, Navigate} from "react-router-dom"
import GlobalStyles from "./styles/GlobalStyles"
import Dashboard from "./pages/Dashboard"
import Account from "./pages/Account"
import Bookings from "./pages/Bookings"
import Cabins from "./pages/Cabins"
import Login from "./pages/Login"
import Settings from "./pages/Settings"
import Users from "./pages/Users"
import PageNotFound from "./pages/PageNotFound"


function App() {
    return (
        <>
        <GlobalStyles/>
        <BrowserRouter>
            <Routes>
            <Route index element={<Navigate replace to='dashboard'/>}></Route>
                <Route path="dashboard" element={<Dashboard/>}></Route>
                <Route path="account" element={<Account/>}></Route>
                <Route path="bookings" element={<Bookings/>}></Route>
                <Route path="cabins" element={<Cabins/>}></Route>
                <Route path="login" element={<Login/>}></Route>
                <Route path="settings" element={<Settings/>}></Route>
                <Route path="users" element={<Users/>}></Route>
                <Route path="*" element={<PageNotFound/>}></Route>  
            </Routes>
        </BrowserRouter>
        
        </>
    )
}

export default App
