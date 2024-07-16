import React from "react";
import s from "./SearchBox.module.css";

const SearchBox = ({ handleChangeInput, inputValue }) => {
  return (
    <div className={s.wrapper}>
      <label className={s.label} htmlFor="searchInput">
        <span>Find contacts by name</span>
        <input
          type="text"
          id="searchInput"
          name="searchInput"
          onChange={handleChangeInput}
          value={inputValue}
        />
      </label>
    </div>
  );
};

export default SearchBox;
