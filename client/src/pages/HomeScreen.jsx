import { useEffect, useReducer } from "react";
import axios from "axios";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Productq from "../components/Product";

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true };
    case "FETCH_SUCCESS": {
      console.log("Success:", action.payload);
      return { ...state, products: [...action.payload], loading: false };
    }
    case "FETCH_ERROR":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

function HomeScreen() {
  const [{ loading, error, products }, dispatch] = useReducer(reducer, {
    products: [],
    loading: true,
    error: "",
  });

  useEffect(() => {
    console.log("UseEffect is here!!!");
    const fetchData = async () => {
      console.log("FETCHDATA is here!!!");
      dispatch({ type: "FETCH_REQUEST" });
      try {
        const result = await axios.get("http://localhost:5001/api/products");

        console.log("fetch result is", result);

        dispatch({ type: "FETCH_SUCCESS", payload: result.data });
      } catch (err) {
        console.log("err is", err.message);
        dispatch({ type: "FETCH_ERROR", payload: err.message });
      }
    };
    fetchData();
  }, []);

  console.log(loading, error, products);
  return (
    <div>
      <h1>Featured Products</h1>
      <div className="products">
        {loading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>{error}</div>
        ) : (
          <Row>
            {products.map((product) => (
              <Col key={product._id} sm={6} md={4} lg={3} className="mb-3">
                <Productq product={product} />
              </Col>
            ))}
          </Row>
        )}
      </div>
    </div>
  );
}

export default HomeScreen;
