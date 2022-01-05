import React from 'react';
import { Link } from 'react-router-dom';
import './EventDetail.css'

function EventDetail({ selected, setSearchKey }) {

    return (
        <div className="event-detail">
            <div>Event Details</div>
            <div>Name: {selected.name}</div>
            <div>ID: {selected.id}</div>
            <div>URL: {selected.url}</div>
            <div>Classifications: <small>Click category for search</small></div>
            {selected?.classifications?.map((item, i) => (
                <div key={i}>
                    {Object.keys(item).map((key, index) => (
                        item[key].name &&
                        <Link key={index} to="/">
                            <button onClick={() => setSearchKey(item[key].name)}>{item[key].name}</button>
                        </Link>
                    ))}
                </div>
            ))}

        </div>
    )
}

export default EventDetail;