import { useMutation, useQuery, useQueryClient } from "react-query";
import toast from "react-hot-toast";
import { addStaff, editStaff, getStaff } from "../../api/staff/staff-api";

export const useAddStaff = ({ onSuccess, selectedProfile }) => {
  const queryClient = useQueryClient();
  return useMutation(
    ["addProfile"],
    (formData) => {
      return addStaff(formData,selectedProfile);
    },
    {
      onSuccess: (data, variables, context) => {
        onSuccess && onSuccess(data, variables, context);
        toast.success("Team Member added successfully");
        queryClient.invalidateQueries('getStaff');
      },
      onError: (err, _variables, _context) => {
        toast.error(err);
      },
    }
  );
};

export const useEditStaff = ({ onSuccess, selectedProfile }) => {
  const queryClient = useQueryClient();
  return useMutation(
    ["editProfile"],
    (formData) => {
      return editStaff(formData,selectedProfile);
    },
    {
      onSuccess: (data, variables, context) => {
        onSuccess && onSuccess(data, variables, context);
        toast.success("Team Member detail edited successfully");
        queryClient.invalidateQueries('getStaff');
      },
      onError: (err, _variables, _context) => {
        toast.error(err);
      },
    }
  );
};

export const useGetStaff = () => {
  return useQuery(['getStaff'], () => getStaff(), {
    refetchInterval: false,
    refetchOnWindowFocus: false,
  });
};