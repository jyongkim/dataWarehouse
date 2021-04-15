import React from 'react';

class Table extends React.Component{
    render() {
        return (
            <table>
                <thead>
                    <th>Contacto</th>
                    <th>Región/País</th>
                    <th>Compañia</th>
                    <th>Cargo</th>
                    <th>Canal preferido</th>
                    <th>Interes</th>
                </thead>
                <tbody>
                    {   this.props.data.map((row, i) =>
                        <tr key={i}>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td>{row.contact}</td>
                            <td>{row.region}</td>
                            <td>{row.company}</td>
                            <td>{row.position}</td>
                            <td>{row.channel}</td>
                            <td>{row.interest}</td>
                        </tr>
                    )   }
                </tbody>
            </table>
)   }   }

export default Table;