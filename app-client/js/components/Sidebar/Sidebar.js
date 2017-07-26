import React from 'react';

const Sidebar = () => {
  return (
    <div className="col-sm-2 sidebar">
      <div className="list-group">
        <button
          type="button"
          className="list-group-item list-group-item-action active dropdown-toggle"
        >
          Filters
        </button>
        <button type="button" className="list-group-item list-group-item-action">
          Dapibus ac facilisis in
        </button>
        <button type="button" className="list-group-item list-group-item-action">
          Morbi leo risus
        </button>
        <button type="button" className="list-group-item list-group-item-action">
          Porta ac consectetur ac
        </button>
        <button type="button" className="list-group-item list-group-item-action" disabled>
          Vestibulum at eros
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
