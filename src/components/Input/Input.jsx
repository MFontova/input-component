import './Input.css'

export const Input = ({
  error = false,
  disabled = false,
  helperText = null,
  startIcon = null,
  endIcon = null,
  text = null,
  size = 'md',
  fullWidth = false,
  multiline = false,
  row = 0
}) => {
  const errorClass = error ? 'error' : ''
  const disabledClass = disabled ? 'disabled' : ''
  const fullWidthClass = fullWidth ? 'full-width' : ''
  return (
    <div className={`input-group ${errorClass} ${fullWidthClass}`}>
      <label htmlFor='input'>Label</label>
      <div className={`input-box ${disabledClass}`}>
        {
          startIcon
            ? <span className='material-symbols-outlined icon start-icon'> {startIcon} </span>
            : null
        }
        {
          multiline
            ? (
              <textarea
                disabled={disabled}
                className={`${disabledClass} ${size}`}
                id='input'
                cols='30'
                rows={row}
              />
              )
            : (
              <input
                disabled={disabled}
                className={`${disabledClass} ${size}`}
                type='text'
                id='input'
                placeholder='Placeholder'
                value={text || null}
              />
              )
        }
        {
          endIcon
            ? <span className='material-symbols-outlined icon end-icon'> {endIcon} </span>
            : null
        }
      </div>
      {
        helperText
          ? <p className='helperText'>{helperText}</p>
          : null
      }
    </div>
  )
}
