
import Row from "./../components/Row"
import Heading from "./../components/Heading"
import Button from "./../components/Button"
import CabinTable from "../features/cabins/CabinTable"
import { useState } from "react"
import CreateCabinForm from "../features/cabins/CreateCabinForm"


function Cabins() {

        const [showForm, setShowForm] = useState(false)
   
    return (
        <>
        <Row type="vertical">
                <Heading as="h1">All Cabins</Heading>
                <p>filter and sort</p>
        </Row>

        <Row>
                <CabinTable></CabinTable>
                <Button onClick={() => setShowForm((show) => !show)}>Add New Cabin</Button>
                {showForm && <CreateCabinForm/>}
        </Row>
       </>

    )
}

export default Cabins
