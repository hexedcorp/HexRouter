import {useState} from 'react';

export function useForceUpdate(){
  const [state, setState] = useState(false);
  return () => setState(!state);
}
