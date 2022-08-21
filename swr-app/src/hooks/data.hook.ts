import useSWR from "swr";

import config from "../config";

const fetcher = (...args: any) => fetch(args[0], args[1]).then(res => res.json());

const swrOptions = {
  revalidateOnFocus: false,
  revalidateOnReconnect: false,
 // refreshInterval: 10000,
}

export const useRamdomBooks = (count: number) => {
  const url = `${config.apiUrl}/books/random-books?count=${count}`;
  const { data, error, isValidating, mutate } = useSWR(url, fetcher, swrOptions);
  return {
    books: data,
    error,
    isLoading: !data,
  }
}

export const useCategories = () => {
  const url = `${config.apiUrl}/categories`;
  const { data, error} = useSWR(url);
  return {
    categories: data,
    error, 
    isLoading: !data,
  }
}

export const useBookCategory = (categoryId: number) => {
  //const url = `${config.apiUrl}/books`;
  const url = `${config.apiUrl}/books/category/${categoryId}`;
  const { data, error} = useSWR(url);
  debugger;
  return {
    books: data, 
    error,
    isLoading: !data,
  }
}