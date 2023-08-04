interface ImgUrlObject {
    _type: string;
    asset: {
      _id: string;
      url: string;
      // Add other properties if needed
    };
  }
  
  interface LearningsAndChallenges {
    learning1: string;
    learning2: string;
    learning3: string;
    challenge1: string;
    challenge2: string;
    challenge3: string;
  }
  
  export interface Project {
    shorttitle: string;
    shortdescription: string;
    featured: boolean;
    _createdAt: string;
    _rev: string;
    _type: string;
    technology: string[];
    title: string;
    sourcecode: string;
    description: string;
    techstack: ImgUrlObject[];
    _updatedAt: string;
    imgUrl: ImgUrlObject[];
    link: string;
    _id: string;
    slug: {
      current: string;
      _type: string;
    };
    myrole: string;
    startdate: string;
    enddate: string;
    problemstatement: string;
    learningsAndChallenges: LearningsAndChallenges;
  }
  