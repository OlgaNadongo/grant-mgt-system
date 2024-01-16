import React from 'react'
import { FaTrashCan,FaPencil } from "react-icons/fa6";
import './Partner.css'

const Partner = () => {
  return (
    <div>Partner Project
        <table>
            <thead>
                <tr>
                    <th>Organization</th>
                    <th>Project</th>
                    <th>Status</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>KCDF</td>
                    <td>Narok Beading Project</td>
                    <td>
                        <span>Live</span>
                    </td>
                    {/* icons from react-icons */}
                    <td>
                        <span>
                            <FaTrashCan />
                            <FaPencil />
                        </span>
                    </td>

                </tr>

                <tr>
                    <td>Home</td>
                    <td>Malindi Tree Planting Monitoring</td>
                    <td>
                        <span>Live</span>
                    </td>
                    {/* icons from react-icons */}
                    <td>
                        <span>
                            <FaTrashCan />
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