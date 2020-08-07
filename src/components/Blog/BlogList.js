import React, { useState, useEffect } from 'react';
import BlogCard from './BlogCard';
import BlogManager from '../../modules/BlogManager'
import { Button, Container, CardColumns } from 'react-bootstrap';
import Footer from '../Footer/Footer'


const BlogList = (props) => {
    const [blogs, setBlogs] = useState([]); 

    const getBlogs = () => {
        return BlogManager.getAll().then(blogsFromAPI => {
            setBlogs(blogsFromAPI) //fetch call from API
        });
    };

    useEffect(() => {
        getBlogs();  //look into effect more here
    }, []);

    const deleteBlog = id => {
        BlogManager.delete(id)
            .then(() => BlogManager.getAll().then(setBlogs));
    };

    return (
        <div>
           
                 
                    
                 
    
               
                {blogs.map(blog => {
                if (blog.userId === parseInt(sessionStorage.getItem("activeUser"))) {
                    return (
                    <BlogCard className="cards" key={blog.id} blog={blog}
                        deleteBlog={deleteBlog}
                        {...props} />
                        
                        )
                    }
                })}

                <div className="wish_button"> 
                         <Button variant="outline-primary" type="button"
                    className="btn"
                    onClick={() => { props.history.push("/blogs/new") }}>
                   Post to Blog
                </ Button> 
                </div>
                     
                     
               
                <Footer />
                    </div>
    );
};

export default BlogList