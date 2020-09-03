import {createStore} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

const Certification={
certi:[
    {
      "id": 1,
      "title": "Gutter Cleaner", 
      "exp":"EXP 2020-07-24", 
      "from_duration":"2019-05-03",  
      "end_duration":"2020-09-03" ,  
      "issued":"Microsoft",
      "skills":"React",                           
    },
    {
   
      "title": "Developer",
      "exp":"NEVER EXPIRES",
  
      "from_duration":"2019-03-03",  
      "end_duration":"2020-02-03" ,  
      "issued":"Oracle",
      "skills":"React" ,  
    },
    {
      "id": 3,
      "title": "Tester",
      "exp":"Completed",    
      "from_duration":"2020-05-03",  
      "end_duration":"2020-07-03" ,  
      "issued":"TCS",
      "skills":"Part Time" ,  
    },
    {
      "id": 4,
      "title": "React Developer",
      "exp":"On going",    
      "from_duration":"2019-01-03",  
      "end_duration":"2020-09-03" ,  
      "issued":"Selfsevit solution",
      "skills":"Developement",                           
    },
    {
      "id": 5,
      "title": "Storage Admin",
      "exp":"Expired soon",    
      "from_duration":"2019-03-03",  
      "end_duration":"2020-02-03" ,  
      "issued":"Amazon",
      "skills":"Full Time" ,  
    },
    {
      "id": 6,
      "title": "Cloud Admin", 
      "exp":"Completed",   
      "from_duration":"2020-05-03",  
      "end_duration":"2020-07-03" ,  
      "issued":"TCS",
      "skills":"Part Time" ,  
    },
    
  ],
  faiyaz:0
 
}

  const CertificationReducer = (state = Certification, action)=>{

     switch(action.type){
    
         default:
        return state;

     }
    }

    const store = createStore (CertificationReducer,composeWithDevTools())

    export default store;