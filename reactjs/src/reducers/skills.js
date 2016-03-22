const initialState = {
  skills: [
    {
      id: 1,
      title: "Django Development",
      slug: "django-development",
      total_modules: 123,
      modules_left: 123,
      mentors: 15,
      mentees: 78,
      alumni: 12,
      prerequisites: [4, 5, 6, ],
    },
    {
      id: 2,
      title: "Ruby on Rails Development",
      slug: "ruby-on-rails-development",
      total_modules: 98,
      modules_left: 98,
      mentors: 25,
      mentees: 210,
      alumni: 50,
      prerequisites: [4, 5, 6, ],
    },
    {
      id: 3,
      title: "Frontend Development",
      slug: "frontend-development",
      total_modules: 58,
      modules_left: 58,
      mentors: 5,
      mentees: 500,
      alumni: 80,
      prerequisites: [4, 5, 6, ],
    },
    {
      id: 4,
      title: "Git",
      slug: "git",
      total_modules: 15,
      modules_left: 0,
      mentors: 20,
      mentees: 1500,
      alumni: 180,
      prerequisites: [],
    },
    {
      id: 5,
      title: "UNIX Basics",
      slug: "unix-basics",
      total_modules: 32,
      modules_left: 12,
      mentors: 5,
      mentees: 250,
      alumni: 2,
      prerequisites: [],
    },
    {
      id: 6,
      title: "HTML & CSS",
      slug: "html-css",
      total_modules: 64,
      modules_left: 5,
      mentors: 100,
      mentees: 25000,
      alumni: 500,
      prerequisites: [],
    }
  ]
}

export default function reducer(state=initialState, action={}) {
  switch (action.type) {
  default:
    return state
  }
}
