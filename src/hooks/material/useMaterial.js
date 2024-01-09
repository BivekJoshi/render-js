import { useMutation, useQuery, useQueryClient } from "react-query";
import toast from "react-hot-toast";
import { addMaterial, getMaterial } from "../../api/material/material-api";


export const useGetMaterial = () => {
    return useQuery(['getMaterial'], () => getMaterial(), {
      refetchInterval: false,
      refetchOnWindowFocus: false,
    });
  };


export const useAddMaterial = ({ onSuccess, selectedProfile }) => {
  const queryClient = useQueryClient();
  return useMutation(
    ["addProfile"],
    (formData) => {
      return addMaterial(formData,selectedProfile);
    },
    {
      onSuccess: (data, variables, context) => {
        onSuccess && onSuccess(data, variables, context);
        toast.success("Material Added Sucessfully");
        queryClient.invalidateQueries('getMaterial');
      },
      onError: (err, _variables, _context) => {
        toast.error(err);
      },
    }
  );
};

