import Section1 from "./components/section1/Section1"
import Section2 from "./components/section2/Section2"
const App = () => {
  const users =[
    {
      img:"https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1200&auto=format&fit=crop", 
      intro:"",
      color:'red',
      tag:"Satisfied"
    },
    {
    img:"https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=1200&auto=format&fit=crop", 
      intro:"",
      color:'green',
      tag:"Underserved"
    },
    {
       img:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop", 
      intro:"",
      color:'pink',
      tag:"Underbanked"
    },
     {
       img:"https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1200&auto=format&fit=crop", 
      intro:"",
      color:'orange',
      tag:"Underbanked"
    }
  ]
  return (
    <div>
      < Section1 users ={users} />
     <Section2 />
   
    </div>
  )
}

export default App
