import React from 'react'
import { Link } from 'react-router-dom';
import './Table.css'

function Table({ handleSort, filteredResults, setSelected,titles }) {
    return (
        <div>
            {filteredResults.length > 0 ? <table>
                <thead>
                    <tr>
                        {titles.map((title, i) => (
                            <th key={i} onClick={() => handleSort(title)}>
                                {title} ↕
                            </th>
                        ))}
                        <th>action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        filteredResults.map((item, index) => (
                            <tr key={index}>
                                {titles.map((title, i) => (
                                    <td key={i}>
                                        {item[title]}
                                    </td>
                                ))}
                                <td>
                                    <Link to={{ pathname: `/detail/${item.id}` }}>
                                        <button onClick={() => setSelected(item)}>details →</button>
                                    </Link>
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table> :
                <span>No Data Found</span>}
        </div>
    )
}

export default Table;
