import React from 'react';
import '../Table.css'

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

const TableBody = props => { 
    const rows = props.characterData.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.surname}</td>
                <td>{row.job}</td>
                <td><button className="removeBtn" onClick={() => props.removeCharacter(index)}>Удалить</button></td>
            </tr>
        );
    });

    return <tbody>{rows}</tbody>;
}

const Table = (props) => {
    const { characterData, removeCharacter } = props;
        return (
            <table className = 'table'>
                <TableHeader />
                <TableBody characterData={characterData} removeCharacter={removeCharacter} />
            </table>
        );
}

export default Table;