import { useMutation, useQuery, useQueryClient } from "react-query";
import toast from "react-hot-toast";
import { addUniversity, editUniversity, getUniversity } from "../../api/university/university-api";

/*________________________EDIT UNIVERSITY_____________________________________*/
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

/*________________________GET UNIVERSITY_____________________________________*/
export const useGetUniversity = () => {
  return useQuery(['getUniversity'], () => getUniversity(), {
    refetchInterval: false,
    refetchOnWindowFocus: false,
  });
};

/*________________________EDIT UNIVERSITY_____________________________________*/
export const useEditUniversity = ({ onSuccess, selectedProfile }) => {
  const queryClient = useQueryClient();
  return useMutation(
    ["editUniversity"],
    (formData) => {
      return editUniversity(formData,selectedProfile);
    },
    {
      onSuccess: (data, variables, context) => {
        onSuccess && onSuccess(data, variables, context);
        toast.success("Successfully edited University");
        queryClient.invalidateQueries('getUniversity');
      },
      onError: (err, _variables, _context) => {
        toast.error(err);
      },
    }
  );
};