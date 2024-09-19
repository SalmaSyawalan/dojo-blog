const handlePost = (e) => {
    setLoading(true);
    e.preventDefault();
    const blog = { title, body, author };

    fetch('http://localhost:8000/blogs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(blog)
    }).then(() => {
        console.log('a blog is successfully added');
        setLoading(false);
        nav('/');
    })
}

const handlePut = () => {
    
}