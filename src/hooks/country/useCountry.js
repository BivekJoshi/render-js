import { useMutation, useQuery, useQueryClient } from "react-query";
import {
  addCountry,
  getCountry,
  getCountryCode,
} from "../../api/country/country-api";

/*________________________GET_____________________________________*/
export const useGetCountry = () => {
  return useQuery(["getCountry"], () => getCountry(), {
    refetchInterval: false,
    refetchOnWindowFocus: false,
  });
};

/*________________________GET COUNTRY CODE_____________________________________*/
export const useGetCountryCode = () => {
  return useQuery(["getCountryCode"], () => getCountryCode(), {
    refetchInterval: false,
    refetchOnWindowFocus: false,
  });
};

/*________________________POST COUNTRY_____________________________________*/
export const useAddCountry = ({ onSuccess, selectedProfile }) => {
  const queryClient = useQueryClient();
  return useMutation(
    ["addProfile"],
    (formData) => {
      return addCountry(formData, selectedProfile);
    },
    {
      onSuccess: (data, variables, context) => {
        onSuccess && onSuccess(data, variables, context);
        toast.success("Profile Picture Successfully Changed");
        queryClient.invalidateQueries('useGetCountry');
      },
      onError: (err, _variables, _context) => {
        toast.error(err);
      },
    }
  );
};
