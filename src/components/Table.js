import React from 'react';

class TableHead extends React.Component{
    render() {
        return (
            this.props.title.map(
                t => {
                    <th>t</th>
}))}}

class Table extends React.Component{
    render() {
        return (
            <table>
                <thead></thead>
                <tbody></tbody>
            </table>
)}}

export default Table;