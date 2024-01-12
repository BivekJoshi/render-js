import { useMutation, useQuery, useQueryClient } from "react-query";
import toast from "react-hot-toast";
import { addNotice, getNotice } from "../../api/notice/notice-api";

export const useAddImage = ({ onSuccess, selectedProfile }) => {
  const queryClient = useQueryClient();
  return useMutation(
    ["addProfile"],
    (formData) => {
      return addNotice(formData,selectedProfile);
    },
    {
      onSuccess: (data, variables, context) => {
        onSuccess && onSuccess(data, variables, context);
        toast.success("Notice Added Successfully");
        queryClient.invalidateQueries('getNotice');
      },
      onError: (err, _variables, _context) => {
        toast.error(err);
      },
    }
  );
};

export const useGetNotice = () => {
  return useQuery(['getNotice'], () => getNotice(), {
    refetchInterval: false,
    refetchOnWindowFocus: false,
  });
};