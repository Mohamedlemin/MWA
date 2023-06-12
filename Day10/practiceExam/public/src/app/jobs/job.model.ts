export interface Job {
  _id: string;
  title: string;
  salary: Number;
  description: string;
  experience: string;
  skills: string[];
  postDate: string;
  location: {
    cordinate: number[];
  };
}
