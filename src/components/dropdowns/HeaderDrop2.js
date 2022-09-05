import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';

function HeaderDrop2() {
  return (
    <Dropdown className="mx-3">
      <Dropdown.Toggle className="border-0 p-0" variant="white" id="dropdown-basic">
        <i className="bi bi-bell fs-4"></i>
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item><Link className="fs-15 text-decoration-none text-secondary" to="/">رویداد 1</Link></Dropdown.Item>
        <Dropdown.Item><Link className="fs-15 text-decoration-none text-secondary" to="/">رویداد 2 </Link></Dropdown.Item>
        <Dropdown.Item><Link className="fs-15 text-decoration-none text-secondary" to="/">رویداد 3 </Link></Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default HeaderDrop2;