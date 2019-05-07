/* helper class for history */
class HistoryHelper {
    get location(): string {
        window.location.pathname
        return window.location.href
    }
    goTo(path: string, delay: number): void {
        /* need to override the popstate function, since the event is not being called on page forward which is fucking up which component we render.
           Also need a timeout manager since clicking multiple links will most likely invoke multiple timeouts.
        */
        window.setTimeout(() => {
            window.history.pushState(`${new Date()}`, '', `/${path}`); // add the date cuz y not
            window.history.back();
        }, delay);
        return;
    }
    // need to fix the typings on this at some point, it gets pissy when i specify the childrens props so any will do.
    matchRoutes(componentList: any) {
        const currentPath: string = window.location.pathname;
        return componentList.filter((component: any) => {
            // we want to match the component to the current path
            if (currentPath === component.props.route) return true
        });
    }
}
export const Helper = new HistoryHelper();
