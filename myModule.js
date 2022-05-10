import axios from "axios";

const getData = async (userID) => {
  const { data: users } = await axios(
    "https://jsonplaceholder.typicode.com/users/" + userID
  );
  const { data: posts } = await axios(
    `https://jsonplaceholder.typicode.com/posts?id=${userID}`
  );

  console.log(users);
  console.log("posts:", posts);
};

export default getData;