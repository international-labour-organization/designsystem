import { useContext } from "react";
import { GlobalProviderContext } from "../components/GlobalProvider";

const useGlobalSettings = () => {
  const context = useContext(GlobalProviderContext);
  if (!context) {
    throw new Error("useGlobalSettings must be used within a GlobalProvider");
  }
  return context;
};

export default useGlobalSettings;
