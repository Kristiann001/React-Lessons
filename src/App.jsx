import ButtonSubmit from "./components/ButtonSubmit"
import ButtonClick from "./components/ButtonClick"
import ButtonChange from "./components/ButtonChange"
import NewStudents from "./components/NewStudents"
import Students from "./components/Students"
import Texting from "./components/Texting"
import Crement from "./components/Crement"




function App() {

  const information = 
  [
  {
    name : "Karen Rose",
    school : "Oxford School",
    age : 19
  },
  {
    name : "Sandra Lily",
    school : "Ford School",
    age : 20
  }
  ]
  return (
    <div>
      <Students 
      name = "Kristopher Mac" 
      school = "Flatiron School" 
      county = "Nairobi"
      age = {20}
      />

      <Texting />

      <NewStudents 
      name = {information[0].name}
      school = {information[0].school}
      age = {information[0].age}
      />
      
      <NewStudents 
      name = {information[1].name}
      school = {information[1].school}
      age = {information[1].age}
      />

      <ButtonSubmit />
      <br />
      <ButtonClick />
      <br />
      <ButtonChange />

      <Crement />      

    </div>
  )
}

export default App
