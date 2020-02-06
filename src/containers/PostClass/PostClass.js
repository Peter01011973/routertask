import React, {Component} from 'react';
import './PostClass.css';
import {baseAPI} from '../../globalConst';
import axios from 'axios';
import AddOREdit from './AddOREdit/addORedit';
export default class PostClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            error: null,
            data: null,
            addNewItem: false,
            editItem: false
        }
        this.addOREditData = null;
    }

    async axiosHandler(url, payload) {
        this.setState({ isLoading: true })
        try {
            const result = await axios(url, payload);
            if (payload.method === 'GET') {
                this.setState(
                    {
                        data: result.data,
                        isLoading: false
                    }
                )
            } else {
                const result = await axios(baseAPI, { method: 'GET' });
                this.setState({
                    isLoading: false,
                    data: result.data
                })
            }
        } catch (error) {
            this.setState({
                error,
                isLoading: false
            })
        }
    }

    componentDidMount() { this.axiosHandler(baseAPI, { method: 'GET' }) }

    deleteItem = async id => this.axiosHandler(baseAPI + `/${id}`, { method: 'DELETE' })
    editItem = Data => {
        this.addOREditData = Data;
        this.setState({ editItem: true })
    }
    selectItem = id => this.props.history.push(`/CRAD/${id}`)

    afterAddOReditHandle = async (data) => {
        // edit data PATCH
        if (this.state.editItem) {
            this.axiosHandler(baseAPI + `/${data.id}`, { method: 'PATCH', data });
            this.setState({ editItem: false })
        }
        // add new item POST
        if (this.state.addNewItem) {
            this.axiosHandler(baseAPI, { method: 'POST', data });
            this.setState({ addNewItem: false })
        }
    }

    render() {
        const { data, isLoading, error } = this.state

        if (error) return <p>{error.message}</p>;
        if (isLoading) return <p>Loading ...</p>;
        if (!data) return <p>No data yet ...</p>;

        const renderItems = data ? data.map(
            (item, index) => {
                return (
                    <div key={index} className='item'>
                        {/* TODO ask Dima about about using bind to send param */}
                        <span className='item__title' onClick={this.selectItem.bind(null, item.id)}>{item.title}</span>
                        <button type="button" onClick={this.deleteItem.bind(null, item.id)}>Delete</button>
                        <button type="button" onClick={this.editItem.bind(null, item)}>Edit</button>
                    </div>
                )
            }
        ) : null

        return (
            <div className='container'>
                {(!this.state.editItem && !this.state.addNewItem) && <button onClick={() => { this.addOREditData = null; this.setState({ addNewItem: true }) }}>Add new item</button>}
                {(this.state.editItem || this.state.addNewItem) && <AddOREdit itemData={this.addOREditData} afterAddOReditHandle={this.afterAddOReditHandle} />}
                {renderItems}
            </div>
        );
    }
}
