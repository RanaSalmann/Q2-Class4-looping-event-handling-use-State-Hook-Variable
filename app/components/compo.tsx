import Tag from "@/app/components/tag/tag";
import {CompoProps} from "@/types/componentsTypes"
function Compo(props:CompoProps) {
  return (
    <div style={{backgroundColor: 'lightgreen'}}className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h1 className="text-gray-700 mb-4 font-bold">{props.heading}</h1>

      <p className="text-gray-700 mb-4">{props.description}</p>

      <div className="flex flex-wrap">
        <Tag tagText="Compo-Tag"/>
      </div>
    </div>
  );
}
export default Compo;

//best way is make a tag page and call it in any page as a component, for optimization it is best .. but this is not a example of calling tag component. it is normal use of tagging in cards frame
