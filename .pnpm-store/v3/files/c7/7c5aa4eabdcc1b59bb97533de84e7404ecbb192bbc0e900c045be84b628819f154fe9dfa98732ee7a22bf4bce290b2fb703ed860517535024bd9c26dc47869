import { useContext } from 'react';
import invariant from 'tiny-invariant';
export default function useRequiredContext(Context) {
    const value = useContext(Context);
    invariant(value, 'Could not find context value');
    return value;
}
