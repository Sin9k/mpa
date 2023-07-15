"use client";

import useSWR from "swr";

export const Content = ({ id }) => {
  const { data, error } = useSWR(
    "https://jsonplaceholder.typicode.com/todos/" + id,
    fetcher
  );
  if (error) return <h1>Failed to load</h1>;
  if (!data) return <h1>Loading...</h1>;
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
};

const fetcher = (...args) => fetch(...args).then((res) => res.json());
