import { useQuery } from "@tanstack/react-query";
import { client } from "../hono";

export const useAdmin = () => {
  return useQuery({
    queryKey: ["admin"],
    queryFn: async () => {
      try { 
        const response = await client.api.admin.me.$get()
        
        if (response.status === 401 || response.status === 404) {
          return null
        }

        if(response.ok) {
          await client.api.admin["refresh-token"].$post()
        }
        
        return await response.json()
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (error) {
        return null
      }
    },
    retry: false,
    refetchInterval: 60 * 1000 * 15, // 1 minuto
    refetchOnWindowFocus: false,
    staleTime: 60 * 1000 * 15,
  })
}