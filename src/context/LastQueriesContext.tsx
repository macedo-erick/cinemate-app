'use client';

import React, { createContext, Dispatch, useState } from 'react';

export interface LastQueriesContextType {
  lastQueries: string[];
  setLastQueries: Dispatch<any>;
}

export const LastQueriesContext = createContext<LastQueriesContextType>({
  setLastQueries: () => {},
  lastQueries: [],
});

export const LastQueriesProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [lastQueries, setLastQueries] = useState<string[]>([]);

  return (
    <LastQueriesContext.Provider value={{ lastQueries, setLastQueries }}>
      {children}
    </LastQueriesContext.Provider>
  );
};
