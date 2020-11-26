const initialState =[
    {id:1, firstName: 'Polina', lastName: 'Raguilo', email: 'polina2020@mail.ru'},
    {id:2, firstName: 'Julia', lastName: 'Ivanova', email: 'Julia2020@mail.ru'}
  ]
  
  
  
  
  
  const tableReducer = (state=initialState, action) => {
    switch(action.type){
          case 'DELETE':
          return state.filter((user) => user.id !== action.id)
      default:
        return state;
    }
  }
  
  
  
  export {tableReducer} ;