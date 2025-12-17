import React from "react";

const SingleProfilePost = async (props) => {
  console.log(props);

  const user = await props.params;
  console.log(user);
  return <h1>user: {user.username}, postId: {user.postId}</h1>;
};

export default SingleProfilePost;
//Dynamic route use in server component 
