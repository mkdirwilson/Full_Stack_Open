/* eslint-disable react/prop-types */

const Filter = ({value, handleValueChange})=> {
  return (
    <>
    find countries <input value={value} onChange={handleValueChange} placeholder="search country"></input>
    </>
  )
}


export default Filter