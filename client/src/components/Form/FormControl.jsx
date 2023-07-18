import PropTypes from 'prop-types'

export const FormControl = ({htmlFor, label, children}) => {
   return ( 
      <fieldset className='form-control'>
         <label htmlFor={htmlFor} className="label">
            <span className="label-text">{label}</span>
         </label>
         {children}
      </fieldset>
    );
}
 
FormControl.propTypes = {
   htmlFor: PropTypes.string,
   label: PropTypes.string,
   children: PropTypes.node
}