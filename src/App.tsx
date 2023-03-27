import React from "react";
import "./App.css";
import DropDown from "./components/drop-down";
import { IconContainer } from "./components/drop-down/styledDropDown";
import useDropDown from "./hooks/drop-down/useDropDown";
import useGetDropDownData from "./hooks/drop-down/useGetDropDownData";
import Loader from "./components/loader";
export type dataType = Record<
  string,
  { value: string; icon: string; id: number }
>;

function App() {
  const [value, query, handleChange] = useDropDown();
  const [data, isLoading, getMore] = useGetDropDownData();

  //******
  //you have option to make it search able with setting props searchAble=true in DropDown
  //******

  return (
    <div className="App">
      <DropDown
        handleChange={handleChange}
        value={(value && data[value as string].value) || query || ""}
        searchAble={true}
        getMore={getMore}
      >
        {isLoading && <Loader />}
        {Object.values(data)
          .filter((item) =>
            item.value.toLowerCase().includes(query.toLowerCase())
          )
          .map((item) => {
            return (
              <DropDown.Item
                value={item.id}
                key={item.id}
                isSelected={(item.id as unknown as string) === value}
              >
                <span className={"flex items-center"}>
                  {item.value}
                  <IconContainer>{item.icon}</IconContainer>
                </span>

                <span>{(item.id as unknown as string) === value && "✅"} </span>
              </DropDown.Item>
            );
          })}
      </DropDown>
    </div>
  );
}

export default App;
