// import { useParams } from "react-router-dom"
import { Navigate, useNavigate,Routes,Route } from "react-router-dom"

const Post = () => {

//   const params = useParams()
     const status =411
     
     const navigate = useNavigate()

     const onClick = ()=>{
        console.log('Hello TC')
        navigate('/about')
     }

  return (
    <div>
        <h1>Post</h1>
        <button onClick={onClick}>Click</button>
        {/* <p>Name: {params.name}</p> */}
        <Routes>
            <Route path="/show" element={<h1>Pozzdrav svete!</h1>} />
        </Routes>
    </div>
  )
}

export default Post