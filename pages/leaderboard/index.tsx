import axios from "axios";
import { useRouter } from "next/router";
import { FC, useEffect, useState } from "react"



const Leaderboard: FC = () => {
  const router = useRouter();
  const [data,setData]: any = useState([]);
  useEffect(() => {
    axios.get('http://localhost:3000/api/leaderboard').then(res=> setData(res.data));
    let interval = setInterval(() => {
      axios.get('http://localhost:3000/api/leaderboard').then(res=> setData(res.data));
    }, 20000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  console.log(data,"datatat");
  
  return (<>
    <div className="w-full h-80 flex flex-col items-center space-y-12">
      <h1 className="text-4xl font-bold">Leaderboard</h1>
      {/* <p>TODO: complete.</p> */}
      {/* <p>All leaderboard entries should be links to user profile page.</p> */}
      <div className="flex flex-col  w-11/12">
  <div className="overflow-x-hidden sm:-mx-6 lg:-mx-8">
    <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
      <div className="h-[500px] overflow-y-auto">
        <table className="min-w-full">
          <thead className="border-b">
            <tr>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Index
              </th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                User Name
              </th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                profile Image
              </th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Score
              </th>
            </tr>
          </thead>
          <tbody>
              {
                data?.leaderboard?.map((value:any,index:number)=> (
                  <tr className="border-b cursor-pointer	" onClick={()=> router.push(`profile/${value.username}`)}>

              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{index+1}</td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                {value.username}
              </td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                <img src={value.profileImage} className="w-10 h-10" />
              </td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                {value.score}
              </td>
            </tr>
                ))
              }
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
    </div>
  </>)

}


export default Leaderboard