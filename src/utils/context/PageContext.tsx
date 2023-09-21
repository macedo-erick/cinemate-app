'use client';

import React, { createContext, Dispatch, useState } from 'react';
import { Movie } from '@/utils/models/movie';
import { Page } from '@/utils/models/page.model';

export interface PageContextType {
  page?: Page<Movie>;
  setPage: Dispatch<any>;
}

export const PageContext = createContext<PageContextType>({
  setPage: () => {},
});

export const PageProvider = ({ children }: { children: React.ReactNode }) => {
  const [page, setPage] = useState<Page<Movie>>();

  return (
    <PageContext.Provider value={{ page, setPage }}>
      {children}
    </PageContext.Provider>
  );
};
