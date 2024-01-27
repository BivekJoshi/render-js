import { useMutation, useQuery, useQueryClient } from "react-query";
import toast from "react-hot-toast";
import { addNotice, editNotice, getNotice, getNoticeLatest } from "../../api/notice/notice-api";

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

export const useEditImage = ({ onSuccess, selectedProfile }) => {
  const queryClient = useQueryClient();
  return useMutation(
    ["editProfile"],
    (formData) => {
      return editNotice(formData,selectedProfile);
    },
    {
      onSuccess: (data, variables, context) => {
        onSuccess && onSuccess(data, variables, context);
        toast.success("Notice Edited Successfully");
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

export const useGetNoticeLatest = () => {
  return useQuery(['getNoticeLatest'], () => getNoticeLatest(), {
    refetchInterval: false,
    refetchOnWindowFocus: false,
  });
};