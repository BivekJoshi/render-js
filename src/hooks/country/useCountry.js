import { useMutation, useQuery, useQueryClient } from "react-query";
import {
  addCountry,
  editCountry,
  editCountryImg,
  getCountry,
  getCountryCode,
} from "../../api/country/country-api";
import toast from "react-hot-toast";

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
        toast.success("Added Country Successfully");
        queryClient.invalidateQueries('useGetCountry');
      },
      onError: (err, _variables, _context) => {
        toast.error(err);
      },
    }
  );
};

/*________________________POST COUNTRY_____________________________________*/
export const useEditCountryImg = ({ onSuccess, selectedProfile }) => {
  const queryClient = useQueryClient();
  return useMutation(
    ["editCountryImg"],
    (formData) => {
      return editCountryImg(formData, selectedProfile);
    },
    {
      onSuccess: (data, variables, context) => {
        onSuccess && onSuccess(data, variables, context);
        toast.success("Edited Country's Image Successfully");
        queryClient.invalidateQueries('useGetCountry');
      },
      onError: (err, _variables, _context) => {
        toast.error(err);
      },
    }
  );
};

/*________________________EDIT COUNTRY_____________________________________*/
export const useEditCountry = ({ onSuccess, selectedProfile }) => {
  const queryClient = useQueryClient();
  return useMutation(
    ["editCountry"],
    (formData) => {
      return editCountry(formData, selectedProfile);
    },
    {
      onSuccess: (data, variables, context) => {
        onSuccess && onSuccess(data, variables, context);
        toast.success("Successfully edited country");
        queryClient.invalidateQueries('useGetCountry');
      },
      onError: (err, _variables, _context) => {
        toast.error(err);
      },
    }
  );
};