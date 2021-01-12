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
    width: 400,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
}));

const Search = ({ setProfiles, profiles }) => {
  const classes = useStyles();

  const [inputs, setInputs] = useState('');
console.log(inputs)
  const values = inputs.split(' ')

  console.log('v', values)
  const handleSearch = () => {
    const filteredProfile = profiles.filter(profile => {
      const query1 = values[0].toLowerCase();
      const query2 = values[1].toLowerCase();

     return  profile.FirstName.toLowerCase().indexOf(query1) >= 0
    })

setProfiles(filteredProfile)
    console.log(filteredProfile)
  }

  const handleInput = (e) => {
    setInputs(e.target.value)
  }



  return (
    <div className="m-auto w-1/2">
      <Paper component="form" className={classes.root} onSubmit={e => {
        e.preventDefault()
        handleSearch()
      }}>
        <InputBase
          className={classes.input}
          placeholder="Search Google Maps"
          inputProps={{ "aria-label": "search google maps" }}
          onChange={e => handleInput(e)}
        />
        <IconButton
          type="submit"
          className={classes.iconButton}
          aria-label="search"
        >
          <SearchIcon />
        </IconButton>
      </Paper>
    </div>
  );
};

export default Search;
