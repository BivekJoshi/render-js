import { useMutation } from "react-query";
import { addTestimonial } from "../../api/testimonial/testimonial-api";

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
