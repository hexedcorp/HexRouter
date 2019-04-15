import * as React from 'react';
import { useForceUpdate } from './forceUpdate';

// react will get mad if people don't use this with typescript;
export type HexRouterComponentProps<TParams = {}> = Partial<TParams> & {
  route?: string;
  default?: boolean;
  uri?: string;
};
export const Router = ({children}: any) => {
  // hook to force component to update.
  const forceUpdate = useForceUpdate;
  // add event listener for popstate on mount and unmount via effect.
  React.useEffect(() => {
    // componentDidMount sorta
    addEventListener('popstate', forceUpdate);
    // componentWillUnmount basically
    return () => removeEventListener('popstate', forceUpdate);
    // empty param so it's only called when component mounts and un-mounts.
  }, []);
  // lets be annoying about the router not having any company.
  if(!children) {
    console.error('No children provided to the Router.');
    return null;
  }
  // for now we're going to loop over the array of children, just to see what's going on.
  // @ts-ignore
  children.forEach(child => {
    // check if child is a valid type;
    if(typeof child.type !== 'function') {
      console.warn(`Component of type ${child.type} is not a valid Router child.`)
      return null;
    }
    // now we check for a route in our child's props;
    if(!child.props.route) {
      console.error(`No route prop provided to Component ${child.type.displayName}`);
      return null;
    }
    const { route } = child.props;
    console.log(`${child.type.displayName} + ${route}`);
  });
  // return all children for now because we're not comparing anything yet.
  return (
    children
  )
};
