const Form = (props) => {
    return(
        props.data.formData ?
        <form className="form">
            <FormFields data={props.data.formData} />
            <button type="reset">Cancelar</button>
            <button>Enviar</button>
        </form> :
        null
)}

const FormFields = (props) => {
    return(
        props.data.map((field, i) => 
            <div key={i}>
                <label for={field.key}> {field.key}</label>
                <input name={field.key} type={field.type} value={field.value || ''}/>
            </div> 
))}
export default Form