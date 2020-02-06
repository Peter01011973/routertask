// import React from 'react';
// import baseAPI from '../../globalConst';

// const getAll = async () => {
//     let data = null;
//     try {            
//         const result = await axios(baseAPI, {method: 'GET'});
//         this.setState({
//             data: result.data,
//             isLoading: false
//         })
//     } catch(error) {
//         this.setState({
//             error,
//             isLoading: false
//         })
//     }    
// }



// import {Component} from 'react';
// import axios from 'axios';

// export default class Fetcher extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             isLoading: false,
//             error: null,
//             data: null
//         }
//     }

//     async componentDidMount() {
//         const {url, payload={}} = this.props;
//         this.setState({isLoading: true})
//         try {
//             console.log('Fetcher',url,payload);
            
//             const result = await axios(url, payload);
//             this.setState({
//                 data: result.data,
//                 isLoading: false
//             })
//         } catch(error) {
//             this.setState({
//                 error,
//                 isLoading: false
//             })
//         }
//     }

//     render() {
//         return this.props.children(this.state);
//     }
// }

