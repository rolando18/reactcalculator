

const Screen = ({ expression, result }) => {
  return (
    <div className="screen">
        <input type="text" value={expression} className="expression" readOnly />
        <input type="text" value={result} className="screen-results" readOnly />
    </div>
  )
}

Screen.defaultProps = {
  result: 0
}

export default Screen