
interface ImgUrlObject {
    _type: string;
    asset: {
      _id: string;
      url: string;
      // Add other properties if needed
    };
  }
  
export interface Project {
    featured: boolean;
    _createdAt: string;
    _rev: string;
    _type: string;
    technology: string[];
    title: string;
    _updatedAt: string;
    imgUrl: ImgUrlObject[]; // Define ImgUrlObject interface if needed
    link: string;
    _id: string;
    slug: {
      current: string;
      _type: string;
    };
  }