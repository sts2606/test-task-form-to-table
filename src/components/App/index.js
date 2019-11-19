import React, { Component } from 'react';
import Form from '../Form';
import Table from '../Table';
import './app.css'


export default class extends Component {

    idMax = 100;

    state = {
        data: []
    }

    createItem(firstName, lastName, phone, gender, age) {
        return {
            firstName,
            lastName,
            phone,
            gender,
            age,
            id: this.idMax++
        }
    }

    addNewItem = (firstName, lastName, phone, gender, age) => {
        const newItem  = this.createItem(firstName, lastName, phone, gender, age);
        this.setState(({data}) => {
            const newArr = [...data, newItem ]
            return {
                data: newArr
            }
        })
    }

    deleteItem = (id) => {
        this.setState(({ data }) => {
            const index = data.findIndex((el) => el.id === id);
            const newArr = [...data.slice(0, index), ...data.slice(index+1)];
            return {
                data: newArr
            }
        })
    }

    sortItems = (propName) => {
        this.setState(({data}) => {
            const newArr = data.sort((a,b) => a[propName] > b[propName] ? 1 : -1);
            console.log(newArr);
            return {
                data: newArr
            }
        })
    }

    render() {
        const { data } = this.state
        return (
        <div className="container bg-light p-5">
            <div className="row">
                <Form onSubmit={ this.addNewItem } />
                <Table data={data}
                onDeleteItem={this.deleteItem}
                sortItems={this.sortItems} />
            </div>
        </div>
    )
    }
    
}

