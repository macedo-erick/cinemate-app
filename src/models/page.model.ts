export interface Page<T> {
  content: T[];
  pages: number;
  actualPage: number;
  totalResults: number;
}
