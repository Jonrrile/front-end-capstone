import React, { useState } from 'react';
import BlogManager from '../../modules/BlogManager';
import { Form, FormGroup, FormControl, FormContent, FormFile } from "react-bootstrap";
import { Button } from "react-bootstrap";

const BlogForm = props => {
  const [blog, setBlog] = useState({ title: "", text: "",  date: "", userId: "", username: "", url: "", timestamp: new Date().toLocaleDateString()});
  const [isLoading, setIsLoading] = useState(false);

  let user = sessionStorage.getItem("credentials")
  user = JSON.parse(user)
  blog.username = user.user

  blog.userId = parseInt(sessionStorage.getItem("activeUser"))
  const handleFieldChange = evt => {
      const stateToChange = { ...blog};
      stateToChange[evt.target.id] = evt.target.value;
      setBlog(stateToChange);
  };

  const constructNewBlog = evt => {
      evt.preventDefault();
      if (blog.title === "" || blog.text === "") {
          window.alert("Please fill out all fields!");
      } else {
          setIsLoading(true);
          BlogManager.post(blog)
          .then(() => props.history.push("/blog"))
      }

  };

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
        onClick={constructNewBlog}
      >Blog!
      </Button>
    </Form>
    </div>

);
};

export default BlogForm