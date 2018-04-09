module.exports = {
  users: [
    {
      id: 'u_1',
      name: 'Sonja Page',
      username: 'sonja',
      email: 'spage@mba2018.hbs.edu',
      type: 'donor'
    },
    {
      id: 'u_2',
      name: 'Karla Mendez',
      username: 'kmendez',
      email: 'kmendez@mba2018.hbs.edu',
      type: 'donor'
    },
    {
      id: 'u_3',
      name: 'Jason Nedell',
      username: 'nedell',
      email: 'jason@pnc.one',
      type: 'donor'
    },
    {
      id: 'u_4',
      name: 'Rickon Stark',
      username: 'shaggy',
      email: 'rickon@north.com',
      type: 'recipient'
    },
    {
      id: 'u_5',
      name: 'Myrcella Baratheon',
      username: 'princess',
      email: 'princess@theredkeep.gov',
      type: 'recipient'
    }
  ],
  campaigns: [
    {
      id: 'c_1',
      u_id: 'u_4',
      name: 'Pay November Rent',
      desc: 'I need some help paying my rent for this month. All proceeds ' +
            'go directly to my landlord!',
      amount: 300,
      percent: 67,
      donors: 13
    },
    {
      id: 'c_2',
      u_id: 'u_4',
      name: 'Buy Week\'s Groceries',
      desc: 'Items include eggs, milk, vegetables, and rice.',
      amount: 40,
      percent: 90,
      donors: 5
    },
    {
      id: 'c_3',
      u_id: 'u_4',
      name: 'Christmas Present for Kids',
      desc: 'My children need as many Bionicles as possible! Please help ' +
            'me buy 10 of them so my son can unite them into the Toa Muta',
      created: Date.now() - Math.floor(Math.random() * 1209600) + 302400,
      amount: 70,
      percent: 14,
      donors: 34
    },
    {
      id: 'c_4',
      u_id: 'u_5',
      name: 'Bus Fare',
      desc: 'Looking to obtain bus fair for the month so I can commute to work',
      created: Date.now() - Math.floor(Math.random() * 1209600) + 302400,
      amount: 70,
      percent: 0,
      donors: 0
    }
  ]
}

// timestamp: Date.now() - Math.floor(Math.random() * 1209600) + 302400
