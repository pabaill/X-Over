export default PROJ_DATA = [
    {name: "iPhone 25", description: "Apple iPhone 25 Team - working towards developing a unique smartphone experience. Currently in beta testing phase.", updates: [{
      name: "Bill", text: "Updated Meeting Notes for 11/11", link: "LINK_TO_MEETING_NOTES", time: new Date("2023-11-27T14:25:00")
    }, {
      name: "Ted", text: "Updated Project Description", link: "LINK_TO_PROJECT_PAGE", time: new Date("2023-11-28T17:25:00")
    }],
    members: [{name: "Bill", role: "Lead", email: "bill@stanford.edu", image: "assets/default_profile.png"}, {name: "Ted", role: "Engineer", email: "ted@stanford.edu", image: "assets/default_profile.png"}],
    thumb: require('./../assets/sample_project_thumbs/apple.png'),
    resources: [
      {filename: "Meeting Notes (11/11)", }
    ]
  },
    {name: "Google Pixel 12", description: "Google Pixel 12 Team - working towards developing a unique smartphone experience. Currently in alpha testing phase.", updates: [{
      name: "John", text: "Updated Meeting Notes for 11/12", link: "LINK_TO_MEETING_NOTES", time: new Date("2023-11-27T11:44:00")
    }],
    members: [{name: "John", role: "Lead", email: "john@stanford.edu", image: "assets/default_profile.png"}, {name: "Mary", role: "Engineer", email: "mary@stanford.edu", image: "assets/default_profile.png"}],
    thumb: require('./../assets/sample_project_thumbs/google.png')
  },
    {name: "Microsoft Surface XL 14", description: "Microsoft Surface XL 14 Team - working towards developing a unique laptop experience. Currently in beta testing phase.", updates: [{
      name: "Alice", text: "Updated Meeting Notes for 11/13", link: "LINK_TO_MEETING_NOTES", time: new Date("2023-11-27T13:12:00")
    }],
    members: [{name: "Alice", role: "Lead", email: "alice@stanford.edu", image: "assets/default_profile.png"}, {name: "Jimmy", role: "Designer", email: "jimmy@stanford.edu", image: "assets/default_profile.png"}],
    thumb: require('./../assets/sample_project_thumbs/microsoft.png')
  }
];