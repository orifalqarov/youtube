import { IconButton, Paper } from "@mui/material";
import { color } from "../../constants/colors";
import { Search } from "@mui/icons-material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [value, setValue] = useState("");
  const navigate=useNavigate()
  const onSubmitHandle = (e) => {
    e.preventDefault();
    if (value) {
        navigate(`/search/${value}`)
        setValue('')
    }
  };
  return (
    <Paper
      onSubmit={onSubmitHandle}
      component={"form"}
      sx={{ border: `1px solid ${color.secondary}`, pl: 2, boxShadow: "none" }}
    >
      <input
        type="text"
        placeholder="Search..."
        className="search-bar"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <IconButton type="submit">
        <Search />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
