import { BrowserRouter , Routes, Route, Navigate} from "react-router-dom"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import GlobalStyles from "./styles/GlobalStyles"
import Dashboard from "./pages/Dashboard"
import Account from "./pages/Account"
import Bookings from "./pages/Bookings"
import Cabins from "./pages/Cabins"
import Login from "./pages/Login"
import Settings from "./pages/Settings"
import Users from "./pages/Users"
import PageNotFound from "./pages/PageNotFound"
import AppLayout from "./components/AppLayout"
import { Toaster } from "react-hot-toast"

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 30* 1000,
        }
    }
})


function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools/>
            <GlobalStyles/>
                <BrowserRouter>
                    <Routes>
                        < Route  element={<AppLayout/>}>
                            <Route index element={<Navigate replace to='dashboard'/>}></Route>
                            <Route path="dashboard" element={<Dashboard/>}></Route>
                            <Route path="account" element={<Account/>}></Route>
                            <Route path="bookings" element={<Bookings/>}></Route>
                            <Route path="cabins" element={<Cabins/>}></Route>
                            <Route path="settings" element={<Settings/>}></Route>
                            <Route path="users" element={<Users/>}></Route>
                        </Route>
                            <Route path="login" element={<Login/>}></Route>
                            <Route path="*" element={<PageNotFound/>}></Route>  
                    </Routes>
                </BrowserRouter>
                <Toaster position="top-center" 
                gutter={12}
                containerStyle={{margin:"10px"}}
                toastOptions={{
                    success: {
                        duration:3000,
                    },
                    error: {
                        duration:5000
                    },
                    style: {
                        fontSize:"16px",
                        maxWidth:"500px",
                        padding:"12px 18px",
                        backgroundColor: "var(--color-grey-0)",
                        color: "var(--color-grey-700)"
                    }
                }}
                />
         </QueryClientProvider>
       
        
      
    )
}

export default App
