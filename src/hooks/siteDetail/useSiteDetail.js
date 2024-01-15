import { useMutation, useQuery, useQueryClient } from "react-query";
import {
  addSiteDetail,
  getSiteDetail,
} from "../../api/siteDetail/siteDetail-api";

/*________________________GET SITE DETAIL_____________________________________*/
export const useGetSiteDetail = () => {
  return useQuery(["getSiteDetail"], () => getSiteDetail(), {
    refetchInterval: false,
    refetchOnWindowFocus: false,
  });
};

/*________________________POST SITE DETAIL_____________________________________*/
export const useAddSiteDetail = ({ onSuccess, selectedProfile }) => {
  const queryClient = useQueryClient();
  return useMutation(
    ["addSiteDetail"],
    (formData) => {
      return addSiteDetail(formData, selectedProfile);
    },
    {
      onSuccess: (data, variables, context) => {
        onSuccess && onSuccess(data, variables, context);
        toast.success("Added Country Successfully");
        queryClient.invalidateQueries("useGetCountry");
      },
      onError: (err, _variables, _context) => {
        toast.error(err);
      },
    }
  );
};
