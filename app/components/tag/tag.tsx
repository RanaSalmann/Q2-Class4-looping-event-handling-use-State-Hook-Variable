import { TagProps } from "@/types/componentsTypes"
function Tag(props:TagProps){

return(

    
<>
    
            <span style={{backgroundColor: 'Gold'}} className="bg-gray-200 text-gray-700 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">{props.tagText}
            </span>

            <span style={{backgroundColor: 'HotPink'}}className="bg-gray-200 text-gray-700 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">Water Proof
            </span>

            <span style={{backgroundColor: 'BlueViolet'}}className="bg-gray-200 text-gray-700 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">IP68
            </span>

            <span style={{backgroundColor: 'ForestGreen'}}className="bg-gray-200 text-gray-700 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">Corning Gorrila Glass
            </span>
            </>
)
}
export default Tag;