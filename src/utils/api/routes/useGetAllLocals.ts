import { client } from "../hono";
import { useQuery } from "@tanstack/react-query";

export const useGetAllLocals = () => {
  const query = useQuery({
    queryKey: ['locals'],
    queryFn: async () => {
      const response = await client.api.locals.$get();
      if (!response.ok) throw new Error('failed to fecth account');
      const res = await response.json();
      return res ;
    },
  });
  return query;
}