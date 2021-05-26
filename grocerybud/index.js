import React,{useState} from 'react';
import List from "./list";
import Alert from "./alert";

const Grocery = () => {

const [name, setName] = useState('');
const [list, setList] = useState([]);
const [alert, setAlert] = useState({show:true, msg:""});
const [editting, setEditting] = useState(false);
const [edittId, setEdittId] = useState(null)

const handleChange=(e)=>{
  setName(e.target.value)
}

 const handleSubmit=(e)=>{
   e.preventDefault();

   if(!name){
        showAlert(true, 'Please Enter a Value')
   }else if(name && editting){
      setList(list.map((item)=>{
         if(item.id === edittId){
             return {...item,title:name}
         }
           return item
      }))
      setEdittId(null)
      setEditting(false)
      setName('')
   }else{
       showAlert(true, 'Item is Added')
       const items = {id: new Date().getTime().toString(),title:name};
       setList([...list,items])
       setName('') 
   }
 }

 const EmptyLisy=()=>{
    showAlert(true, 'List is Empty')
     setList([])
 }

 const showAlert=(show=false, msg="")=>{
     setAlert({show, msg})
 }

 const removeItem=(id)=>{
     showAlert(true, 'Item is Removed')
     const items = list.filter((f)=>f.id !== id)
     setList(items)
 }
 const itemEdit=(id)=>{
     showAlert(true, 'item is added')
  const items = list.find((f)=>f.id === id)
  setEditting(true)
  setEdittId(id)
  setName(items.title)
 }

    return ( 
        <div style={{marginLeft:'600px',marginTop:20}}>
            <div>
               {alert.show && <Alert
               showAlert={showAlert} 
               {...alert}/>}
            </div>
            <div>
                <h3>Grocery Bud App</h3>
                <form onSubmit={handleSubmit}>
                      <input
                       type="text"
                       placeholder="search..."
                       onChange={handleChange}
                       value={name} 
                       />

                    <button>{editting ? "edit" : "submit"}</button>
                </form>
            </div>
            <div style={{marginTop:20}}>
                <List
                 itemEdit={itemEdit}
                 removeItem={removeItem}
                 ourList={list}/>
                 <button onClick={EmptyLisy}>Clear All</button>
            </div>
        </div>
     );
}
 
export default Grocery;