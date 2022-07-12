import { useEffect } from "react"
import { useState } from "react"
import { Form, InputGroup, ListGroup } from "react-bootstrap";
import { Search } from "react-bootstrap-icons";


const SearchBar = () => {

    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([])
    const [clicked, setClicked] = useState(false)

    useEffect(() => {
        fetchData()
    }, [])

    const handleFilter = (event) => {

        const profileSearched = event.target.value
        const newFilter = data.filter((value) => {
            return value.name.toLowerCase().includes(profileSearched.toLowerCase())
        })

        if (profileSearched.length > 0) {
            setFilteredData(newFilter)
        } else {
            setFilteredData([])
        }
    }

    const onInputClick = (wasItClicked) => {
        console.log(clicked)
        setClicked(wasItClicked)
    }

    const fetchData = async () => {
        try {
            const url = "https://striveschool-api.herokuapp.com/api/profile/"

            const response = await fetch(url,
                {
                    headers: {
                        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmNiZjY0YmU2YzAzMDAwMTU5MTgxNDUiLCJpYXQiOjE2NTc1MzQwMjcsImV4cCI6MTY1ODc0MzYyN30.CB7NDDp16Z2r4LEBmGrsgrwMVNQI6vKZ1_ERAXJtQyU"
                    }
                }
            )

            if (response.ok) {
                const data = await response.json()
                console.log(data)
                setData(data)
            }
            else {
                console.log('Error fetching data')
            }
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div>
            <div>
                <InputGroup
                    onClick={() => onInputClick(false)}
                    type="text"
                    
                    onChange={handleFilter}
                    
                >    
                    <Form.Control
          placeholder="Search"
        />
                </InputGroup>
            </div>

            {filteredData.length !== 0 && (
                <div  /* style={{marginTop: '33rem'}} */>
                    {filteredData.slice(0, 10).map((data) => {
                        return (
                            <ListGroup className="search-list">
                                <div>
                                    <ListGroup.Item 
                                    
                                        style={{
                                            textAlign: "left",
                                        }}
                                        onClick={() => onInputClick(true)}>
                                        <img
                                            style={{ width: "25px", height: "25px", borderRadius: "50%" }}
                                            src={data.image} alt= ''
                                        />
                                        <span className="ml-2" style={{ color: "black", fontSize: "14px" }}><strong>{data.name}</strong></span>
                                    </ListGroup.Item>
                                </div>
                            </ListGroup>
                        )
                    })}
                </div>
            )
            }
        </div>
    )
}
export default SearchBar


