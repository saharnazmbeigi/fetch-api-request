// //axios
// import axios from "axios";
//react
import React, { useState, useEffect } from "react";
//material ui
import { Grid } from "@material-ui/core";
import GaugeChart from "react-gauge-chart";
//fake db
import "../../@fake_db/index";

function Gauges(props) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    //
    console.log(data);
  }, [data]);

  useEffect(() => {
    fetch("http://webswitch.ir:3000/sensors")
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
          {data &&
            Object.values(data).map((sensors) => (
              <>
                {data.sensors.map((sensor, id) => (
                  <Grid item xs={6} key={id}>
                    <h6>{`sensorname is : ${sensor.sensorname}`}</h6>
                    <h6>{`sensortype is : ${sensor.sensortype}`}</h6>
                    {/* {console.log(data.sensors)} */}
                    <GaugeChart
                      id={sensor.sensorid}
                      nrOfLevels={30}
                      colors={["#FF5F6D", "#FFC371"]}
                      arcWidth={0.3}
                      percent={sensor.sensordata * 0.01}
                    />
                  </Grid>
                ))}
              </>
            ))}
        </Grid>
      </>
    );
  }
}
export default Gauges;
