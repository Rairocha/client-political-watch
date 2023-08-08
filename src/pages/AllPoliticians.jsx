import { useContext, useEffect,useState } from "react"
import { PoliticianContext } from "../context/politicians.context"


import { get } from "../services/authService"

import PoliticianPreview from "../components/PoliticianPreview"


const AllPoliticians = () => {
    const [follower, setFollow] = useState([]);

    const { pol } = useContext(PoliticianContext)

    
    useEffect(() => {
        get('/users/following')
        .then((f)=>{
          console.log('following get',f.data.following)
          setFollow(f.data.following)
        })
        .catch((err) => {
          console.log(err)
       })}
    , [])

  return (
    <div id="all-pol"> 
        <h1>All Politicians</h1>
        
        {
            pol.map((p) => {
                return (
                    
                    <PoliticianPreview key={p._id} pol={p} follower={follower} setFollow={setFollow}/>

                )
            })
        }
    </div>
  )
}

export default AllPoliticians