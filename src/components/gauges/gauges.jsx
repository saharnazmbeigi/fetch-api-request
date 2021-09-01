//react
import React, { useState, useEffect } from "react";
//material ui
import { Grid } from "@material-ui/core";

//fake db
import "../../@fake_db/index";

function Gauges() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    //
    console.log(data);
  }, [data]);

  useEffect(() => {
    fetch("http://webswitch.ir:3000/actors")
      .then((res) => res.json())
      //response
      .then(
        (result) => {
          setIsLoaded(true);
          setData(result);
        },
        //error
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <>
        <Grid
          container
          alignContent="center"
          alignItems="center"
          justifyContent="space-around"
        >
          <Grid item xs={12}>
            <h1>لیست سنسور ها و مشخصات</h1>
          </Grid>
          {data &&
            Object.values(data).map((actors, i) => (
              <div key={i}>
                {data.actors.map((actor, id) => (
                  <Grid item xs={12} key={id}>
                    <h5>{`actorname is : ${actor.actorname}`}</h5>
                    <h5>{`actorid is : ${actor.actorid}`}</h5>
                    {/* {console.log(data.actors)} */}
                  </Grid>
                ))}
                <Grid item xs={12}>
                  <h6>تاریخ: {data.datetime}</h6>
                </Grid>
              </div>
            ))}
        </Grid>
      </>
    );
  }
}
export default Gauges;
