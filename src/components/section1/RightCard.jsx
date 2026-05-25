import RightCardCOnent from "./RightCardCOnent"

const Rightcard = (props) => {
    console.log(props.color)
  return (
    <div className="relative h-full w-80 rounded-4xl overflow-hidden">
      
      <img
        className="h-full  shrink-0 w-full object-cover"
       src={props.img}

         alt=""
      />

   <RightCardCOnent   color ={props.color} id={props.id} tag ={props.tag}/>
    </div>
  )
}

export default Rightcard