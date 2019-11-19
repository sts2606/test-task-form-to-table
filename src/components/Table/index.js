import React from 'react';
import TableItem from '../TableItem'

const Table = ({ data, onDeleteItem, sortItems }) => {

    const greetInfo = <tr>
                        <td colspan='5' className="grettRow p-5" align="center" width="100%">Here will be your data</td>
                    </tr>

    const tableItems = data.map((item) => {
        const { id, ...itemData } = item;
            return (
                <TableItem key={ id } { ...itemData } 
                onDeleteItem={ () => onDeleteItem(id)}/>
            )
    })

    return(
        <table className="table-hover col-9">
                <thead>
                    <tr>
                        <td className="p-2">First Name <button className='btn btn-secondary btn-sm' onClick={()=>sortItems('firstName')} >sort</button></td>
                        <td className="p-2">Last Name <button className='btn btn-secondary btn-sm' onClick={()=>sortItems('larstName')}>sort</button></td>
                        <td className="p-2">Phone <button className='btn btn-secondary btn-sm' onClick={()=>sortItems('phone')}>sort</button></td>
                        <td className="p-2">Gender <button className='btn btn-secondary btn-sm' onClick={()=>sortItems('gender')}>sort</button></td>
                        <td className="p-2">Age <button className='btn btn-secondary btn-sm' onClick={()=>sortItems('age')}>sort</button></td>
                        <td></td>
                    </tr>
                </thead>
            <tbody>
                {data.length > 0 ? tableItems : greetInfo}
            </tbody>
        </table>
    )
}

export default Table;

