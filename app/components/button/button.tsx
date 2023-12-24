import Tag from "@/app/components/tag/tag";
import { ButtonProps } from "@/types/componentsTypes"

function Button(props:ButtonProps) {
  return (
    <>
      <div style={{backgroundColor: 'lightpink'}}className="bg-white rounded-lg shadow-md p-6 mb-6">

        <h1 className="text-gray-700 mb-4 font-bold">{props.heading}</h1>
        <p className="text-gray-700 mb-4">{props.description}</p>
        <Tag tagText="Samsung-Tag "/>
      </div>
    </>
  );
}
export default Button;

//we can call the props function which is added in main page.ts and components

