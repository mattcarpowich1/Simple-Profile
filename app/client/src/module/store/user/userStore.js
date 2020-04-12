const DEFAULT_STATE = {
  id: 1,
  username: 'mattcarpowich',
  firstName: 'Matthew',
  lastName: 'Carpowich',
  hideLastName: false,
  city: 'San Diego',
  state: 'CA',
  country: 'US',
  profilePhotoUrl: 'https://photos-of-matt-carpowich.s3-us-west-1.amazonaws.com/mattblackandwhite1.jpg',
  coverPhotoUrl: 'https://cdn.pixabay.com/photo/2020/03/19/08/33/pink-4946728_1280.jpg',
  photos: [
    {
      src: 'https://photos-of-matt-carpowich.s3-us-west-1.amazonaws.com/mattblackandwhite1.jpg',
      caption: 'Me, in black and white.'
    },
    {
      src: 'https://photos-of-matt-carpowich.s3-us-west-1.amazonaws.com/mattblackandwhite1.jpg',
      caption: 'Me again, in San Diego.'
    },
    {
      src: 'https://photos-of-matt-carpowich.s3-us-west-1.amazonaws.com/mattblackandwhite1.jpg',
      caption: 'Wow! So much ME.'
    }
  ],
  aboutMe: 'I am just a regular guy. I love dogs, flowers, and music.',
  occupation: 'Web Developer',
  education: [
    {
      name: 'UC Berkeley',
      startMonth: 'January',
      startYear: '2012',
      endMonth: 'May',
      endYear: '2016'
    },
    {
      name: 'Torrey Pines High School',
      startMonth: 'August',
      startYear: '2007',
      endMonth: 'June',
      endYear: '2011'
    }
  ],
  theme: {
    color1: '603a9a',
    color2: '9C92AC'
  }
};

export const userReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    default: {
      return state;
    }
  }
};
