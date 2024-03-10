import { createContext, useEffect, useState } from "react";
import axios from "../axios";
import { toast } from "react-toastify";

export const MyContext = createContext();

const HomescreenContext = ({ children }) => {
  useEffect(() => getHomescreendata(), []);

  const [homedata, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getHomescreendata = async () => {
    setIsLoading(true);
    try {
      const { data } = await axios.get(`/user/get_homeScreen`);
      setData(data);
      setIsLoading(false);
      // console.log("contextdata",data)
    } catch (error) {
      setIsLoading(false);
      if (error?.response?.data?.errors) {
        toast.error(`${error.response.data.errors[0].msg}`, {
          position: toast.POSITION.TOP_RIGHT,
        });
      } else {
        toast.error(`${error?.response?.data?.message}`, {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
    }
  };

  return (
    <MyContext.Provider value={{ homedata, setIsLoading, isLoading }}>
      {children}
    </MyContext.Provider>
  );
};

export default HomescreenContext;
