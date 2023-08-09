
const Filter = ({filterHandler, newFilter}) => {
  return (
    <>
      <p>
        <input onChange={filterHandler} value={newFilter}placeholder="search.."></input>
      </p>
    </>
  )
}

export default Filter