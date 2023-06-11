export interface Job {
  _id:String;
  title: String;
  salary: Number;
  description: String;
  experience: String;
  skills: string[];
  postDate: String;
  location: {
    cordinate: number[];
  };
}
