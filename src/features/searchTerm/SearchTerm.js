import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { selectTerm } from './searchTermSlice'
import { setSearchTerm, clearSearchTerm } from './searchTermSlice.js';

// const searchIconUrl = 'https://static-assets.codecademy.com/Courses/Learn-Redux/Recipes-App/icons/search.svg'
const clearIconUrl = 'https://static-assets.codecademy.com/Courses/Learn-Redux/Recipes-App/icons/clear.svg'

export const SearchTerm = () => {
  const search = useSelector(selectTerm);
  const dispatch = useDispatch();

  const onSearchTermChangeHandler = (e) => {
    const userInput = e.target.value;
    dispatch(setSearchTerm(userInput));
  };
  
  const onClearSearchTermHandler = () => {
    dispatch(clearSearchTerm());
  };

  return (
    <div id="search-container">
      {/*<img id="search-icon" alt="" src={searchIconUrl} />*/}
      <input
        id="search"
        type="text"
        value={search}
        onChange={onSearchTermChangeHandler}
        placeholder="Search posts"
      />
      {search.length > 0 && (
        <button
          onClick={onClearSearchTermHandler}
          type="button"
          id="search-clear-button"
        >
          <img src={clearIconUrl} alt="" />
        </button>
      )}
    </div>
  );
};