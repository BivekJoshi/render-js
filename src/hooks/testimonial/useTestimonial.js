import { useMutation, useQuery } from "react-query";
import { addTestimonial, getTestimonial } from "../../api/testimonial/testimonial-api";
import toast from "react-hot-toast";

/*_____________________________POST TESTIMONIAL_______________________________________________ */
export const useAddTestimonial = ({ onSuccess }) => {
  return useMutation(
    ["addTestimonial"],
    (formData) => addTestimonial(formData),
    {
      onSuccess: (data, variables, context) => {
        toast.success("Thank you for your FeedBack");
        onSuccess && onSuccess(data, variables, context);
      },
      onError: (err, _variables, _context) => {
        toast.error(`${err.message}`);
      },
    }
  );
};

/*_____________________________GET TESTIMONIAL_______________________________________________ */
export const useGetTestimonial = () => {
  return useQuery(["getTestimonial"], () => getTestimonial(), {
    refetchInterval: false,
    refetchOnWindowFocus: false,
  });
};
