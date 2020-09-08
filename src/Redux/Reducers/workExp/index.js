
const workExpereince={
    workExp:[
      {
        "id": 1,
        "role": "Java Developer",  
        "from_duration":"2019-05-03",  
        "end_duration":"2020-09-03" ,  
        "company":"Microsoft",
        "emp_type":"Full Time" ,  
        "location":"Bangalore",
        "responbilies":"Development",                           
      },
      {
        "id": 2,
        "role": "Developer",  
        "from_duration":"2019-03-03",  
        "end_duration":"2020-02-03" ,  
        "company":"Oracle",
        "emp_type":"Full Time" ,  
        "location":"Hyderabad",
        "responbilies":"Developement",
      },
      {
        "id": 3,
        "role": "Tester",  
        "from_duration":"2020-05-03",  
        "end_duration":"2020-07-03" ,  
        "company":"TCS",
        "emp_type":"Part Time" ,  
        "location":"Mumbai",
        "responbilies":"Tester",
      },
      {
        "id": 4,
        "role": "React Developer",  
        "from_duration":"2019-01-03",  
        "end_duration":"2020-09-03" ,  
        "company":"Selfsevit solution ",
        "emp_type":"Full Time" ,  
        "location":"Bangalore",
        "responbilies":"Developement",                           
      },
      {
        "id": 5,
        "role": "Storage Admin",  
        "from_duration":"2019-03-03",  
        "end_duration":"2020-02-03" ,  
        "company":"Amazon",
        "emp_type":"Full Time" ,  
        "location":"Hyderabad",
        "responbilies":"Developement",
      },
      {
        "id": 6,
        "role": "Cloud Admin",  
        "from_duration":"2020-05-03",  
        "end_duration":"2020-07-03" ,  
        "company":"TCS",
        "emp_type":"Part Time" ,  
        "location":"Mumbai",
        "responbilies":"Tester",
      },
      {
        "id": 7,
        "role": "Sr.Developer",  
        "from_duration":"2020-05-03",  
        "end_duration":"2020-07-03" ,  
        "company":"Wibro",
        "emp_type":"Full Time" ,  
        "location":"Kolkata",
        "responbilies":"Tester",
      },
      {
        "id": 8,
        "role": "Sr.Developer",  
        "from_duration":"2020-05-03",  
        "end_duration":"2020-07-03" ,  
        "company":"FaceBook",
        "emp_type":"Full Time" ,  
        "location":"Kolkata",
        "responbilies":"Developement",
      },
      {
        "id": 9,
        "role": "Sr.Tester",  
        "from_duration":"2020-05-03",  
        "end_duration":"2020-07-03" ,  
        "company":"TCS",
        "emp_type":"Full Time" ,  
        "location":"Kolkata",
        "responbilies":"Tester",
      }
    ]
  }
  
    export const workExpereinceReducer = (state = workExpereince, action) => {
  
       switch(action.type){
          case "ADD_WORK_EXP":
           return{
            workExp:[action.payload, ...state.workExp]
           }
           default:
          return state;  
       }
       
      }