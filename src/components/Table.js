import { Component } from 'react';
import { Thead, Tbody } from './TableData';

class Table extends Component{
    render() {
        return (
            this.props.data[0] ?
            <table className="table">
                <Thead title={this.props.data[0]} />
                <Tbody data={this.props.data}/>
            </table> : <p> No hay datos para mostrar. </p>
)   }   }



export default Table;