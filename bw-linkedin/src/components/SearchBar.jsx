import { useEffect } from "react";
import { useState } from "react";
import { Form, InputGroup, ListGroup } from "react-bootstrap";
import { Search } from "react-bootstrap-icons";
import { Link, useNavigate } from "react-router-dom";

const SearchBar = ({ user }) => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [clicked, setClicked] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    handleFilter(query);
  }, [query]);

  const handleFilter = (query) => {
    const newFilter = data.filter((value) => {
      return value.name.toLowerCase().includes(query.toLowerCase());
    });

    if (query.length > 0) {
      setFilteredData(newFilter);
    } else {
      setFilteredData([]);
    }
  };

  const onInputClick = (wasItClicked) => {
    console.log(clicked);
    setClicked(wasItClicked);
  };

  const navigate = useNavigate();
  const goToProfile = () => {
    navigate("/CurrentProfile/" + user._id);
  };

  const fetchData = async () => {
    try {
      const url = "https://striveschool-api.herokuapp.com/api/profile/";

      const response = await fetch(url, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmEzMzk4MjdmZmQ0OTAwMTU4YTdhOTkiLCJpYXQiOjE2NjYxNzIyNDAsImV4cCI6MTY2NzM4MTg0MH0.IukOAS3JY7OZnbBlwrIk7YuTiuHyzusKeW7TjLggjcQ",
        },
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setData(data);
      } else {
        console.log("Error fetching data");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div>
        <InputGroup
          style={{
            marginTop: "6px",
          }}
          onClick={() => onInputClick(false)}
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        >
          <Form.Control placeholder="Search" />
        </InputGroup>
      </div>

      {filteredData.length !== 0 && (
        <div
          style={{
            position: "fixed",
            zIndex: "3",
          }} /* style={{marginTop: '33rem'}} */
        >
          {filteredData.slice(0, 10).map((data) => {
            return (
              <ListGroup className="search-list">
                <div>
                  <Link
                    onClick={() => {
                      setQuery("");
                      setFilteredData([]);
                    }}
                    to={`/user/${data._id}`}
                  >
                    <ListGroup.Item
                      style={{
                        textAlign: "left",
                      }}
                      onClick={() => {
                        onInputClick(true);
                      }}
                    >
                      <img
                        style={{
                          width: "25px",
                          height: "25px",
                          borderRadius: "50%",
                        }}
                        src={data.image}
                        alt=""
                      />
                      <span
                        className="ml-2"
                        style={{ color: "black", fontSize: "14px" }}
                        onClick={goToProfile}
                      >
                        <strong>{data.name}</strong>
                      </span>
                    </ListGroup.Item>
                  </Link>
                </div>
              </ListGroup>
            );
          })}
        </div>
      )}
    </div>
  );
};
export default SearchBar;
