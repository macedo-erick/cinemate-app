'use client';

import React, { createContext, Dispatch, useState } from 'react';

export interface QueryContextType {
  query?: string;
  setQuery: Dispatch<any>;
}

export const QueryContext = createContext<QueryContextType>({
  setQuery: () => {},
});

export const QueryProvider = ({ children }: { children: React.ReactNode }) => {
  const [query, setQuery] = useState<string>();

  return (
    <QueryContext.Provider value={{ query, setQuery }}>
      {children}
    </QueryContext.Provider>
  );
};
