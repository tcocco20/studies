export const facade = () => {
  const getUsers = () => getFetch("https://jsonplaceholder.typicode.com/users");

  const getUserPosts = (id) =>
    getFetch("https://jsonplaceholder.typicode.com/posts", {
      userId: id,
    });

  const getFetch = (url, params = {}) => {
    const queryString = Object.entries(params)
      .map((p) => `${p[0]}=${p[1]}`)
      .join("&");

    return fetch(`${url}?${queryString}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }).then((response) => response.json());
  };

  getUsers().then((users) =>
    users.forEach((user) =>
      getUserPosts(user.id).then((posts) =>
        console.log(user.name, posts.length)
      )
    )
  );
};
