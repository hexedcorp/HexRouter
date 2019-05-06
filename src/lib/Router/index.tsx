import * as React from 'react';
import { useForceUpdate } from './forceUpdate';
import {Helper} from './helpers';
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
  // check if more than one child, if not then we just need to match it and render it if history is good;
  if(!Array.isArray(children)) {
    return children;
  }
  // filter the good kids from the bad kids and then render them. (for now)
  // @ts-ignore
  const picked = children.filter(child => {
    // check if child is a valid type;
    if(typeof child.type !== 'function') {
      console.warn(`Component of type ${child.type} is not a valid Router child.`);
      return false;
    }
    // now we check for a route in our child's props;
    if(!child.props.route) {
      console.error(`No route prop provided to Component ${child.type.displayName}`);
      return false;
    }
    console.log(Helper.location);
    const { route } = child.props;
    console.log(`${child.type.displayName} + ${route}`);
    return true;
  });
  console.log(Helper.matchRoutes(picked));
  return (
    Helper.matchRoutes(picked)
  )
};

interface LinkInterface {
    to: string,
    children: any
}

export const Link = ({to, children}: LinkInterface) => {
    return (
        <a onClick={() => Helper.goTo(to) }>{children}</a>
    )
}
