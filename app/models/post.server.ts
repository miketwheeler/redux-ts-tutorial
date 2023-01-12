type Post = {
    slug: string;
    title: string;
}

export async function getPosts(): Promise<Array<Post>> {
    return [
        {
            slug: "my-first-post",
            title: "My First Post",
        },
        {
            slug: "90s-mixtape",
            title: "A 90s Mixtape I made just for you",
        }
    ]
}