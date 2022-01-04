import React, { useEffect, useState } from 'react'
import Search from './Search/Search';
import Table from './Table/Table';
import axios from 'axios';
import './EventList.css';
import { isGoFirstButtonDisabled, isGoLastButtonDisabled } from './EventListController';

function EventList({ setSelected, setSearchKey, searchKey }) {

    const [searchResults, setSearchResults] = useState([]);
    const [filteredResults, setFilteredResults] = useState([]);
    const [activePage, setActivePage] = useState(1);
    const [pageCount, setPageCount] = useState(1);
    const perPage = 5

    const key = '3QhbqoB1lyUOlDCsMeQIzB3BT1Sdn6TT';

    const uri = 'https://app.ticketmaster.com/discovery/v2/events.json?keyword=' + searchKey + '&apikey=' + key;

    useEffect(() => {
        axios.get(uri,)
            .then(response => {
                if (response?.data._embedded?.events) {
                    let results = response.data._embedded.events
                    setSearchResults(results)
                    setActivePage(1);
                    setPageCount(Math.floor(results.length / perPage) + 1)
                }
                else {
                    setActivePage(1);
                    setPageCount(1);
                    setSearchResults([])
                }
            })

    }, [searchKey])

    useEffect(() => {
        let filtered = searchResults.slice((activePage - 1) * perPage, activePage * perPage < searchResults.length ? activePage * perPage : searchResults.length)
        setFilteredResults(filtered)
    }, [searchResults, activePage])

    return (
        <div>
            <Search setSearchKey={setSearchKey} searchKey={searchKey} />
            <Table searchResults={filteredResults} setSelected={setSelected} />
            <div className="pagination">
                <button disabled={isGoFirstButtonDisabled(activePage)} onClick={() => setActivePage(1)}>{'<<'}</button>
                <button disabled={isGoFirstButtonDisabled(activePage)} onClick={() => setActivePage(prev => prev - 1)}>{'<'}</button>
                <button disabled>{activePage} / {pageCount - 1}</button>
                <button disabled={isGoLastButtonDisabled(activePage, pageCount)} onClick={() => setActivePage(prev => prev + 1)}>{'>'}</button>
                <button disabled={isGoLastButtonDisabled(activePage, pageCount)} onClick={() => setActivePage(pageCount - 1)}>{'>>'}</button>
            </div>
        </div>
    )
}

export default EventList;
