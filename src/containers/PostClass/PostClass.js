import React from 'react';
import './PostClass.css';
import {baseAPI} from '../../globalConst';
import {Component} from 'react';
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
        this.addOREditData=null;
    }

    async refresh() {
        this.setState({isLoading: true})
        try {            
            const result = await axios(baseAPI, {});
            this.setState({
                data: result.data,
                isLoading: false
            })
        } catch(error) {
            this.setState({
                error,
                isLoading: false
            })
        }
    }
    
    componentDidMount() {this.refresh()}

    deleteItem = async id => { 
        try {            
            const result = await axios(baseAPI+`/${id}`, {method: 'DELETE'});
            this.setState({
                // data: result.data,
                isLoading: false
            })
            this.refresh()
        } catch(error) {
            this.setState({
                error,
                isLoading: false
            })
        }            
    }


    render() {

        const afterAddOReditHandle = async (data) => {
            
            // edit data PATCH
            if (this.state.editItem) {                
                try {
                    const result = await axios(baseAPI + `/${data.id}`, { method: 'PATCH', data });
                    this.setState({
                        // data: result.data,
                        isLoading: false
                    })
                    this.refresh()
                } catch (error) {
                    this.setState({
                        error,
                        isLoading: false
                    })
                }
                this.setState({ editItem: false })
            }
    
            // add new item POST
            if (this.state.addNewItem) {                
                try {
                    const result = await axios(baseAPI, { method: 'POST', data });
                    this.setState({
                        // data: result.data,
                        isLoading: false
                    })
                    this.refresh()
                } catch (error) {
                    this.setState({
                        error,
                        isLoading: false
                    })
                }
                this.setState({ addNewItem: false })
            }
        }
    

        const editItem = Data => {
            this.addOREditData = Data;
            this.setState({editItem: true})
        }
        const selectItem = id => this.props.history.push(`/CRAD/${id}`)
        const { data, isLoading, error } = this.state

        if (error) return <p>{error.message}</p>;
        if (isLoading) return <p>Loading ...</p>;
        if (!data) return <p>No data yet ...</p>;

        const renderItems = data ? data.map(
            (item, index) => {
                return (
                    <div key={index} className='item'>
                        {/* TODO ask Dima about about using bind to send param */}
                        <span className='item__title' onClick={selectItem.bind(null, item.id)}>{item.title}</span>
                        <button type="button" onClick={this.deleteItem.bind(null, item.id)}>Delete</button>
                        <button type="button" onClick={editItem.bind(null, item)}>Edit</button>
                    </div>
                )
            }
        ) : null

        return (
            <div className='container'>
                {(!this.state.editItem && !this.state.addNewItem) && <button onClick={() => {this.addOREditData = null; this.setState({addNewItem: true})} }>Add new item</button>}
                {(this.state.editItem || this.state.addNewItem) && <AddOREdit itemData={this.addOREditData} afterAddOReditHandle={afterAddOReditHandle}/>}
                {renderItems}
            </div>
        );
    }
}
