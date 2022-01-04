import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './Table.css'

function Table({ searchResults, setSelected }) {
    const [titles, setTitles] = useState([]);

    useEffect(() => {
        const titlesDummy = ['name', 'id', 'locale']
        setTitles(titlesDummy)
    }, [searchResults])

    return (
        <div>
            {searchResults.length > 0 ? <table>
                <thead>
                    <tr>
                        {titles.map((title, i) => (
                            <th key={i}>
                                {title}
                            </th>
                        ))}
                        <th>action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        searchResults.map((item, index) => (
                            <tr key={index}>
                                {titles.map((title, i) => (
                                    <td key={i}>
                                        {item[title]}
                                    </td>
                                ))}
                                <td>
                                    <Link to={{pathname: `/detail/${item.id}`}}>
                                        <button onClick={() => setSelected(item)}>details</button>
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
