// const PostItem = () => {
//   return (
//     <div className="flex justify-start items-start flex-col">
//       <div className="p-3 flex justify-start items-center space-x-2">
//         <div className="rounded-full bg-gray-50 border border-gray-500 h-8 w-8"></div>
//         <div className="text-sm">
//           username
//         </div>
//       </div>
//       <div className="h-60 bg-gray-100 w-full ">
//       </div>
//       <div className="p-3 text-sm">
//         <div className="mb-2 text-right">
//           <button type="button" className="text-red-500 border rounded-lg border-red-500 px-3 py-1 hover:text-red-300 hover:border-red-300">Remove</button>
//         </div>
//         <p> <span className="font-bold">Username</span> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati asperiores exercitationem incidunt dicta quod ullam explicabo facere impedit nobis! Dignissimos incidunt aspernatur consequuntur aut eos. Veritatis iste maxime doloremque. Ducimus.</p>
//       </div>
//     </div>
//   )
// }

// export default PostItem;

// const PostItem = ({ data }) => {
//   return (
//     <div className="flex justify-start items-start flex-col">
//       <div className="p-3 flex justify-start items-center space-x-2">
//         <div className="rounded-full bg-gray-50 border border-gray-500 h-8 w-8"></div>
//         <div className="text-sm">
//           {data.postedBy}
//         </div>
//       </div>
//       <div className="h-60 bg-gray-100 w-full ">
//         <img src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${data.photo}`} alt="photo" className="w-full h-full object-cover" />
//       </div>
//       <div className="p-3 text-sm w-full">
//         {
//           !data.isPublish && (
//             <div className="mb-2 text-right">
//               <button type="button" className="text-red-500 border rounded-lg border-red-500 px-3 py-1 hover:text-red-300 hover:border-red-300">Remove</button>
//             </div>
//           )
//         }
//         <p> <span className="font-bold">{data.postedBy}</span> {data.caption}</p>
//       </div>
//     </div>
//   )
// }

// export default PostItem;

import { getUser } from "../../../helpers/auth";
import usePostItem from "../hooks/usePostItem";

const PostItem = ({ id, data }) => {
  const { handleRemove, handleEdit } = usePostItem();
  return (
    <div className="flex justify-start items-start flex-col">
      <div className="p-3 flex justify-start items-center space-x-2">
        <div className="rounded-full bg-gray-50 border border-gray-500 h-8 w-8"></div>
        <div className="text-sm">
          {data.postedBy}
        </div>
      </div>
      <div className="h-60 bg-gray-100 w-full ">
        <img src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${data.photo}`} alt="photo" className="w-full h-full object-cover" />
      </div>
      <div className="p-3 text-sm w-full">
        {
          data.postedBy === getUser().username && (
            <div className="mb-2 text-right flex justify-end items-center space-x-2">
              <button onClick={() => handleEdit(id)} type="button" className="text-white bg-purple-500 border rounded-lg border-purple-500 px-3 py-1 hover:bg-white hover:text-purple-500 hover:border-purple-500">EDIT</button>
              <button onClick={() => handleRemove(id)} type="button" className="text-white bg-red-500 border rounded-lg border-red-500 px-3 py-1 hover:bg-white hover:text-red-500 hover:border-red-500">REMOVE</button>
            </div>
          )
        }
        <p> <span className="font-bold">{data.postedBy}</span> {data.caption}</p>
      </div>
    </div>
  )
}

export default PostItem;