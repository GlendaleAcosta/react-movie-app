import React from 'react';

const style = {
  height: 'calc(100vh - 56px)',
  backgroundColor: 'lightpink',
  position: 'fixed',
};

const Sidebar = () => {
  return (
    <div className="col-sm-2" style={style}>
      Sidebar
    </div>
  );
};

export default Sidebar;