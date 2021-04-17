export const Thead = (props) => { return( 
    <thead>
        <tr>
            <th><input type="checkbox" /></th> 
            { Object.keys(props.title).map( (key, i) => <th key={i}> {key} </th> ) }
            <th>Acciones</th>                  
        </tr>
    </thead>
)   }
export const Tbody = (props) => { return(
    <tbody>
    { props.data.map( (row, i) => 
        <tr key={i}> 
            <td><input type="checkbox" /></td>
            { Object.keys(row).map( ( key, id ) => <td key={id}>{row[key]}</td> ) } 
            <td><button>...</button></td>
        </tr>
    )   }
    </tbody>
)   }