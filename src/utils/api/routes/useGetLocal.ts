import { client } from "../hono";
import { useQuery } from "@tanstack/react-query";

export const useGetLocal = (id?: string) => {
  const query = useQuery({
    enabled:!!id,
    queryKey: ['locals', { id }],
    queryFn: async () => {
      if(!id) throw new Error("Id is required")
      const response = await client.api.locals[':id'].$get({
        param: {
          id
        }
      });
      if (!response.ok) throw new Error('failed to fecth local');
      const res = await response.json();
      return res ;
    },
  });
  return query;
}