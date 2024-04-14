import { useEffect } from "react"
import { getCabins } from "../services/apiCabins"
import Row from "./../components/Row"
import Heading from "./../components/Heading"
import CabinTable from "../features/cabins/CabinTable"


function Cabins() {
    useEffect(() => {
   getCabins().then((data) => console.log(data))
    },[])
    return (
        <>
        <Row type="vertical">
                <Heading as="h1">All Cabins</Heading>
                <p>filter and sort</p>
        </Row>

        <Row>
                <CabinTable></CabinTable>
        </Row>
       </>

    )
}

export default Cabins
