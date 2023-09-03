export type IPaginationOptions = {
  page?: number;
  limit?: number;
  sortBy?: string;
  total?: number;
  maxPrice?: number;
  minPrice?: number;
  sortOrder?: 'asc' | 'desc';
};
