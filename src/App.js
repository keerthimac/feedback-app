function App() {
const title = 'Blog Post';
const posts = [
    {
        id: 1,
        body: 'This is post one'
    },
    {
        id: 2,
        body: 'This is post two'
    }
];

 return (
    <div className="container">
       <h1>{title}</h1>
       <div className="comments">
           <h3>comment ({posts.length})</h3>
              <ul>
                    {posts.map(post => (
                        <li key={post.id}>{post.body}</li>
                    ))}
                </ul>
        </div>
    </div>
    )
}

export default App;