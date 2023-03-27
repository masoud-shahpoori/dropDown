import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import {
  DropDownContainer,
  DropDownItem,
  DropDownListContainer,
  InputContainer,
} from "./styledDropDown";
import { debounce } from "../../lib/services";
export type HandleChangeType = (
  type: "query" | "value",
  e?: number | string
) => void;
const DropDownContext = createContext<{ handleChange?: HandleChangeType }>({});

function DropDown({
  handleChange,
  children,
  value,
  query,
  searchAble,
  getMore,
}: {
  handleChange: HandleChangeType;
  children: ReactNode;
  value: string;
  query?: string;
  searchAble?: boolean;
  getMore: () => Promise<unknown>;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const inputRef = useRef(null);

  useEffect(() => {
    document.addEventListener("click", toggle);
    return () => {
      document.removeEventListener("click", toggle);
    };
  }, []);

  function toggle(e: MouseEvent) {
    setIsOpen(e && e.target === inputRef.current);
  }

  const getDisplayValue = () => {
    if (!!value) return value;
    return query || "";
  };
  const getDataWithSubmit = debounce(() => {
    getMore().then();
  }, 400);
  return (
    <DropDownContext.Provider value={{ handleChange: handleChange }}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          getDataWithSubmit();
        }}
      >
        <DropDownContainer>
          <InputContainer>
            <input
              ref={inputRef}
              type="text"
              value={getDisplayValue()}
              name="searchTerm"
              onChange={(e) => {
                handleChange("query", e.target.value as string);
              }}
              onClick={(e) => toggle(e as unknown as MouseEvent)}
              placeholder={"select an item"}
              readOnly={searchAble ? !searchAble : true}
              autoComplete={"off"}
            />
          </InputContainer>
          {isOpen && <DropDownListContainer>{children}</DropDownListContainer>}
        </DropDownContainer>
      </form>
    </DropDownContext.Provider>
  );
}

DropDown.Item = ({
  children,
  value,
  isSelected,
}: {
  children: ReactNode;
  value: number;
  isSelected: boolean;
}) => {
  const context = useContext(DropDownContext);
  return (
    <DropDownItem
      onClick={() => {
        if (context.handleChange) context.handleChange("value", value);
      }}
      isSelected={isSelected}
    >
      {children}
    </DropDownItem>
  );
};

export default DropDown;
