export interface IUserData {
    name: string;
    id: number;
  }

export interface ITableDetails{
    ID:number;
    name:string;
}

export interface IRandomUsers {
  page: number,
  per_page: number,
  total: number,
  total_pages: number,
  data:Isignup []
      
}

export interface Isignup{
  
    id: number,
    email: string,
    firstname: string,
    lastname: string,
    avatar: string,
    username:string,
    password:string

}


export interface IProducts{
  id:number,
  title:string,
  img:string,
  price:number,
  offer:string
}

export interface IPost{
  name:string,
  content:string,
  date:string,
}