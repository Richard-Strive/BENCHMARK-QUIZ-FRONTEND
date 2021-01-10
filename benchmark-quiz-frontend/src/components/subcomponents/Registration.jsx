import React, { useState } from "react";
import "./Registration.css";

import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import { Link } from "react-router-dom";

import InputLabel from "@material-ui/core/InputLabel";
import OutlinedInput from "@material-ui/core/OutlinedInput";

function Registration({ parentCallback2 }) {
  const [name, setName] = useState("");
  const [data, setData] = useState([]);

  const useStyles = makeStyles(theme => ({
    root: {
      "& > *": {
        margin: theme.spacing(1),
      },
    },
  }));
  const classes = useStyles();

  const handleChange = event => {
    setName(event.target.value);
    console.log(candidate);
  };

  const candidate = {
    candidateName: name,
  };

  const url = "http://localhost:5001/exam/start/";

  const handlePost = async () => {
    try {
      const response = await fetch(url, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(candidate),
      });
      const data = await response.json();
      console.log(data.id);

      if (response.ok) {
        setData(data);
        parentCallback2(data.id);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="registration">
      <div className="name_box">
        <form className={classes.root} noValidate autoComplete="off">
          <FormControl variant="outlined">
            <InputLabel htmlFor="component-outlined">Name</InputLabel>
            <OutlinedInput
              id="component-outlined"
              value={name}
              onChange={handleChange}
              label="Name"
            />
            <Button variant="contained" color="secondary" onClick={handlePost}>
              <Link to="/start" className="link">
                Sign in and start
              </Link>
            </Button>
          </FormControl>
        </form>
      </div>
    </div>
  );
}

export default Registration;
