export interface Page<T> {
  results: T[];
  pages: number;
  actualPage: number;
  totalResults: number;
}
