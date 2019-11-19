import React, { Component } from 'react';

export default class TableItem extends Component {
    render() {
        const { firstName, lastName, phone, gender, age, onDeleteItem } = this.props;

    return (
        <tr>
            <td className="p-2">{ firstName }</td>
            <td className="p-2">{ lastName }</td>
            <td className="p-2">{ phone }</td>
            <td className="p-2">{ gender }</td>
            <td className="p-2">{ age }</td>
            <td className="p-2"><input type='button' value='delete' onClick={ onDeleteItem } className="btn btn-danger btn-sm"/></td>
        </tr>
        )
    }
}
