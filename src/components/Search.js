import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import { GoogleInput } from './GoogleInput';
import { GoogleButton } from './GoogleButton';
import './Search.css';
import { useHistory } from 'react-router-dom';

// Redux
import { colocarTextoAction } from '../actions/textAction';
import { useDispatch } from 'react-redux';

const Search = ({ hideButtons = false }) => {

    const [input, setInput] = useState("");
    const history = useHistory();

    // Utilizar useDispatch y te crea una función
    const dispatch = useDispatch();

    const search = (e) => {
        e.preventDefault();
        dispatch(colocarTextoAction(input));
        history.push('/search');
    }

    return (
        <>
            <form className="search">
                <GoogleInput>
                    <SearchIcon className="search__inputIcon" />
                    <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
                    <MicIcon />
                </GoogleInput>
                <div className="search__buttons">
                    <GoogleButton type="submit" onClick={search} className={hideButtons ? "search__hideButtons" : ""}>Buscar con Google</GoogleButton>
                    <GoogleButton className={hideButtons ? "search__hideButtons" : ""}>Me siento con suerte</GoogleButton>
                </div>
            </form>
        </>
    );
}

export default Search;