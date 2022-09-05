import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';

function HeaderDrop1() {
  return (
    <Dropdown>
      <Dropdown.Toggle className="border-0 p-0" variant="white" id="dropdown-basic">
      <span  className="position-absolute  translate-middle badge rounded-pill bg-danger">
          3
      </span>
      <i className="bi bi-envelope fs-4"></i>
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item><Link className="fs-15 text-decoration-none text-secondary" to="/">پیام 1</Link></Dropdown.Item>
        <Dropdown.Item><Link className="fs-15 text-decoration-none text-secondary" to="/">پیام 2</Link></Dropdown.Item>
        <Dropdown.Item><Link className="fs-15 text-decoration-none text-secondary" to="/">پیام 3</Link></Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default HeaderDrop1;