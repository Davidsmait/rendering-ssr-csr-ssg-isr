
async function getPost() {
    const url = "https://jsonplaceholder.typicode.com/posts"
    const res = await fetch(url, {cache: "no-store"})
    const data = await res.json()
    return data as any[]
}

export default async function Ssg(){
    const post = await getPost()
    
    return(
        <div>
            <h1>SSG</h1>
            <h5 className="text-blue-500 text-center">Static Site Generation</h5>
            <section >
                {post.map((data) => 
                    <div key={data.id}>
                        <h5>{data.title}</h5>
                        <p key={data.id}>{data.body}</p>
                    </div>
                )}
            </section>
            
            
        </div>
    )
}