import React, { useEffect, useState } from "react";
import { Container } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { getPosts } from "./actions/posts";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";

function App() {
  const [currentId, setCurrentId] = useState(0);

  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch, posts]);
  return (
    <Container maxwidth="lg">
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/auth" exact component={Auth} />
      </Switch>
      <Home currentId={currentId} setCurrentId={setCurrentId} posts={posts} />
    </Container>
  );
}

export default App;
