import { useEffect, useState } from "react";
import { MENU_LIST } from "./Constants";

const useResturentMenu = (id) => {
  const [resData, setResData] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(MENU_LIST + id);
    const json = await data.json();
    console.log();
    setResData(json);
  };
  return resData;
};
export default useResturentMenu;
