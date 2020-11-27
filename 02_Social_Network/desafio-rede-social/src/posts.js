export default [
  {
    id: 1,
    owner: 'John Doe',
    description: 'A really nice post',
    timestamp: '03:42 am',
    comments: [{ owner: 'mariaelza', text: 'nice picture!' }],
    image: require('@/assets/images/post.jpg')
  },
  {
    id: 2,
    owner: 'Maria Elza',
    description: 'Another really nice post',
    timestamp: '07:32 pm',
    comments: [{ owner: 'ferdinand', text: 'This picture is awesome!' }],
    image: require('@/assets/images/norway.jpg')
  },
  {
    id: 3,
    owner: 'Zack Stewart',
    description: 'Another really nice post',
    timestamp: '06:02 am',
    comments: [{ owner: 'ferdinand', text: 'This picture is awesome!' }],
    image: require('@/assets/images/boreal.jpg')
  }
]
