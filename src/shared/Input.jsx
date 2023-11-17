import React from 'react'

export default function Input({id,title,type,name,ChangeData,classCustom,errors,value}) {
  return (
    <div className="mb-3">
    <label htmlFor={id} className="form-label">{title}</label>
    <input type={type} name={name} className={`form-control ${classCustom}`} 
    id={id}  onChange={ChangeData}  value={value}/>
    {errors[name] && <p className='text-danger'>{errors[name]}</p>}
   
  </div>
  )
}
