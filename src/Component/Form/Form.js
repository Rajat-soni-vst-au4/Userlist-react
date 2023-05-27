import React, {useState} from 'react';
import Card from '../UI/Card';
import "./From.css"


function Form() {
    const [list, setList] = useState([]);
    const [name, setName] = useState("")
    const [age, setAge] = useState("")

    function userName(e){
        setName(e.target.value)
    }
    function userAge(e){
        setAge(e.target.value)
    }
    function CollectData(e){
        e.preventDefault()
        let userData = {
            name: name,
            age: age,
            id: Math.random().toString()
        }
     setList([...list,userData])

     setName("")
     setAge("")
    }

  return (
    <div>
        <form className='form' onSubmit={CollectData}>
            <label>User</label>
            <input type="text" placeholder='John Dee' onChange={userName} />
            <label>Age</label>
            <input type="Number" placeholder='31' onChange={userAge} />
            <button type='submit'>Add</button>
        </form>
        <Card />
    </div>
  )
}

export default Form