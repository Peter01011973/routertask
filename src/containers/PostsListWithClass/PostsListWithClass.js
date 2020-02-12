import React, { Component } from 'react';
import './PostsListWithClass.css';
import { baseAPI } from '../../globalConst';
import axios from 'axios';
import CARDrender from '../../components/PostsListRender/PostsListRender';
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

    deleteItemHandler = async (event, id) => {
        event.stopPropagation();
        this.axiosHandler(baseAPI + `/${id}`, { method: 'DELETE' })
    }
    editItemHandler = (event, Data) => {
        event.stopPropagation();
        this.addOREditData = Data;
        this.setState({ editItem: true })
    }
    selectItemHandler = id => this.props.history.push(`/CRAD/${id}`)

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

    onAddHandler = () => {
        this.addOREditData = null;
        this.setState({ addNewItem: true })
    }

    render() {
        const { data, isLoading, error } = this.state
        return (
            <CARDrender
                error={error}
                isLoading={isLoading}
                data={data}
                editItemHandler={this.editItemHandler}
                addNewItem={this.state.addNewItem}
                selectItemHandler={this.selectItemHandler}
                deleteItemHandler={this.deleteItemHandler}
                onAddHandler={this.onAddHandler}
                addOREditData={this.addOREditData}
                afterAddOReditHandle={this.afterAddOReditHandle}
                editItem={this.state.editItem}
            />
        )
    }
}
