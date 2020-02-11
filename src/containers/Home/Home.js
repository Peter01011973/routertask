import React, {useRef} from 'react';
import './Home.css';
import logo from './logo.svg';
import {connect} from 'react-redux';
import {addTrack, deleteTrack, addSearchTrack} from '../../redux/actions';

const Home = ({ tracks, addTrack, deleteTrack, addSearchTrack }) => {
    const trackInput = useRef('');
    const trackSearch = useRef('');

    const addTrackHandler = () => {
        addTrack(trackInput.current.value);
        trackInput.current.value = ''
    }

    return (
        <div className='home'>
            <div className='title'>
                <h1>React Router is an awesome tool!</h1>
                <img src={logo} className="App-logo" alt="logo" />
            </div>
            <div className='track'>
                <div className='home__form'>
                <div>
                    <label>
                        Track name:
                        </label>
                    <input className='home__input' type='text' ref={trackInput} />
                        <button onClick={addTrackHandler}>Add track</button>
                </div>
                <div>
                    <label>
                        Track search:
                    </label>
                    <input className='home__input' type='text' ref={trackSearch} />
                        <button onClick={() => { addSearchTrack(trackSearch.current.value) }}>Search track</button>                   
                </div>
                <div className='get-track'>
                    <button>Get track</button>   
                </div>
                </div>
                <ul className='tracks'>
                    {tracks && tracks.map((track, index) => {
                        return (
                            <li key={index} className='track__item'>{track}
                                <button onClick={() => { deleteTrack(track) }}>Delete</button>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

const mapStateToProps = ({reducerTrack: {tracks}, searchReducer}) => {
    return {
        tracks: tracks.filter(track => track.includes(searchReducer))
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         addTrack: (track) => dispatch({type: "ADD_TRACK", payload: track}),
//         deleteTrack: (track) => dispatch({type: "DELETE_TRACK", payload: track}),
//         addSearchTrack: (track) => dispatch({type: "ADD_SEARCH_TRACK", payload: track})
//     }
// }

const mapDispatchToProps = { addTrack, deleteTrack, addSearchTrack }

export default connect(mapStateToProps, mapDispatchToProps)(Home)
