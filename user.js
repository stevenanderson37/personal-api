var user = {
  name: "Steven Anderson",
  location: "United States",
  occupations: ["Web Developer", "Graphic Designer", "Business Owner"],
  hobbies: [
    {
      name: "Hiking",
      type: "Outdoors"
    },
    {
      name: "Basketball",
      type: "Sports"
    },
    {
      name: "Movies",
      type: "Entertainment"
    }
  ],
  family: [
    {
      name: "Emily",
      relation: "Wife",
      gender: "Female"
    },
    {
      name: "Milo",
      relation: "Son",
      gender: "Male"
    },{
      name: "Oliver",
      relation: "Son",
      gender: "Male"
    }
  ],
  restaurants: [
    {
      name: "Five-Star BBQ",
      type: "BBQ",
      rating: "4/5"
    },
    {
      name: "Ernie's Sports Deli",
      type: "Sandwich",
      rating: "4/5"
    },
    {
      name: "Chick-fil-A",
      type: "Fastfood",
      rating: "3/5"
    }
  ]
};
module.exports = user;
