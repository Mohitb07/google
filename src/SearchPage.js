import React from 'react'
import {useStateValue} from './StateProvider';
import useGoogleSearch from './useGoogleSearch';
import { Link } from 'react-router-dom'
import './SearchPage.css';
import Search from './Search';
import SearchIcon from '@material-ui/icons/Search'
import DescriptionIcon from '@material-ui/icons/Description'
import ImageIcon from '@material-ui/icons/Image'
import RoomIcon from '@material-ui/icons/Room'
import LocalOfferIcon from '@material-ui/icons/LocalOffer'
import MoreVertIcon from '@material-ui/icons/MoreVert'

function SearchPage() {
    const [{term}, dispatch] = useStateValue();
    const {data} = useGoogleSearch(term);

    // TESTING
    // const data = Response

    console.log(data)
    return (
        <div className="search-page">
            <div className="searchPage-header">
                <Link to="/">
                    <img className="searchPage-logo" src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt="goolge-logo"/>
                </Link>

                <div className="searchPage-body">
                     <Search hiddenbtns/>


                     <div className="options">
                        <div className="options-left">
                            <div className="searchPage-option">
                                <SearchIcon/>
                                <Link to="/all">All</Link>
                            </div>
                            <div className="searchPage-option">
                                <DescriptionIcon/>
                                <Link to="/news">News</Link>
                            </div>
                            <div className="searchPage-option">
                                <ImageIcon/>
                                <Link to="/images">Images</Link>
                            </div>
                            <div className="searchPage-option">
                                <LocalOfferIcon/>
                                <Link to="/shopping">shopping</Link>
                            </div>
                            <div className="searchPage-option">
                                <RoomIcon/>
                                <Link to="/maps">maps</Link>
                            </div>
                            <div className="searchPage-option">
                                <MoreVertIcon/>
                                <Link to="/more">more</Link>
                            </div>
                        </div>

                        <div className="options-right">
                            <div className="searchPage-option">
                                <Link to="/settings">Settings</Link>
                            </div>
                            <div className="searchPage-option">
                                <Link to="/tools">Tools</Link>
                            </div>
                        </div>
                     </div>
                </div>
            </div>

        
            {term && (
                <div className="searchPage-results">
                    <p className="count">
                        About {data?.searchInformation.formattedTotalResults} results ({data?.searchInformation.formattedSearchTime}) seconds for {term}
                    </p>

                    {data?.items.map(item =>(
                        <div className="searchPage-result">
                            <a className="link" href={item.link}>
                                {item.displayLink}
                            </a>
                            <a className="title" href={item.link}>
                                <h2>{item.title}</h2>
                            </a>
                            <p className="snippet">
                                {item.snippet}
                            </p>
                        </div>
                    ))}
                </div>
            )}
            
        </div>
    )
}

export default SearchPage;


