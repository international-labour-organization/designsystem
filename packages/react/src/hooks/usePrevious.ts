import { useEffect, useRef } from "react";

// This code was shamelessly borrowed from the blog post
// "How to access previous props or state with React Hooks" by
// Ohans Emmanuel, published on LogRocket May 11, 2023
// https://blog.logrocket.com/accessing-previous-props-state-react-hooks/

export function usePrevious<T>(value: T) {
  const ref = useRef<T>();
  useEffect(() => {
    ref.current = value; //assign the value of ref to the argument
  }, [value]); //this code will run when the value of 'value' changes
  return ref.current; //in the end, return the current ref value.
}
export default usePrevious;
