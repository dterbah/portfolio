import axios from "axios";

const sendForm = async (form: {
  name: string;
  message: string;
  email: string;
}): Promise<boolean> => {
  const response = await axios.post(import.meta.env.VITE_GET_FORM_URL, form, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  return response.status === 200;
};

export default sendForm;
