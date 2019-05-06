/* helper functions for history */
class HistoryHelper {
    get location(): string {
        window.location.pathname
        return window.location.href
    }
    goTo(path: string): void {
        window.history.pushState('', '', `/${path}`);
        window.history.go();
        return;
    }

    // so i need to take in components and return the component to render based on the current route.

    matchRoutes(componentList: any) {
        const currentPath: string = window.location.pathname;

        return componentList.filter((component: any) => {
            // we want to match the component to the current path
            console.log(currentPath, component.props.path);
            if (currentPath === component.props.route) return true
        });
    }

}
export const Helper = new HistoryHelper();
