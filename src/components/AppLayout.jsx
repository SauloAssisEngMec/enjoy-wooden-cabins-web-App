import { Outlet } from "react-router-dom"
import Header from "./Header"
import Sidebar from "./Sidebar"
import  styled from "styled-components"


function AppLayout() {
    return (
        <StyledAppLayout>
            <Header></Header>
            <Sidebar></Sidebar>
            <Main>
                 <Outlet></Outlet>
            </Main>
            
        </StyledAppLayout>
    )
}

export default AppLayout


const Main = styled.main`
    background-color: var(--color-grey-100);
    padding: 4rem 4.8rem 6.4rem;
    
`

const StyledAppLayout = styled.div`
    display: grid;
    grid-template-columns: 26rem 1fr;
    height: 100vh;
    grid-template-rows: auto 1fr;
`