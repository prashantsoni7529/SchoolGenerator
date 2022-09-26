import React from 'react'
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useState } from 'react';
import DDItem from "./dropdown-item";

function Dropdown(props) {
    const [status, setStatus] = useState(props.dropdown_obj.map(function(x){x.show=false; return x.show;}));
    const updateStatus = (value, index) => {
      const clone = [...status];
      clone[index] = value;
      setStatus(clone);
  }

  return (
    <>
    <NavDropdown   show={status[props.index]} onMouseOver={e => updateStatus(true, props.index)}  onMouseOut={e => updateStatus(false, props.index)} title={props.title} bg={props.bg} variant={props.variant} >
    `{
        props.dd_item_menu.map(function(x,y){
            return <DDItem key={y} href={x.href} ind={x.i} item_name={x.item_name}/>
        })

    }`
    </NavDropdown>

    </>
  )
}

export default Dropdown