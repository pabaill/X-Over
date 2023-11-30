export default PROJ_DATA = [
    {name: "iPhone 25", description: "Apple iPhone 25 Team - working towards developing a unique smartphone experience. Currently in beta testing phase.", updates: [{
      name: "Bill", text: "Updated Meeting Notes for 11/11", link: {text: "View File", filename: "Meeting Notes (11/11)"}, time: new Date("2023-11-27T14:25:00")
    }, {
      name: "Ted", text: "Updated Project Description", link: {text: "View Project"}, time: new Date("2023-11-28T17:25:00")
    }],
    members: [{name: "Bill", role: "Lead", pronouns: "he/him", email: "bill@stanford.edu", image: "assets/default_profile.png"}, {name: "Ted", role: "Engineer", pronouns: "he/him", email: "ted@stanford.edu", image: "assets/default_profile.png"}],
    thumb: require('./../assets/sample_project_thumbs/apple.png'),
    resources: [
      {filename: "Meeting Notes (11/11)", author: "Bill", lastMod: new Date("2023-11-27T14:25:00"), category: "Notes", uri: "https://docs.google.com/document/d/1MWf_snBSzjm2NfDOyKKvHROdZFm5iv9-fp_vZ2DrnSc/edit?usp=sharing"},
      {filename: "Budget Report", author: "Ted", lastMod: new Date("2023-11-27T09:25:00"), category: "Reports", uri: "https://docs.google.com/document/d/1MWf_snBSzjm2NfDOyKKvHROdZFm5iv9-fp_vZ2DrnSc/edit?usp=sharing"},
    ],
    tags: ["#software, #mobile, #iphone"]
  },
    {name: "Google Pixel 12", description: "Google Pixel 12 Team - working towards developing a unique smartphone experience. Currently in alpha testing phase.", updates: [{
      name: "John", text: "Updated Meeting Notes for 11/12", link: {text: "View File", filename: "Meeting Notes (11/12)"}, time: new Date("2023-11-27T11:44:00")
    }],
    members: [{name: "John", role: "Lead", pronouns: "he/him", email: "john@stanford.edu", image: "assets/default_profile.png"}, {name: "Mary", role: "Engineer", pronouns: "she/her", email: "mary@stanford.edu", image: "assets/default_profile.png"}],
    thumb: require('./../assets/sample_project_thumbs/google.png'),
    resources: [
      {filename: "Meeting Notes (11/12)", author: "John", lastMod: new Date("2023-11-27T11:44:00"), category: "Notes", uri: "https://docs.google.com/document/d/1MWf_snBSzjm2NfDOyKKvHROdZFm5iv9-fp_vZ2DrnSc/edit?usp=sharing"},
      {filename: "Work Plan (Week 12)", author: "Mary", lastMod: new Date("2023-11-27T11:44:00"), category: "Reports", uri: "https://docs.google.com/document/d/1MWf_snBSzjm2NfDOyKKvHROdZFm5iv9-fp_vZ2DrnSc/edit?usp=sharing"}
    ],
    tags: ["#software, #mobile, #google"]
  },
    {name: "Microsoft Surface XL 14", description: "Microsoft Surface XL 14 Team - working towards developing a unique laptop experience. Currently in beta testing phase.", updates: [{
      name: "Alice", text: "Updated Meeting Notes for 11/13", link: {text: "View File", filename: "Meeting Notes (11/13)"}, time: new Date("2023-11-27T13:12:00")
    }],
    members: [{name: "Alice", role: "Lead", pronouns: "she/her", email: "alice@stanford.edu", image: "assets/default_profile.png"}, {name: "Jimmy", pronouns: "he/him", role: "Designer", email: "jimmy@stanford.edu", image: "assets/default_profile.png"}],
    thumb: require('./../assets/sample_project_thumbs/microsoft.png'),
    resources: [
      {filename: "Meeting Notes (11/13)", author: "Alice", lastMod: new Date("2023-11-27T13:12:00"), category: "Notes", uri: "https://docs.google.com/document/d/1MWf_snBSzjm2NfDOyKKvHROdZFm5iv9-fp_vZ2DrnSc/edit?usp=sharing"},
      {filename: "Quarterly Report (Q2)", author: "Jimmy", lastMod: new Date("2023-10-19T11:34:00"), category: "Reports", uri: "https://docs.google.com/document/d/1MWf_snBSzjm2NfDOyKKvHROdZFm5iv9-fp_vZ2DrnSc/edit?usp=sharing"}
    ],
    tags: ["#software, #laptop, #windows"]
  }
];