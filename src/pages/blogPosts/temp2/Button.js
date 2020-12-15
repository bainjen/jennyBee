import React from "react"

const Button = props => {
  const { name } = props

  return <button onClick={() => console.log(name)}>Click Me!</button>
}

export default Button
