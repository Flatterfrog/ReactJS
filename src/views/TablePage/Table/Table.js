import React from 'react';
import Form from '../AddForm/AddForm';
import '../Table/Table.css';

const TableHeader = () => { 
    return (
        <thead className ="thead">
            <tr className = "tr">
                <th className="th">Name</th>
                <th className="th">Surname</th>
                <th className="th">Job</th>
            </tr>
        </thead>
    );
}



class Table extends React.Component {

    state = {
        dataUsers: [
            { id: 1, firstName: 'Polina', lastName: 'Raguilo', email: 'polina2020@mail.ru' },
            { id: 2, firstName: 'Ivan', lastName: 'Ivanov', email: 'Ivan2020@mail.ru' }
        ]
    }

    render() {

        const rows = this.state.dataUsers.map((item) => {
            const {id, firstName, lastName, email} = item;
            return (
                <tr key={id}>
                    <td>{firstName}</td>
                    <td>{lastName}</td>
                    <td>{email}</td>
                    <td><button className="removeBtn" >Удалить</button></td>
                </tr>
            );
        });
        return (
            <React.Fragment>
                <Form/>
            <table className='table'>
                <TableHeader />
                <tbody>
                    {rows}
                </tbody>
            </table>
            </React.Fragment>
        );
    }
}


export default Table;