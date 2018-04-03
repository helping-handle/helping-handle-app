module.exports = {
  users: [
    {
      id: 'u_1',
      name: 'Sonja Page',
      username: 'sonja',
      email: 'spage@mba2018.hbs.edu'
    },
    {
      id: 'u_2',
      name: 'Karla Mendez',
      username: 'kmendez',
      email: 'kmendez@mba2018.hbs.edu'
    },
    {
      id: 'u_3',
      name: 'Jason Nedell',
      username: 'nedell',
      email: 'jason@pnc.one'
    }
  ],
  campaigns: [
    {
      id: 'c_1',
      name: 'Pay November Rent',
      desc: 'I need some help paying my rent for this month. All proceeds' +
            'go directly to my landlord!',
      amount: 300
    },
    {
      id: 'c_2',
      name: 'Buy Week\'s Groceries',
      desc: 'Items include kale, wheatgrass, kombucha, and saffron.',
      amount: 40
    },
    {
      id: 'c_3',
      name: 'Christmas Present for Kids',
      desc: 'My children need as many Bionicles as possible! Please help' +
            'me buy 10 of them so my son can unite them into the Toa Muta',
      amount: 70
    }
  ]
}

// timestamp: Date.now() - Math.floor(Math.random() * 1209600) + 302400
