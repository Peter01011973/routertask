import React, {useRef} from 'react';
import './Home.css';
import logo from './logo.svg';
import {connect} from 'react-redux';
import {addTrack, deleteTrack, addSearchTrack, addTracks} from '../../redux/actions';

const Home = ({ tracks, addTrack, deleteTrack, addSearchTrack, addTracks }) => {
    const trackInput = useRef('');
    const trackSearch = useRef('');

    const addTrackHandler = () => {
        addTrack(trackInput.current.value);
        trackInput.current.value = ''
    }

    const getTracksHandler = () => {
        const mockData = [
            'Song with thunk 1',
            'Song with thunk 2',
            'Song with thunk 3'
        ]
        setTimeout(()=>{
            addTracks(mockData)
        }, 3000)
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
                    <button onClick={getTracksHandler}>Get tracks</button>   
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
//         addTrack: (track) => dispatch({ type: "ADD_TRACK", payload: track }),
//         deleteTrack: (track) => dispatch({ type: "DELETE_TRACK", payload: track }),
//         addSearchTrack: (track) => dispatch({ type: "ADD_SEARCH_TRACK", payload: track }),
//         onGetTracks: () => {
//             const asyncGetTracks = () => {
//                 return dispatch => {
//                     setTimeout(() => {
//                         console.log('I got tracks');
//                         dispatch({ type: 'FETCH_TRACKS_SUCCESS', payload: [] });
//                     }, 2000)
//                 }
//             }
//             dispatch(asyncGetTracks());
//         }
//     }
// }

const mapDispatchToProps = { addTrack, deleteTrack, addSearchTrack, addTracks }

export default connect(mapStateToProps, mapDispatchToProps)(Home)
