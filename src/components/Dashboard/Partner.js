import React  from 'react'
import { FaTrashCan,FaPencil } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import './Partner.css'

const Partner = () => {
  return (
    <div className='tableWrapper'>Partner Project

     
     <Link to='/partnerform'>
         <button>Add Partner</button>
     </Link>

        <table className='table'>
            <thead>
                <tr>
                    <th>Organization</th>
                    <th className='expand'>Project</th>
                    <th>Status</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>KCDF</td>
                    <td >Narok Beading Project to economically empower women in rural areas</td>
                    <td>
                        <span className='label label-live'>Live</span>
                    </td>
                    {/* icons from react-icons */}
                    <td>
                        <span className='actions'>
                            <FaTrashCan className='delete-btn' />
                            <FaPencil />
                        </span>
                    </td>

                </tr>

                <tr>
                    <td>MEDA</td>
                    <td>Malindi Tree Planting Monitoring</td>
                    <td>
                        <span className='label label-draft'>Draft</span>
                    </td>
                    {/* icons from react-icons */}
                    <td>
                        <span className='actions'>
                            <FaTrashCan className='delete-btn' />
                            <FaPencil />
                        </span>
                    </td>

                </tr>

                <tr>
                    <td>AROCHA</td>
                    <td>Mangrove forests</td>
                    <td>
                        <span className='label label-done'>Done</span>
                    </td>
                    {/* icons from react-icons */}
                    <td>
                        <span className='actions'>
                            <FaTrashCan className='delete-btn' />
                            <FaPencil />
                        </span>
                    </td>

                </tr>

            </tbody>
        </table>
    </div>
  )
}

export default Partner