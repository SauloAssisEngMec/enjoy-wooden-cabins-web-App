import styled from "styled-components"
import Logo from "./Logo"
import MainNav from "./MainNav"


function Sidebar() {
    return (
        
            <StyledSidebar>
                <Logo/>
                <MainNav/>
            </StyledSidebar>
        
    )
}

export default Sidebar


const StyledSidebar = styled.header`
    background-color: var(--color-grey-0);
    padding: 3.2rem 2.8rem;
    border-right: 1px solid var(--color-grey-50);
    /* grid-column-start: 1;
    grid-column-end: 1; */
    grid-row-start: 1;
    grid-row-end: 3;
    display:flex;
    flex-direction: column;
    gap: 3.2rem ;




`