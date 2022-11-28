import { BrowserRouter as Router,Route,Routes,NavLink } from 'react-router-dom' 
import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"
import Card from "./components/shared/Card"
import FeedbackStats from "./components/FeedbackStats"
import FeedbackForm from "./components/FeedbackForm"
import AboutPage from './pages/AboutPage'
import { FeedbackProvider } from './context/FeedbackContext'
import AboutIconLink from './components/AboutIconLink'
import Post from './components/Post'


function App(){

return(
    <FeedbackProvider>
     <Router>
      <Header />
     <div className="container">
        <Routes>
           <Route exact path='/' element={
            <>
            <FeedbackForm />
            <FeedbackStats />
            <FeedbackList  />
            <Card>
                Proba
            </Card>
            </>
           }>
         </Route>
        { /*  post/* means post/show from post.jsx */}
             <Route path='/about' element={<AboutPage />} />
             <Route path='/post/*' element={<Post />} />
        </Routes>
        {/* <Card>
            <NavLink to='/' activeClassName='active'>
                Home
            </NavLink>
            <NavLink to='/about' activeClassName='active'>
                About
            </NavLink>
        </Card> */}
        <AboutIconLink />
     </div>
    </Router>
    </FeedbackProvider>
  )
}
export default App