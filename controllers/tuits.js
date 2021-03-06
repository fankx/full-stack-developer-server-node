export default [
  {
    _id: '100',
    topic: 'Elon Musk',
    postedBy: {
      username: 'Elon Musk',
    },
    liked: true,
    disliked: false,
    handle: 'elonmusk',
    time: '23h',
    title: 'Countdown: Inspiration4 Mission to Space | Netflix Official Site',
    tuit: 'Amazing show about <a href="#">@Inspiration4x</a> mission!',
    logo_image: '/images/elon_musk_icon.jpeg',
    image: '/images/inspiration4.jpeg',
    summary:
      'From training to launch to landing, this all-access docuseries rides along with the Inspiration4 crew on thefirst all-civilian orbital space ...',
    link: 'netflix.com',
    stats: {
      comments: '4200',
      retuits: '3500',
      likes: '300',
      dislikes: '100',
    },
  },
  {
    _id: '101',
    topic: 'New York Post',
    postedBy: {
      username: 'New York Post',
    },
    liked: false,
    disliked: true,
    handle: 'nypost',
    time: '23h',
    tuit: 'Grimes seen reading Karl Marx following split with world\'s richest man Elon Musk <a href="#">trib.al/nx2Gfaq</a>',
    logo_image: '/images/new_york_post_icon.png',
    image: '/images/new_york_post_summary.jpeg',
    stats: {
      comments: '965',
      retuits: '2400',
      likes: '40',
      dislikes: '100',
    },
  },
];
