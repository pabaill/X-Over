export default PROJ_DATA = [
    {name: "iPhone 25", description: "Apple iPhone 25 Team - working towards developing a unique smartphone experience. Currently in beta testing phase.", updates: [{
      name: "Bill", text: "Updated Meeting Notes for 11/11", link: {text: "View File", filename: "Meeting Notes (11/11)"}, time: new Date("2023-11-27T14:25:00")
    }, {
      name: "Ted", text: "Updated Project Description", link: {text: "View Project"}, time: new Date("2023-11-28T17:25:00")
    }],
    members: [{name: "Bill", role: "Lead", email: "bill@stanford.edu", image: "assets/default_profile.png"}, {name: "Ted", role: "Engineer", email: "ted@stanford.edu", image: "assets/default_profile.png"}],
    thumb: require('./../assets/sample_project_thumbs/apple.png'),
    resources: [
      {filename: "Meeting Notes (11/11)", author: "Bill", lastMod: new Date("2023-11-27T14:25:00"), category: "Notes"},
      {filename: "Budget Report", author: "Ted", lastMod: new Date("2023-11-27T09:25:00"), category: "Reports"},
    ]
  },
    {name: "Google Pixel 12", description: "Google Pixel 12 Team - working towards developing a unique smartphone experience. Currently in alpha testing phase.", updates: [{
      name: "John", text: "Updated Meeting Notes for 11/12", link: {text: "View File", filename: "Meeting Notes (11/12)"}, time: new Date("2023-11-27T11:44:00")
    }],
    members: [{name: "John", role: "Lead", email: "john@stanford.edu", image: "assets/default_profile.png"}, {name: "Mary", role: "Engineer", email: "mary@stanford.edu", image: "assets/default_profile.png"}],
    thumb: require('./../assets/sample_project_thumbs/google.png'),
    resources: [
      {filename: "Meeting Notes (11/12)", author: "John", lastMod: new Date("2023-11-27T11:44:00"), category: "Notes"},
      {filename: "Work Plan (Week 12)", author: "Mary", lastMod: new Date("2023-11-27T11:44:00"), category: "Reports"}
    ]
  },
    {name: "Microsoft Surface XL 14", description: "Microsoft Surface XL 14 Team - working towards developing a unique laptop experience. Currently in beta testing phase.", updates: [{
      name: "Alice", text: "Updated Meeting Notes for 11/13", link: {text: "View File", filename: "Meeting Notes (11/13)"}, time: new Date("2023-11-27T13:12:00")
    }],
    members: [{name: "Alice", role: "Lead", email: "alice@stanford.edu", image: "assets/default_profile.png"}, {name: "Jimmy", role: "Designer", email: "jimmy@stanford.edu", image: "assets/default_profile.png"}],
    thumb: require('./../assets/sample_project_thumbs/microsoft.png'),
    resources: [
      {filename: "Meeting Notes (11/13)", author: "Alice", lastMod: new Date("2023-11-27T13:12:00"), category: "Notes"},
      {filename: "Quarterly Report (Q2)", author: "Jimmy", lastMod: new Date("2023-10-19T11:34:00"), category: "Reports"}
    ]
  }
];