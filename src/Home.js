import React from 'react'
import BlogList from "./Bloglist";
import useFetch from './useFetch';

const Home = () => {
    const { data: blogs, isPending, error} = useFetch(' http://localhost:8000/blogs')

  
    // const [name, setName] = useState("Maureen");
    // const [age, setAge] = useState(50);

// const handleClick = () => {
//     setName("Ifeoma");
//     setAge(60);
// } 
    return ( 
        <div className="home">
                    {/* prop */}
            { error && <div>{ error }</div>}
            {isPending && <div>Loading......</div> }
            {blogs && <BlogList blogs={ blogs }  title="All Blogs!!"  /> }
            {/* <BlogList blogs={ blogs.filter((blog) => blog.author === "Emma") }  title="Emma's blogs"/> */}
            {/* <h2>Hompage</h2> */}
            {/* <p>{ name } is { age } years old</p>
            <button onClick={handleClick }>Click me</button> */}
              
        </div>
        
     ); 
};
 
export default Home;