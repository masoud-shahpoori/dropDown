import React, { useCallback, useEffect, useState } from "react";
import { HandleChangeType } from "../../components/drop-down";
import { dataType } from "../../App";
let count = 8;

function useGetDropDownData(): [dataType, boolean, () => Promise<unknown>] {
  const items: dataType = {
    1: { value: "Kayaking", icon: "‍🚣🏻‍", id: 1 },
    2: { value: "Art", icon: "🎷", id: 2 },
    3: { value: "Sport", icon: "🏃🏻", id: 3 },
    4: { value: "Science", icon: "👨🏻‍🏫", id: 4 },
    5: { value: "Health", icon: "🏃🏻", id: 5 },
    6: { value: "Education", icon: "🧑🏻‍🎓", id: 6 },
    7: { value: "Tech", icon: "🧑🏻‍💻", id: 7 },
  };
  const [data, setData] = useState<dataType>(items);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const generateData = useCallback(() => {
    return () => {
      return count++;
    };
  }, []);
  const validateData = generateData();

  const getMore = () => {
    setIsLoading(true);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        setIsLoading(false);
        const newData: dataType = {};
        Array.from(Array(10)).map(() => {
          const counter = validateData();
          const index = (Math.ceil(Math.random() * 23) * counter) % 7 || 1;
          newData[counter] = {
            value: items[index].value + counter,
            icon: items[index].icon,
            id: counter,
          };
        });
        setData({ ...data, ...newData });
      }, 500);
      return resolve;
    });
  };

  return [data, isLoading, getMore];
}

export default useGetDropDownData;
