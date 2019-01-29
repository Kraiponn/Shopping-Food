import React from 'react';

export default ({input, label, type, name, required, meta: {error, touched}}) => {
    //console.log(meta)
    return (
        <div className="form-group">
            <label>{label}</label>
            <input type={type} 
                    className="form-control"
                    name={name}
                    {...input}
                    required={required} />
                    
            {error && touched && (
                <div className="text-danger title pt-2">
                    {error}
                </div>
            )}
            
        </div>
    )
}