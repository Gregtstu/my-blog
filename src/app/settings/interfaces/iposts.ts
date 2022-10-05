export interface IPosts {
  select: string,
  title:string,
  foto:string,
  content:string,
  img: string,
  data?: Date,
  favorite: boolean
}
