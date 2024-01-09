import { useMutation, useQuery } from "react-query";
import {
  addRegistation,
  getRegistation,
} from "../../api/registation/registation-api";
import toast from "react-hot-toast";

export const useGetRegistation = () => {
  return useQuery(["getCompany"], () => getRegistation(), {
    refetchInterval: false,
    refetchOnWindowFocus: false,
  });
};

export const useAddRegistation = ({ onSuccess }) => {
  return useMutation(
    ["addRegistation"],
    (formData) => addRegistation(formData),
    {
      onSuccess: (data, variables, context) => {
        toast.success(
          "Your Request is saved sucessfully you will be notified as soon as possible"
        );
        onSuccess && onSuccess(data, variables, context);
      },
      onError: (err, _variables, _context) => {
        toast.error(`${err.message}`);
      },
    }
  );
};
