import { useEffect } from "react";
import { useState } from "react";
import { Form, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getAllProfiles } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";

const SearchBar = () => {
  const user = useSelector((state) => state.allProfiles.profiles);
  const dispatch = useDispatch();
  //   const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  //   console.log("filterdata: ", filteredData);
  const [clicked, setClicked] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    dispatch(getAllProfiles());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    handleFilter(query);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  const handleFilter = (query) => {
    const newFilter = user.filter((value) => {
      return value.name.toLowerCase().includes(query.toLowerCase());
    });

    // console.log("newFilter: ", newFilter);
    const filteredArr = newFilter.reduce((acc, current) => {
      const x = acc.find((item) => item._id === current._id);
      if (!x) {
        return acc.concat([current]);
      } else {
        return acc;
      }
    }, []);
    // console.log("newnewnewFilter: ", filteredArr);
    if (query.length > 2) {
      setFilteredData(filteredArr);
    } else {
      setFilteredData([]);
    }
  };

  const onInputClick = (wasItClicked) => {
    // console.log(clicked);
    setClicked(wasItClicked);
  };

  return (
    <div>
      <div>
        <Form className="mr-auto">
          <Form.Control
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
            }}
            // onClick={() => onInputClick(false)}
            placeholder="Search"
          />
        </Form>
      </div>

      {filteredData.length !== 0 && (
        <div
          style={{
            width: "300px",
            position: "fixed",
            marginBlockStart: "10px",
            boxShadow: "0 3px 5px rgba(0,0,0,.3)",
            border: "1px solid rgba(255,255,255)",
            borderRadius: 8,
            zIndex: "3",
          }}
        >
          {filteredData.slice(0, 10).map((data) => {
            return (
              <ListGroup
                key={data._id}
                className="p-2"
                style={{ backgroundColor: "white" }}
              >
                <div>
                  <Link
                    onClick={() => {
                      setQuery("");
                      setFilteredData([]);
                    }}
                    to={`/search/result/${data._id}`}
                  >
                    <ListGroup.Item
                      className="hover-block"
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
