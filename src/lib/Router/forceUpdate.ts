import {useState} from 'react';

export function useForceUpdate(){
  const [state, setState] = useState(false);
  console.log('Forced Render.');
  return () => setState(!state);
}
