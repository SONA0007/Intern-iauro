import { TextField, Button } from "@mui/material";
import { useState } from "react"
import PropTypes from "prop-types"

const SearchBox = ({ onSearch }) => {
    const [city, setCity] = useState("");
  
    const handleSearch = () => {
      if (city.trim() !== "") {
        onSearch(city);
        setCity("");
      }
    };
  return (
    <div style={{ display: "flex", gap: "20px", marginBottom: "50px" }}>
      <TextField
        label="Enter City"
        variant="filled"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <Button variant="contained" onClick={handleSearch}>
        Search
      </Button>
    </div>
  )
}
SearchBox.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchBox
