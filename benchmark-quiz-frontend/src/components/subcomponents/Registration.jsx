import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import FilledInput from "@material-ui/core/FilledInput";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import OutlinedInput from "@material-ui/core/OutlinedInput";

function Registration() {
  const [name, setName] = useState("Composed TextField");
  const classes = useStyles();

  const useStyles = makeStyles((theme) => ({
    root: {
      "& > *": {
        margin: theme.spacing(1),
      },
    },
  }));

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
