export type IOptions = {
  page?: number;
  limit?: number;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
  maxPrice?: number;
  minPrice?: number;
};

export type IOptionsResult = {
  page: number;
  limit: number;
  skip: number;
  sortBy: string;
  sortOrder?: 'asc' | 'desc';
  total?: number;
  maxPrice?: number;
  minPrice?: number;
};

const calculatePagination = (options: IOptions): IOptionsResult => {
  const page = Number(options.page || 1);
  const limit = Number(options.limit || 10);
  const skip = (page - 1) * limit;

  const sortBy = options.sortBy || 'createdAt';
  const sortOrder = options.sortOrder || 'desc';
  const minPrice = options.minPrice;
  const maxPrice = options.maxPrice;

  return {
    page,
    limit,
    skip,
    sortBy,
    sortOrder,
    maxPrice,
    minPrice,
  };
};

export const paginationHelpers = {
  calculatePagination,
};
