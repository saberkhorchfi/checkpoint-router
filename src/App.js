import logo from './logo.svg';
import './App.css';
import { useEffect, useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { NavLink, Route, Router, Routes } from 'react-router-dom';
import Description from './Description';
function App() {
  const[list,setlist]=useState([
    {name:"Game of thrones",rate:5,img:"https://wallpapercave.com/wp/wp4355108.jpg",desc:"https://www.youtube.com/embed/kxdKxdhKya8?list=PLY1IpuB2HLWj2VpoVGVSct7DUQZ_38EM5"},
    {name:" Vikings",rate:4.5,img:"https://www.happy-landing.net/wp-content/uploads/2020/12/Vikings-Valhalla.png",desc:"https://www.youtube.com/embed/kxdKxdhKya8?list=PLY1IpuB2HLWj2VpoVGVSct7DUQZ_38EM5"},
    {name:"Titanic",rate:4,img:"https://www.pixelstalk.net/wp-content/uploads/images1/Titanic-Wallpapers-HD-768x480.jpg",desc:"https://www.youtube.com/embed/kxdKxdhKya8?list=PLY1IpuB2HLWj2VpoVGVSct7DUQZ_38EM5"},
  ])
  const[filtredlist,setfilter]=useState(list)
  useEffect(()=>{
    setfilter(list)
  },[list])

  const search=useRef()
  const filtrer=()=>{
    setfilter(list.filter(e=> e.name.toUpperCase().includes(search.current.value.toUpperCase())))
  }
 
  const p=useRef()
  const p2=useRef()
  const p3=useRef()
  
  
  const add=()=>{
    setlist([...list,
      {
    
    name:p.current.value,
    rate:p2.current.value,
    img:p3.current.value
    
    

  } 

  ])
}
  

  return (
    <>
    
    <input type={"text"} ref={p} placeholder='Name Movie'></input>
    <input type={"text"} ref={p2} placeholder='Rate Movie'></input>
    <input type={"text"} ref={p3} placeholder='Image Movie'></input>
    <input type={"text"} placeholder="enter your search" ref={search} onChange={filtrer} ></input>
    <button onClick={add}>add</button>
    <br></br>
    <Routes>
       <Route path='/' element={<>
        <div style={{display:"flex",flexWrap:"wrap",gap:"10px",padding:"20px   "}}>
    {filtredlist.map((e,index)=>
    <NavLink to={index.toString()}>
       <Card style={{ width: '18rem' }}>
       <Card.Img variant="top" src={e.img} />
       <Card.Body>
         <Card.Title>{e.name}</Card.Title>
         <Card.Text>
            {e.rate}
         </Card.Text>
         <Button variant="primary">Go somewhere</Button>
       </Card.Body>
     </Card>
     </NavLink>)}
     

    </div>
       </>}></Route>
    
    
      <Route path={"/:id"} element={<Description movies={list}></Description>}></Route>
    </Routes>

    </>

  );
}

export default App;
