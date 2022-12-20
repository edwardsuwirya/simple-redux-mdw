export const apiAction = ({
                              url,
                              method = 'GET',
                              data = null,
                              onLoading = () => {
                              },
                              onSuccess = () => {
                              },
                              onFailure = () => {
                              }
                          }) => {
    return {
        type: 'API',
        payload: {
            url,
            method,
            data,
            onLoading,
            onSuccess,
            onFailure
        }
    };
}
