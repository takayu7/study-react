

const BlogPage = async () => {
    const posts: string[] = ['1', '2', '3']

  return (
    <div>
      <h1>Blog</h1>
      <ul>
        {posts.map((post: string) => (
          <li key={post}>
            {post}
          </li>
        ))}
      </ul>
    </div>
  )
}
export default BlogPage
