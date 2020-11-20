import React from 'react';
import Form from '../AddForm/AddForm';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import '../Table/Table.css';
import  '../Table/style.css';

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
            { id: 1, firstName: 'Viktor', lastName: 'Polyakov', job: 'Designer' },
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
            <Carousel className="carous">
                <div>
                    <img src="png/1.png" />
                </div>
                <div>
                    <img src="png/2.png" />
                </div>
                <div>
                    <img src="png/3.png" />
                </div>
                <div>
                    <img src="png/1.png" />
                </div>
                <div>
                    <img src="png/2.png" />
                </div>
                <div>
                    <img src="png/3.png" />
                </div>
                <div>
                    <img src="png/1.png" />
                </div>
                <div>
                    <img src="png/2.png" />
                </div>
                <div>
                    <img src="png/3.png" />
                </div>
                <div>
                    <img src="png/1.png" />
                </div>
                <div>
                    <img src="png/2.png" />
                </div>
                <div>
                    <img src="png/3.png" />
                </div>
            </Carousel>

            </React.Fragment>
        );
    }
}   


export default Table;