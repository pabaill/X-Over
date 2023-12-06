export default PROJ_DATA = [
    {name: "iPhone 25", description: "Apple iPhone 25 Team - working towards developing a unique smartphone experience. Currently in beta testing phase.", updates: [{
      name: "Bill", text: "Updated Meeting Notes for 11/11", link: {text: "View File", filename: "Meeting Notes (11/11)"}, time: new Date("2023-11-27T14:25:00")
    }, {
      name: "Ted", text: "Updated Project Description", link: {text: "View Project"}, time: new Date("2023-11-28T17:25:00")
    }],
    members: [{name: "Bill", role: "Lead", pronouns: "he/him", email: "bill@stanford.edu", image: require("./../assets/ProfilePics/Profile-Pic6.png")}, {name: "Ted", role: "Engineer", pronouns: "he/him", email: "ted@stanford.edu", image: require("./../assets/ProfilePics/Profile-Pic2.png")}],
    thumb: require('./../assets/sample_project_thumbs/apple.png'),
    resources: [
      {filename: "Meeting Notes (11/11)", author: "Bill", lastMod: new Date("2023-11-27T14:25:00"), category: "Notes", uri: "https://docs.google.com/document/d/1MWf_snBSzjm2NfDOyKKvHROdZFm5iv9-fp_vZ2DrnSc/edit?usp=sharing"},
      {filename: "Budget Report", author: "Ted", lastMod: new Date("2023-11-27T09:25:00"), category: "Reports", uri: "https://docs.google.com/document/d/1MWf_snBSzjm2NfDOyKKvHROdZFm5iv9-fp_vZ2DrnSc/edit?usp=sharing"},
    ],
    tags: ["#software", "#mobile", "#iphone", "#apple"],
    isPublic: true,
    owner: {name: "Bill", role: "Lead", pronouns: "he/him", email: "bill@stanford.edu", image: require("./../assets/ProfilePics/Profile-Pic6.png")},
  },
    {name: "Google Pixel 12", description: "Google Pixel 12 Team - working towards developing a unique smartphone experience. Currently in alpha testing phase.", updates: [{
      name: "John", text: "Updated Meeting Notes for 11/12", link: {text: "View File", filename: "Meeting Notes (11/12)"}, time: new Date("2023-11-27T11:44:00")
    }],
    members: [{name: "John", role: "Lead", pronouns: "he/him", email: "john@stanford.edu", image: require("./../assets/ProfilePics/Profile-Pic7.png")}, {name: "Mary", role: "Engineer", pronouns: "she/her", email: "mary@stanford.edu", image: require("./../assets/ProfilePics/Profile-Pic9.png")}],
    thumb: require('./../assets/sample_project_thumbs/google.png'),
    resources: [
      {filename: "Meeting Notes (11/12)", author: "John", lastMod: new Date("2023-11-27T11:44:00"), category: "Notes", uri: "https://docs.google.com/document/d/1MWf_snBSzjm2NfDOyKKvHROdZFm5iv9-fp_vZ2DrnSc/edit?usp=sharing"},
      {filename: "Work Plan (Week 12)", author: "Mary", lastMod: new Date("2023-11-27T11:44:00"), category: "Reports", uri: "https://docs.google.com/document/d/1MWf_snBSzjm2NfDOyKKvHROdZFm5iv9-fp_vZ2DrnSc/edit?usp=sharing"}
    ],
    tags: ["#software", "#mobile", "#google"],
    isPublic: true,
    owner: {name: "John", role: "Lead", pronouns: "he/him", email: "john@stanford.edu", image: require("./../assets/ProfilePics/Profile-Pic7.png")},
  },
    {name: "Microsoft Surface XL 14", description: "Microsoft Surface XL 14 Team - working towards developing a unique laptop experience. Currently in beta testing phase.", updates: [{
      name: "Alice", text: "Updated Meeting Notes for 11/13", link: {text: "View File", filename: "Meeting Notes (11/13)"}, time: new Date("2023-11-27T13:12:00")
    }],
    members: [{name: "Alice", role: "Lead", pronouns: "she/her", email: "alice@stanford.edu", image: require("./../assets/ProfilePics/Profile-Pic3.png")}, {name: "Jimmy", pronouns: "he/him", role: "Designer", email: "jimmy@stanford.edu", image: require("./../assets/ProfilePics/Profile-Pic11.png")}],
    thumb: require('./../assets/sample_project_thumbs/microsoft.png'),
    resources: [
      {filename: "Meeting Notes (11/13)", author: "Alice", lastMod: new Date("2023-11-27T13:12:00"), category: "Notes", uri: "https://docs.google.com/document/d/1MWf_snBSzjm2NfDOyKKvHROdZFm5iv9-fp_vZ2DrnSc/edit?usp=sharing"},
      {filename: "Quarterly Report (Q2)", author: "Jimmy", lastMod: new Date("2023-10-19T11:34:00"), category: "Reports", uri: "https://docs.google.com/document/d/1MWf_snBSzjm2NfDOyKKvHROdZFm5iv9-fp_vZ2DrnSc/edit?usp=sharing"}
    ],
    tags: ["#software", "#laptop", "#windows"],
    isPublic: true,
    owner: {name: "Alice", role: "Lead", pronouns: "he/him", email: "alice@stanford.edu", image: require("./../assets/ProfilePics/Profile-Pic3.png")},
  },
  {name: "X-Over", description: "X-Over Development Team - creating the best collaborative work app for your organization. Yeah, we use our own app to structure our work. We're committed.", updates: [{
    name: "Jack", text: "Updated Meeting Notes for 12/1", link: {text: "View File", filename: "Meeting Notes (12/1)"}, time: new Date("2023-12-01T09:25:00")
  }, {
    name: "Phil", text: "Updated Project Description", link: {text: "View Project"}, time: new Date("2023-11-28T17:25:00")
  }],
  members: [
    {name: "Phil", role: "Lead", pronouns: "he/him", email: "pabaill@stanford.edu", image: require("./../assets/ProfilePics/Profile-Pic1.png")}, 
    {name: "Jack", role: "Software", pronouns: "he/him", email: "morris11@stanford.edu", image: require("./../assets/ProfilePics/Profile-Pic2.png")},
    {name: "Akhil", role: "Designer", pronouns: "he/him", email: "akhil98@stanford.edu", image: require("./../assets/ProfilePics/Profile-Pic5.png")}, 
    {name: "Sreethu", role: "Designer", pronouns: "he/him", email: "sreethu1@stanford.edu", image: require("./../assets/ProfilePics/Profile-Pic6.png")},
    {name: "Jasper", role: "Engagement", pronouns: "he/him", email: "jasper.points@stanford.edu", image: require("./../assets/ProfilePics/Profile-Pic8.png")}
  ],
  thumb: require('./../assets/sample_project_thumbs/xover.jpg'),
  resources: [
    {filename: "Meeting Notes (12/1)", author: "Jack", lastMod: new Date("2023-12-01T09:25:00"), category: "Notes", uri: "https://docs.google.com/document/d/1MWf_snBSzjm2NfDOyKKvHROdZFm5iv9-fp_vZ2DrnSc/edit?usp=sharing"},
    {filename: "Final Project Timeline", author: "Sreethu", lastMod: new Date("2023-11-27T09:25:00"), category: "Reports", uri: "https://docs.google.com/document/d/1MWf_snBSzjm2NfDOyKKvHROdZFm5iv9-fp_vZ2DrnSc/edit?usp=sharing"},
  ],
  tags: ["#software", "#mobile", "#ios", "#android", "#teamwork"],
  isPublic: true,
  owner: {name: "Phil", role: "Lead", pronouns: "he/him", email: "pabaill@stanford.edu", image: require("./../assets/ProfilePics/Profile-Pic1.png")},
  }
];