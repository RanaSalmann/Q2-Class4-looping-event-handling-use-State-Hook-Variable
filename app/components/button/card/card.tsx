import Tag from "@/app/components/tag/tag";
import { CardProps } from "@/types/componentsTypes"

function Card(props:CardProps) {
  var count:number=30;
  return (
      <div style={{backgroundColor: 'LightSalmon'}} className="bg-white text-gray-700 rounded-lg shadow-md p-6 mb-6">
        {count> 40 ? <span>{count}</span>:""}
        {props.isHeading ? <h1 className="text-gray-700 mb-4 font-bold ">{props.heading}</h1>:"No Heading"}
      
      {props.isDescription ? <p>{props.description}</p>:"No Description" }<br />  
      
      <div className="ext-gray-700 mb-4 font-bold ">{props.showTag ? <Tag tagText={props.tag} />  : "No Tag Found" }
       
      </div>
    </div>
  );
}
export default Card;

//we can call the props function which is added in main page.ts and components
//we can use conditional TS in HTML for result Like above
//we can use conditional randering like above
