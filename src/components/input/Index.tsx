import './styles.css'
export const Input = () => {
    return (
        <div className="form__group field">
            <input type="input" className="form__field" placeholder="Name" />
            <label className="form__label">Name</label>
        </div>
    )
}
