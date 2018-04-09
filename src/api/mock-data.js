var u1 = {
  id: 'u_1',
  name: 'Sonja Page',
  username: 'sonja',
  password: 'password',
  email: 'spage@mba2018.hbs.edu',
  type: 'donor'
}

var u2 = {
  id: 'u_2',
  name: 'Karla Mendez',
  username: 'kmendez',
  password: 'password',
  email: 'kmendez@mba2018.hbs.edu',
  type: 'donor'
}

var u3 = {
  id: 'u_3',
  name: 'Jason Nedell',
  username: 'nedell',
  password: 'password',
  email: 'jason@pnc.one',
  type: 'donor'
}

var u4 = {
  id: 'u_4',
  name: 'Rickon Stark',
  username: 'shaggy',
  password: 'password',
  email: 'rickon@north.com',
  type: 'recipient'
}

var u5 = {
  id: 'u_5',
  name: 'Myrcella Baratheon',
  username: 'princess',
  password: 'password',
  email: 'princess@theredkeep.gov',
  type: 'recipient'
}

module.exports = {
  users: [
    u1,
    u2,
    u3,
    u4,
    u5
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
