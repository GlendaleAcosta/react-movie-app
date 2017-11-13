export function showModal() {
  return {
    type: 'SHOW_MODAL',
    payload: true,
  };
}

export function closeModal() {
  return {
    type: 'CLOSE_MODAL',
    payload: false,
  };
}
