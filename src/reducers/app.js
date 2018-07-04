const initialState = {
  message: 'hello world'
};

export { initialState };

// @todo spread operarion is not working
// const app = (state = initialState, { type, ...payload }) => {
const app = (state = initialState, { type, payload }) => {
  switch (type) {
    default:
      return state;
  }
};

export default app;
