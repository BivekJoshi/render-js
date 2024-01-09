import { useMutation, useQuery, useQueryClient } from "react-query";
import toast from "react-hot-toast";
import { addUniversity, getUniversity } from "../../api/university/university-api";

export const useAddUniversity = ({ onSuccess, selectedProfile }) => {
  const queryClient = useQueryClient();
  return useMutation(
    ["addUniversity"],
    (formData) => {
      return addUniversity(formData,selectedProfile);
    },
    {
      onSuccess: (data, variables, context) => {
        onSuccess && onSuccess(data, variables, context);
        toast.success("Successfully added University");
        queryClient.invalidateQueries('getUniversity');
      },
      onError: (err, _variables, _context) => {
        toast.error(err);
      },
    }
  );
};

export const useGetUniversity = () => {
  return useQuery(['getUniversity'], () => getUniversity(), {
    refetchInterval: false,
    refetchOnWindowFocus: false,
  });
};