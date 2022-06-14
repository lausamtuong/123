import React from 'react'
import './overall-list.scss'
import { data } from '../../constants'
import {AiOutlineDollarCircle} from "react-icons/ai"
import {MdManageAccounts} from "react-icons/md"
import {FcMindMap,FcPositiveDynamic,FcNightPortrait} from "react-icons/fc"
const icons = [
     <AiOutlineDollarCircle/>,
    <FcNightPortrait/>,
    <FcMindMap/>,
  <FcPositiveDynamic/>
]

const OverallList = () => {
    return (
        <ul className='overall-list'>
            {
                data.overall.map((item, index) => (
                    <li className="overall-list__item" key={`overall-${index}`}>
                        <div className="overall-list__item__icon">
                            {icons[index]}
                        </div>
                        <div className="overall-list__item__info">
                            <div className="title">
                                {item.value}
                            </div>
                            <span>{item.title}</span>
                        </div>
                    </li>
                ))
            }
        </ul>
    )
}

export default OverallList
