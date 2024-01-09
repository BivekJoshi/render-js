import { useQuery } from "react-query";
import { getSiteDetail } from "../../api/siteDetail/siteDetail-api";

/*________________________GET SITE DETAIL_____________________________________*/
export const useGetSiteDetail = () => {
    return useQuery(["getSiteDetail"], () => getSiteDetail(), {
      refetchInterval: false,
      refetchOnWindowFocus: false,
    });
  };