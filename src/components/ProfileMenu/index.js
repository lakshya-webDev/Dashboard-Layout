import React from 'react'
import "./profileMenu.scss"
const ProfileMenu = (props) => {
    const { data, style } = props
    return (
        <div className="profileMenu" style={style}>
            <ul className="menuList">
                {data.length > 0 && data.map((val, i) => (
                    <li className="menuItem" key={i} onClick={onclick}>
                        {val.name}
                    </li>
                ))}
            </ul>
        </div>

    )
}

export default ProfileMenu   