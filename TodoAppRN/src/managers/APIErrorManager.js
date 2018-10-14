class APIErrorManager {
  hasError = responseData => {
    const { response, name, status } = responseData;
    if (status && status >= 400) {
      return true;
    }
    if (response && response.status >= 400) {
      return true;
    }
    if (name === 'Error') {
      return true;
    }

    return false;
  };
}

export default new APIErrorManager();
