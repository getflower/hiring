import useSWR from "swr";

export const useGetProducts = () =>
  useSWR("/api/products", (url) => fetch(url).then((res) => res.json()));
