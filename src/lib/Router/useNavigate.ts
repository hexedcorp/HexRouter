import {useState} from "react";

export const useNavigate = (to) => {
    const [state, setState] = useState(to);
    return(() => {
        window.history.pushState('', '', `/${state}`);
    })
}
