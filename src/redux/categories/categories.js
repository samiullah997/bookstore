const STATUS_CHEKCKED = 'STATUS_CHEKCKED';

const categoriesReducer = (state = '', action) => {
  switch (action.type) {
    case STATUS_CHEKCKED:
      return 'Under construction';
    default:
      return state;
  }
};

export const checkStatus = () => ({ type: STATUS_CHEKCKED });

export default categoriesReducer;
