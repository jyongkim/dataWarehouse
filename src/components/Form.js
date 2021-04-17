const Form = (props) => {
    <form action={props.action} className={props.class}>
        <FormFields  />
    </form>
}

const FormFields = (props) => {
    <>
        <label></label>
        <input />
    </>
}
export default Form