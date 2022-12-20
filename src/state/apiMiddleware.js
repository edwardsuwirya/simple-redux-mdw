const apiMiddleware = ({dispatch}) => next => async (action) => {
    next(action);
    if (action.type !== 'API') {
        return;
    }
    const {
        url,
        method,
        data,
        onLoading,
        onSuccess,
        onFailure
    } = action.payload;

    dispatch(onLoading());
    try {
        const result = await url(data);
        dispatch(onSuccess(result));
    } catch (e) {
        dispatch(onFailure(e));
    }
};

export default apiMiddleware;