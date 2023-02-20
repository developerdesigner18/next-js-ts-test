import axios from "axios"
import { useRouter } from "next/router"
import { FC, useEffect, useState } from "react"



const User: FC = () => {
  const router = useRouter()
  const { username } = router.query
  const [data,setData] :any= useState()
console.log(username,"oddodoo");
useEffect(()=>{
  axios.get(`http://localhost:3002/api/profile/${username}`).then(res=> setData(res.data));
},[username])
console.log(data,"Dadada");

  return (<>
    <div className="w-full h-80 flex flex-col items-center space-y-12">
      <h1 className="text-4xl font-bold">User</h1>
      {/* <p>TODO: complete</p> */}
      <div className="max-w-sm rounded overflow-auto shadow-2xl h-[450px] min-h-[60vh]">
  <div className="px-6 py-4">
    <div className="font-bold  text-md mb-2">Age: <span className="font-normal text-sm ml-1"> {data?.age} </span></div>
  </div>
  <div className="px-6 py-4">
    <div className="font-bold  text-md mb-2">Bio: <span className="font-normal text-sm ml-1"> {data?.bio} </span></div>
  </div>
  <div className="px-6 py-4">
    <div className="font-bold text-md mb-2">Birthday: <span className="font-normal text-sm ml-1"> {data?.birthday} </span></div>
  </div>
  <div className="px-6 py-4">
    <div className="font-bold text-md mb-2">Twitter: <span className="font-normal text-sm ml-1"> {data?.twitter} </span></div>
  </div>
  <div className="px-6 py-4">
    <div className="font-bold text-md mb-2">username: <span className="font-normal text-sm ml-1"> {data?.username} </span></div>
  </div>
</div>
    </div>
  </>)

}


export default User