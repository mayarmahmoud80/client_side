export interface TodosManagerType{
    _id:string
    title:string;
    content:string;
    user_manager: {
        id: string
        name: string
};
/*IsAdmin:Boolean;*/
}

export const defaultTodos = {
    _id: '',
    title: '',
    content: '',
    user_manager: {
      id: '',
      name: '',
    },
  /*  IsAdmin:false*/
  }