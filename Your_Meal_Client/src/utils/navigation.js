let navigator;

export const setNavigator = (nav) => {
    navigator = nav;
};

export const navigate = (to, state) => {
    if (navigator) {
        navigator(to, { state });
    }
};