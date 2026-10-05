import React, { useEffect, useRef } from 'react';

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  const searchInputRef = useRef(null);

  // Tự động focus ô tìm kiếm khi load trang (Sử dụng useRef)
  useEffect(() => {
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, []);

  return (
    <div className="control-group">
      <label>Search Movie: </label>
      <input
        ref={searchInputRef}
        type="text"
        placeholder="Type to search..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;