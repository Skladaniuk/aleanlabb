import {Routes, Route} from 'react-router-dom';
import { JobList } from './Views/JobList';
import { JobInfo } from './Views/JobInfo';


export const App = () => {


  
  

  return (
    <div>
    
    <Routes>
      <Route path = '/' element = {<JobList />}/>
      <Route path = '/:jobId' element ={<JobInfo/>}/>
     
      </Routes>

    </div>
  );
};
