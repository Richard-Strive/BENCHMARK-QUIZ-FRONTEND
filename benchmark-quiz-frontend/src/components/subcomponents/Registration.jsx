import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";

import FormControl from "@material-ui/core/FormControl";

import InputLabel from "@material-ui/core/InputLabel";
import OutlinedInput from "@material-ui/core/OutlinedInput";

function Registration() {
  const [name, setName] = useState("Enter your name");

  const useStyles = makeStyles((theme) => ({
    root: {
      "& > *": {
        margin: theme.spacing(1),
      },
    },
  }));
  const classes = useStyles();

  const handleChange = (event) => {
    setName(event.target.value);
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
          </FormControl>
        </form>
      </div>
    </div>
  );
}

export default Registration;
