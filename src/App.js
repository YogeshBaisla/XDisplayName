import {useState} from "react"
function App() {
  const [firstName,setFirstName] = useState("")
  const [lastName,setLastName] = useState("")
  const [fullName,setFullName] = useState("")
  const handleSubmit = (e)=>{
    e.preventDefault()
    let name = `Full Name: ${firstName} ${lastName}`
    setFullName(name)

  }
  const container = {
    marginLeft : "10px",
  }
  return (
    <div style={container}>
      <h1>Full Name Display</h1>
      <form onSubmit={handleSubmit}>
      <div>
        <span>First Name:</span>
        <input type="text" required value={firstName} onChange={(e)=>{
          setFirstName(e.target.value)
        }}/>
      </div>
      <div><span>Last Name:</span>
        <input type="text" required value={lastName} onChange={(e)=>{
          setLastName(e.target.value)
        }}/></div>
      <button type="submit">Submit</button>
      </form>
      {fullName !== "" ? <div>{fullName}</div> : null}
    </div>
  );
}

export default App;
