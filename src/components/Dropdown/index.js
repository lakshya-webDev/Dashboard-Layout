import React from 'react'
import "./dropdwon.scss"
const Dropdown = (props) => {
  const {data} =props
    return (
        <div className="dropdownMenu">
            <ul className="menuList">
                {data.length > 0 && data.map((val,i)=>(
                <li className="menuItem" key={i}>
                   {val.name}
                </li>
                ))}
            </ul>
        </div>

    )
}

export default Dropdown   