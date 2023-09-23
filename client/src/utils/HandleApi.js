import axios from 'axios';

const baseUrl = 'http://localhost:4000'

const getAllToDO = (setToDo) =>{
  axios.get(baseUrl)
  .then(({data}) =>{
    console.log('data --->' , data)
    setToDo(data)
  })
}
const addToDO = (text,setText,setToDo) =>{
  axios.post(`${baseUrl}/save`,{text})
  .then(({data}) =>{
    console.log('data --->' , data)
    setText("")
    getAllToDO(setToDo)
  }).catch((err)=> console.log(err))
}
const updateToDO = (toDoId,text,setToDo,setText,setIsUpdating) =>{
  axios.put(`${baseUrl}/update`,{_id:toDoId,text})
  .then(({data}) =>{
    setText("")
    setIsUpdating(false)
    getAllToDO(setToDo)
  }).catch((err)=> console.log(err))
}
const deleteToDO = (_id, setToDo) =>{
  axios.post(`${baseUrl}/delete`,{_id})
  .then((data) =>{
    console.log(data)
    getAllToDO(setToDo)
  }).catch((err)=> console.log(err))
}
export {getAllToDO,addToDO,updateToDO,deleteToDO}