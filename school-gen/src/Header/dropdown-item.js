import React from 'react'
import NavDropdown from 'react-bootstrap/NavDropdown';


function DDItem(props) {
  return (
    <NavDropdown.Item  href={props.href}>
   {props.item_name}
    </NavDropdown.Item>
  )
}

export default DDItem