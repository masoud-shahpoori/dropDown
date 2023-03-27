import React, { useEffect, useState } from "react";
import { HandleChangeType } from "../../components/drop-down";
import { dataType } from "../../App";

function useDropDown(): [keyof dataType | undefined, string, HandleChangeType] {
  const [value, setValue] = useState<keyof dataType | undefined>();
  const [query, setQuery] = useState("");

  useEffect(() => {
    document.addEventListener("keypress", (e) => {
      if (e.key === "Enter") console.log("is enter");
    });
    return () => document.removeEventListener("keydown", () => {});
  }, []);

  const handleChange: HandleChangeType = (type, e) => {
    if (type === "query") {
      setValue(undefined);
      setQuery(e as string);
    } else {
      setValue(e as any);
      setQuery("");
    }
  };
  return [value, query, handleChange];
}

export default useDropDown;
