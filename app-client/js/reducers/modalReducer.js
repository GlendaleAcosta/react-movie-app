export default function reducer(state = {
  showModal: false,
}, action) {
  switch (action.type) {
    case 'SHOW_MODAL': {
      return { ...state, showModal: action.payload };
    }
    case 'CLOSE_MODAL': {
      return { ...state, showModal: action.payload };
    }
    default: return state;
  }
}
