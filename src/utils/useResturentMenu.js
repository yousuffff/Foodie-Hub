import { useEffect, useState } from "react";
import { MENU_LIST } from "./Constants";

const useResturentMenu = (id) => {
  const [resData, setResData] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(MENU_LIST + id);
      const json = await data.json();
      console.log();
      setResData(json);
    } catch (error) {
      console.log(error);
    }
  };
  return resData;
};
export default useResturentMenu;
