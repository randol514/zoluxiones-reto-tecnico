import { useQuery } from "@tanstack/react-query";
import { fetchPlans } from "@/services/api";

export const usePlans = () => {
  return useQuery({
    queryKey: ["plans"],
    queryFn: fetchPlans,
  });
};
