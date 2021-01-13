import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 500,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
}));

const Search = ({
  setFiltered,
  profiles,
  setFilterStatus,
  setFilterFeedback,
}) => {
  const classes = useStyles();

  const [inputs, setInputs] = useState("");
  const [validate, setValidate] = useState(false);

  const values = inputs.split(" ");

  const handleSearch = (values) => {
    const filteredProfile = profiles.filter((profile) => {
      const query1 = values[0].toLowerCase();
      const query2 = values[1].toLowerCase();

      // there is always a better way of doin things, i haven't discovered that yet.

      return (
        profile.FirstName.toLowerCase().indexOf(query1) >= 0 ||
        profile.LastName.toLowerCase().indexOf(query1) >= 0 ||
        profile.UserName.toLowerCase().indexOf(query1) >= 0 ||
        profile.Email.toLowerCase().indexOf(query1) >= 0 ||
        profile.FirstName.toLowerCase().indexOf(query2) >= 0 ||
        profile.LastName.toLowerCase().indexOf(query2) >= 0 ||
        profile.UserName.toLowerCase().indexOf(query2) >= 0 ||
        profile.Email.toLowerCase().indexOf(query2) >= 0
      );
    });

    if (filteredProfile.length < 1) {
      setFilterFeedback(true);
    } else {
      setFilterFeedback(false);
    }

    setFilterStatus(true);
    setFiltered(filteredProfile);
  };

  const handleInput = (e) => {
    setInputs(e.target.value);
    if (e.target.value.length === 0) {
      setFilterStatus(false);
    }

    if (values.length <= 1 || values.length > 2) {
      setValidate(true);
    } else {
      setValidate(false);
    }
  };

  return (
    <div>
      <Paper
        component="form"
        className={classes.root}
        onSubmit={(e) => {
          e.preventDefault();
          handleSearch(values);
        }}
      >
        <InputBase
          className={classes.input}
          placeholder="Seperate search values with a space"
          inputProps={{ "aria-label": "search google maps" }}
          onChange={(e) => handleInput(e)}
        />
        {validate ? (
          <IconButton
            type="submit"
            className={classes.iconButton}
            aria-label="search"
            disabled
          >
            <SearchIcon />
          </IconButton>
        ) : (
          <IconButton
            type="submit"
            className={classes.iconButton}
            aria-label="search"
          >
            <SearchIcon />
          </IconButton>
        )}
      </Paper>
      {validate ? (
        <p className="text-center text-md font-bold text-red-600 m-2">
          Search with two filters
        </p>
      ) : (
        ""
      )}
    </div>
  );
};

export default Search;
