import React, { useEffect } from "react"; //useEffect for lifecycle
import { useSelector, useDispatch } from "react-redux";
import { fetchUsrs } from "./nameSlice";

function name() {
  const dispatch = useDispatch(); // To call actions
  const data = useSelector((state) => state.users); // Get data from Redux store
  useEffect(() => {
    dispatch(fetchUsrs());
  }, []);
  return (
    <div>
      {data.isLoading ? (
        <h3>Loading...</h3>
      ) : (
        data.data.map((users) => {
          return (
            <div
              key={users.id}
              style={{
                border: "1px solid #ccc",
                borderRadius: "6px",
                padding: "6px",
                marginBottom: "10px",
              }}
            >
              <p>{users.name}</p>
              <p>{users.address.zipcode}</p>
            </div>
          );
        })
      )}
    </div>
  );
}

export default name;
