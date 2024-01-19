import { useMutation, useQuery, useQueryClient } from "react-query";
import { addStudent, editStudent, getStudent } from "../../api/student/student-api";
import toast from "react-hot-toast";

/*________________________POST_____________________________________*/
export const useAddStudent = ({ onSuccess, selectedProfile }) => {
  const queryClient = useQueryClient();
  return useMutation(
    ["addStudent"],
    (formData) => {
      return addStudent(formData, selectedProfile)},
    {
      onSuccess: (data, variables, context) => {
        toast.success("Succesfully added Student");
        onSuccess && onSuccess(data, variables, context);
        queryClient.invalidateQueries('getStudent');
      },
      onError: (err, _variables, _context) => {
        toast.error(`${err.message}`);
      },
    }
  );
};

/*________________________EDIT_____________________________________*/
export const useEditStudent = ({ onSuccess, selectedProfile }) => {
  const queryClient = useQueryClient();
  return useMutation(
    ["editStudent"],
    (formData) => {
      return editStudent(formData, selectedProfile)},
    {
      onSuccess: (data, variables, context) => {
        toast.success("Succesfully edited Students Info");
        onSuccess && onSuccess(data, variables, context);
        queryClient.invalidateQueries('getStudent');
      },
      onError: (err, _variables, _context) => {
        toast.error(`${err.message}`);
      },
    }
  );
};

export const useGetStudent = () => {
  return useQuery(['getStudent'], () => getStudent(), {
    refetchInterval: false,
    refetchOnWindowFocus: false,
  });
};