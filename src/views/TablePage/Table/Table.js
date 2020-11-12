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

    maxId = 2;

    state = {
        UsersInf: [
            { id: 1, firstName: 'Polina', lastName: 'Raguilo', job: 'manager' },
            { id: 2, firstName: 'Ivan', lastName: 'Lushakov', job: 'QA' }
        ]
    }

    deleteUser = (id) => {
        this.setState(({ UsersInf }) => {
            let idDel = UsersInf.findIndex(elem => elem.id === id);

            let beforeDel = UsersInf.slice(0, idDel);
            let afterDel = UsersInf.slice(idDel + 1);

            let newArr = [...beforeDel, ...afterDel];

            return {
                UsersInf: newArr
            }
        }) 
    }

    addNewUser = (firstName, lastName, job) => {
        this.setState(({UsersInf}) => {
            let newItem = [
                ...UsersInf,
               { id: ++this.maxId, 
                firstName: firstName, 
                lastName: lastName, 
                job: job
               }
            ]
            return{
                UsersInf: newItem
            }
        })
    }


    render() {

        const rows = this.state.UsersInf.map((item) => {
            const {id, firstName, lastName, job} = item;
            return (
                <tr key={id}>
                    <td>{firstName}</td>
                    <td>{lastName}</td>
                    <td>{job}</td>
                    <td><button className="removeBtn" onClick={()=>this.deleteUser(id)}>Удалить</button></td>
                </tr>
            );
        });
        return (
            <React.Fragment>
                <Form addNewUser={this.addNewUser}/>
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