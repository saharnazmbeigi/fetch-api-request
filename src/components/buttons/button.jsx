//react
import React, { useState } from "react";
//material ui
import Switch from "@material-ui/core/Switch";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
//fake db
import "../../@fake_db/index";

export default function SwitcheOn() {
  const [key, setKey] = useState();

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(true);

  const apiUrl = "http://webswitch.ir:3000/actors";

  const postBody = { actorid: 1, actorstatus: 1 };

  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(postBody),
  };
  const HandleClick = () => {
    fetch(apiUrl, requestOptions)
      .then((res) => res.json())
      //response
      .then(
        (result) => {
          setIsLoaded(true);

          setKey(key === null ? result : null);

          alert(key === null ? "سنسور خاموش شد!" : "سنسور روشن شد");
          console.log(result);
        },
        //error
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  };

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <FormGroup>
        <FormControlLabel control={<Switch onChange={HandleClick} />} />
      </FormGroup>
    );
  }
}
