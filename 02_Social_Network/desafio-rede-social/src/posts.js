export default [
  {
    id: 1,
    owner: 'John Doe',
    description: 'A really nice post',
    likes: 12,
    timestamp: '03:42 am',
    comments: [{ owner: 'mariaelza', text: 'nice picture!' }],
    image: require('@/assets/images/post.jpg')
  },
  {
    id: 2,
    owner: 'Maria Elza',
    description: 'Another really nice post',
    likes: 6,
    timestamp: '07:32 pm',
    comments: [{ owner: 'ferdinand', text: 'This picture is awesome!' }],
    image: require('@/assets/images/post.jpg')
  }
]
