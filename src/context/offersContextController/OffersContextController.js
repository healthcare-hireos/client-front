import React, { createContext, useContext, useState } from "react";
import { FiltersStates } from "../states";

const OffersContext = createContext({
  offersList: [],
  setOffersList: null,
    order: null,
    setOrder: null,
});

export const OffersContextController = ({ children }) => {
  const [offersList, setOffersList] = useState([]);
  const [order, setOrder] = useState(FiltersStates.latest);

  return (
    <OffersContext.Provider
      value={{
        offersList,
        setOffersList,
          order,
          setOrder,
      }}
    >
      {children}
    </OffersContext.Provider>
  );
};

export function useOffersContext() {
  return useContext(OffersContext);
}
