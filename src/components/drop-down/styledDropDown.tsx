import styled from "@emotion/styled";

export const InputContainer = styled.div`
  width: 100%;
  input {
    width: 100%;
    padding: 8px 5px;
    border-radius: var(--radius-2);
    border: 1px solid var(--medium-border);
    font-size: var(--font-size);
    &:disabled {
      background: white;
      color: unset;
      cursor: pointer;
    }
  }
`;

export const DropDownContainer = styled.div`
  position: relative;
  width: 250px;
  margin: 0 auto;
`;

export const FormContainer = styled.form`
  position: relative;
  margin-top: 30vh;
`;

export const DropDownListContainer = styled.div`
  margin-top: 20px;
  border-radius: var(--radius-2);
  width: 100%;
  display: block;
  border: 1px solid var(--light-border);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -4px rgba(0, 0, 0, 0.1);
  padding: 8px;
  max-height: 300px;
  overflow-y: scroll;
`;

export const DropDownItem = styled.div(
  ({ isSelected }: { isSelected: boolean }) => ({
    padding: " 5px",
    cursor: "pointer",
    color: isSelected ? "var(--active-color)" : "#000",
    background: isSelected ? "var(--light-background)" : "white",
    borderRadius: "var(--radius-1)",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: "var(--font-size)",
  })
);

export const IconContainer = styled.div`
  font-size: 20px;
  margin: 0 3px;
`;
