import Tag from "@/app/components/tag/tag"
import {KotProps} from "@/types/componentsTypes"
function kot (props: KotProps){
    return(
        <div style={{backgroundColor: 'lightseagreen'}} className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h1 className="text-gray-700 mb-4 font-bold">{props.heading}</h1>

      <p className="text-gray-700 mb-4">{props.description}</p>

      <div className="flex flex-wrap">
      <Tag tagText="Kot-Tag"/>
      </div>
    </div>
    )
} 
export default kot;