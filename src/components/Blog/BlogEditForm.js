import React, { useState, useEffect } from "react"
import BlogManager from "../../modules/BlogManager"
import { Button, FormGroup, Form, FormControl } from 'react-bootstrap';

const BlogEditForm = props => {
    const [blog, setBlog] = useState({ title: "", text: "",  userId: "", url: "", timestamp: new Date().toLocaleDateString()});
    const [isLoading, setIsLoading] = useState(false);
    
    const handleFieldChange = evt => {
        const stateToChange = { ...blog };
        stateToChange[evt.target.id] = evt.target.value;
        setBlog(stateToChange);
    };

    const updateBlog = evt => {
        evt.preventDefault()
        setIsLoading(true);

    // This is an edit, so we need the id
    const editedBlog = {
        id: props.match.params.blogId,
        title: blog.title,
        url: blog.url,
        userId: blog.userId = parseInt(sessionStorage.getItem("activeUser")),
        text: blog.text,
        timestamp: blog.timestamp
    };

    BlogManager.update(editedBlog)
        .then(() => props.history.push("/blog"))
    }

    useEffect(() => {
        BlogManager.get(props.match.params.blogId)
            .then(blog => {
                setBlog(blog);
                setIsLoading(false);
            });
    }, []);

    return (
        <div className="journey_form_container">
       <Form className="journey_form">
      <FormGroup>
        <Form.Label>Title</Form.Label>
          <FormControl
            type="text"
            required
            onChange={handleFieldChange}
            id="title"
            placeholder="Title"
          />
          </FormGroup>
      <FormGroup>
        <Form.Label>Article link</Form.Label>
          <FormControl
            type="url"
            required
            onChange={handleFieldChange}
            id="url"
            placeholder="Article Link (optional)"
          />
          </FormGroup>
          <FormGroup>
          <Form.Label>Content</Form.Label>
          <FormControl
            as="textarea"
            rows="3"
            required
            onChange={handleFieldChange}
            id="text"
            placeholder="Enter your blog"
          />
          </FormGroup>
         
          
          <Button
            variant="outline-primary"
            type="submit"
            disabled={isLoading}
            onClick={updateBlog}
          >Blog!
          </Button>
        </Form>
        </div>
    
    );
    };

export default BlogEditForm