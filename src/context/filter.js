import React, { createContext, useState, useCallback } from 'react';

export const FilterContext = createContext();

export default ({ children }) => {
  const initialFilter = {
    distance: 10,
    specie: '',
    longitude: '',
    latitude: '',
  };
  const [filter, setFilter] = useState(initialFilter);

  const setNewFilter = useCallback(data => {
    setFilter({ ...filter, ...data });
  }, []);

  const defaultValues = {
    filter,
    setNewFilter,
  };

  return (
    <FilterContext.Provider value={defaultValues}>
      {children}
    </FilterContext.Provider>
  );
};
