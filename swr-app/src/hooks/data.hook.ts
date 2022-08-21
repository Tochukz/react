import useSWR from "swr";

import config from "../config";

const fetcher = (...args: any) => fetch(args[0], args[1]).then(res => res.json());

const swrOptions = {
  revalidateOnFocus: false,
  revalidateOnReconnect: false,
 // refreshInterval: 10000,
}

export const useRandomBooks = (count: number) => {
  const url = `${config.apiUrl}/books/random-books?count=${count}`;
  const { data, error, isValidating, mutate } = useSWR(url, fetcher, swrOptions);
  return {
    books: data,
    error,
    isLoading: !data,
    isValidating
  }
}

export const useCategories = () => {
  const url = `${config.apiUrl}/categories`;
  // This will work without passing a fetcher function only if the calling component is a direct child of <SWRConfig>
  // and <SWRConfig have a defined fetcher in it's global config.
  const { data, error, isValidating} = useSWR(url);
  return {
    categories: data,
    error, 
    isLoading: !data,
    isValidating,
  }
}

export const useBookCategory = (categoryId: number) => {
  const url = `${config.apiUrl}/books/category/${categoryId}`;
  const { data, error, isValidating} = useSWR(url, fetcher);
  return {
    books: data, 
    error,
    isLoading: !data,
    isValidating,
  }
}