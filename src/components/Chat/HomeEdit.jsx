/* eslint-disable no-useless-catch */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";

export default function Home() {
  useEffect(() => {
    viewPost();
  }, []);

  const [ispost, setpost] = useState([]);
  const viewPost = async () => {
    try {
      await axios.get(`http://localhost:8080/allPost`).then((res) => {
        if (res.data.success === true) {
          setpost(res.data.listall);
        }
      });
    } catch (error) {
      throw error;
    }
  };

  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <h1>
            React <span> wysiwyg </span> text editor
          </h1>
          <Button
            component={Link}
            variant="outlined"
            to="/edit/add"
            color="primary"
          >
            <Typography>Create New</Typography>
          </Button>

          {ispost.map((item, index) => (
            <div className="post__list" key={index}>
              <h2>{item.title}</h2>

              <div
                className="post__description"
                dangerouslySetInnerHTML={{ __html: item.description }}
              />
              <Link to={`/edit/${item.id}`} className="btn btn__theme">
                Edit
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
