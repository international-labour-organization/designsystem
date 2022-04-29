import { useContext } from "react";
import { GlobalProviderContext } from "../components/GlobalProvider";

const useGlobalSettings = () => {
  const { prefix, ...rest } = useContext(GlobalProviderContext);

  return {
    prefix,
    ...rest,
  };
};

export default useGlobalSettings;
