import React, { useState } from 'react';
import BlogManager from '../../modules/BlogManager';
import { Form, FormGroup, FormControl, FormContent, FormFile } from "react-bootstrap";
import { Button } from "react-bootstrap";

const BlogForm = props => {
  const [blog, setBlog] = useState({ title: "", text: "",  date: "", userId: ""});
  const [isLoading, setIsLoading] = useState(false);
  blog.userId = parseInt(sessionStorage.getItem("activeUser"))
  const handleFieldChange = evt => {
      const stateToChange = { ...blog};
      stateToChange[evt.target.id] = evt.target.value;
      setBlog(stateToChange);
  };

  const constructNewBlog = evt => {
      evt.preventDefault();
      if (blog.title === "" || blog.text === "" || blog.date === "") {
          window.alert("Please fill out all fields!");
      } else {
          setIsLoading(true);
          BlogManager.post(blog)
          .then(() => props.history.push("/blogs"))
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
      <Form.Label>Blog</Form.Label>
      <FormControl
        as="textarea"
        rows="3"
        required
        onChange={handleFieldChange}
        id="text"
        placeholder="Blog"
      />
      </FormGroup>
      <FormGroup>
        <Form.Label>Date</Form.Label>
      <FormControl
        type="date"
        rows="3"
        required
        onChange={handleFieldChange}
        id="date"
        placeholder="Date"
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