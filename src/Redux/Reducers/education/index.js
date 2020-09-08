const educations={
  Edu:[
        {
          "id": 1,
          "institude": "BIT Ranchi",  
          "from_duration":"2012-05-03",  
          "end_duration":"2016-04-03" ,  
          "grade":"95",
          "Dagree":"B-Tech",
          "location":"Ranchi"                           
        },
        {
          "id": 2,
          "institude": "IIT Kharakpur", 
          "from_duration":"2009-04-03",  
          "end_duration":"2013-05-03" ,  
          "grade":"85",
          "Dagree":"B-Tech",
          "location":"Kharakpur"   
        },
        {
          "id": 3,
          "institude": "IIM Bangalore" , 
          "from_duration":"2006-04-03",  
          "end_duration":"2008-05-03" ,  
          "grade":"90",
          "Dagree":"MBA",
          "location":"Bangalore"   
        },
        {
          "id": 4,
          "institude": "IIT Bangalore" , 
          "from_duration":"2010-04-03",  
          "end_duration":"2014-05-03" ,  
          "grade":"90",
          "Dagree":"B-Tech",
          "location":"Bangalore"                        
        },
        {
          "id": 5,
          "institude": "IIT Mumbai" , 
          "from_duration":"2011-04-03",  
          "end_duration":"2015-05-03" ,  
          "grade":"90",
          "Dagree":"MCA",
          "location":"Mumbai"  
        },
        {
          "id": 6,
          "institude": "IIT Bangalore" , 
          "from_duration":"2010-04-03",  
          "end_duration":"2014-05-03" ,  
          "grade":"90",
          "Dagree":"B-Tech",
          "location":"Bangalore" 
        },
        
      ]
}

export const  educationsReducer = (state = educations, action) => {
  
  switch(action.type){
    case "ADD_EDUCATINO":
     return{
      Edu:[action.payload, ...state.Edu]
     }
     default:
    return state;

 }
   }