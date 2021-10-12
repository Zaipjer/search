import React from 'react';
import { Link } from 'react-router-dom';
import Search from '../components/Search';
import './SearchPage.css';
import SearchIcon from '@mui/icons-material/Search';
import ImageIcon from '@mui/icons-material/Image';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import RoomIcon from '@mui/icons-material/Room';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DescriptionIcon from '@mui/icons-material/Description';
import AppsIcon from '@mui/icons-material/Apps';
import { Avatar, Grid } from '@mui/material';
import { useSelector } from 'react-redux';
import useGoogleSearch from '../useGoogleSearch';
import Result from '../components/Result';
import ResultImage from '../components/ResultImage';
import { Box } from '@mui/system';

// Redux
import { colocarTipoAction } from '../actions/textAction';
import { useDispatch } from 'react-redux';

const SearchPage = () => {

    // Obtener el state
    const textString = useSelector((state) => state.text.textString);
    const type = useSelector((state) => state.text.type);
    const { data } = useGoogleSearch(textString);
    console.log(data);

    // Utilizar useDispatch y te crea una función
    const dispatch = useDispatch();

    const typeSearch = (type) => {
        console.log(type);
        dispatch(colocarTipoAction(type));
    }

    return (
        <div className="searchPage">
            <div className="searchPage__header">
                <div className="searchPage__headerCenter">
                    <div className="searchPage__headerCenterLeft">
                        <Link to="/">
                            <img className="searchPage__logo" src='https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png' alt='Google' />
                        </Link>
                        <Search hideButtons />
                    </div>
                    <div className="searchPage__options">
                        <div className="searchPage__optionsLeft">
                            <div className="searchPage__option">
                                <button type="button" className="searchPage__optionButton" onClick={() => typeSearch("all")}><SearchIcon fontSize="small" /> Todo</button>
                            </div>
                            <div className="searchPage__option">
                                <button type="button" className="searchPage__optionButton" onClick={() => typeSearch("news")}><DescriptionIcon fontSize="small" /> Noticias</button>
                            </div>
                            <div className="searchPage__option">
                                <button type="button" className="searchPage__optionButton" onClick={() => typeSearch("images")}><ImageIcon fontSize="small" /> Imágenes</button>
                            </div>
                            <div className="searchPage__option">
                                <button type="button" className="searchPage__optionButton" onClick={() => typeSearch("shopping")}><LocalOfferIcon fontSize="small" /> Shopping</button>
                            </div>
                            <div className="searchPage__option">
                                <button type="button" className="searchPage__optionButton" onClick={() => typeSearch("maps")}><RoomIcon fontSize="small" /> Maps</button>
                            </div>
                            <div className="searchPage__option">
                                <button type="button" className="searchPage__optionButton" onClick={() => typeSearch("more")}><MoreVertIcon fontSize="small" /> Más</button>
                            </div>
                        </div>
                        <div className="searchPage__optionsRight">
                            <div className="searchPage__option">
                                <Link to="/tools">Herramientas</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="searchPage__headerRight">
                    <AppsIcon />
                    <Avatar className="headerRight__avatar"></Avatar>
                </div>
            </div>

            {textString ?
                type === "all" ?
                    <div className="searchPage__results">
                        <p className="searchPage__resultCount">
                            Cerca de {data?.searchInformation.formattedTotalResults} resultados ({data?.searchInformation.formattedSearchTime} segundos)
                        </p>
                        {
                            data?.items.map(item => (
                                <Result key={item.cacheId} data={item} />
                            ))

                        }
                    </div>
                    : type === "images" &&
                    <Box sx={{ flexGrow: 1 }} className="searchPage__resultImage">
                        <Grid container spacing={0}>
                            {
                                data?.items.map(item => (
                                    <ResultImage key={item.cacheId} data={item} />
                                ))

                            }
                        </Grid>
                    </Box>
                :
                null
            }
        </div>
    );
}

export default SearchPage;