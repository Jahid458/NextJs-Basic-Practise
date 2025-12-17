'use client'


import React, { use } from "react";

const SingleProfilePost =  (props) => {
  console.log(props);

  const user =  use(props.params);
  console.log(user);
  return <h1>user: {user.username}, postId: {user.postId}</h1>;
};

export default SingleProfilePost;
//Dynamic route use in server component 
