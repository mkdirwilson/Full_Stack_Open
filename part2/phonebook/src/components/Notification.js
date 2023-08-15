const Notification = ({alertMessage, alertStyle}) => {


  if (alertMessage === null)
  {
    return null
  }

  return (
    <p style={alertStyle}>{alertMessage}</p>
  )
}

export default Notification