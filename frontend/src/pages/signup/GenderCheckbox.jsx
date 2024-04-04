import React from 'react'

const GenderCheckbox = () => {
  return (
    <div className='flex'>
        <div className="form-control">
          <label className="cursor-pointer label gap-2">
           <span className="label-text">Male</span>
           <input type="checkbox" className="checkbox checkbox-info" />
            </label>
  
        </div>


        <div className="form-control">
          <label className="cursor-pointer label gap-2">
            <span className="label-text">Female</span>
             <input type="checkbox"  className="checkbox checkbox-info" />
          </label>
    
        </div>
    </div>
  )
}

export default GenderCheckbox

//starter code

// import React from 'react'

// const GenderCheckbox = () => {
//   return (
//     <div className='flex'>
//         <div className="form-control">
//           <label className="cursor-pointer label gap-2">
//            <span className="label-text">Male</span>
//            <input type="checkbox" className="checkbox checkbox-info" />
//             </label>
  
//         </div>


//         <div className="form-control">
//           <label className="cursor-pointer label gap-2">
//             <span className="label-text">Female</span>
//              <input type="checkbox"  className="checkbox checkbox-info" />
//           </label>
    
//         </div>
//     </div>
//   )
// }

// export default GenderCheckbox