const postsContainer = document.getElementById("posts-container");
const FORUM_TOPIC_URL = "https://forum.freecodecamp.org/t/";
const FORUM_CATEGORY_URL = "https://forum.freecodecamp.org/c/";
const AVATAR_URL = "https://sea1.discourse-cdn.com/freecodecamp";

// this might be the first time campers are working with IFFEs
(async () => {
  const res = await fetch("https://forum-proxy.freecodecamp.rocks/latest");
  const data = await res.json();
  showLatestPosts(data);
  // do we want to leave this here so campers can see the output?
  console.log(data);
})();

// do we want campers to build this out or just supply it for them?
const categories = {
  299: { category: "Career Advice", className: "career" },
  409: { category: "Project Feedback", className: "feedback" },
  417: { category: "freeCodeCamp Support", className: "support" },
  421: { category: "JavaScript", className: "javascript" },
  423: { category: "HTML - CSS", className: "html-css" },
  424: { category: "Python", className: "python" },
  432: { category: "You Can Do This!", className: "motivation" },
  560: { category: "Backend Development", className: "backend" },
};

const forumCategories = (id) => {
  return categories.hasOwnProperty(id)
    ? `<a class="category ${categories[id]["className"]}" target="_blank" href="${FORUM_CATEGORY_URL}${categories[id]["className"]}/${id}">${categories[id]["category"]}</a>`
    : `<a class="category general" target="_blank" href="${FORUM_CATEGORY_URL}general/1">General</a>`;
};

const showTime = (time) => {
  const lastPost = new Date(time);
  const currentTime = new Date();

  if (currentTime.getUTCHours() === lastPost.getUTCHours()) {
    return `${currentTime.getMinutes() - lastPost.getUTCMinutes()}m`;
  } else {
    return `${currentTime.getHours() - lastPost.getHours()}h`;
  }
};

const countingViews = (userViews) => {
  let count = 0;
  let currViews = userViews;
  while (currViews !== 0) {
    currViews = Math.floor(currViews / 10);
    count++;
  }

  if (count >= 4) {
    return `${userViews.toString().slice(0, -3)}k`;
  } else {
    return userViews;
  }
};

const showLatestPosts = (posts) => {
  const { topic_list, users } = posts;
  const { topics } = topic_list;

  const displayUsers = (posters) => {
    let postersArr = [];
    let avatarArr = [];
    let posterIds = posters.map((poster) => poster.user_id);
    for (const user of users) {
      if (posterIds.includes(user.id)) {
        postersArr.push(user);
      }
    }

    postersArr.forEach((user) => {
      const avatar = user.avatar_template.replace(/{size}/, 30);
      if (avatar.startsWith("/user_avatar/")) {
        avatarArr.push(AVATAR_URL.concat(avatar));
      } else {
        avatarArr.push(avatar);
      }
    });

    return avatarArr
      .map(
        (avatar, index) =>
          `<img src="${avatar}" alt="${postersArr[index].name}">`
      )
      .join("");
  };

  topics.map(
    ({
      id,
      title,
      views,
      posts_count,
      slug,
      posters,
      has_summary,
      excerpt,
      category_id,
      bumped_at,
    }) =>
      (postsContainer.innerHTML += `

      <tr id="${id}">
        <td>
          <a class="post-title post" target="_blank" href="${FORUM_TOPIC_URL}${slug}/${id}">
            ${title}
          </a>
          <div>
            ${forumCategories(category_id)}
          </div>
          <a class="post" target="_blank" href="${FORUM_TOPIC_URL}${slug}/${id}">
            ${has_summary ? `${excerpt}read more` : ""}
          </a>
        </td>

        <td>
          <div class="avatar-container">
            ${displayUsers(posters)}
          </div>
        </td>

        <td class="replies topic-data"> ${posts_count - 1}</td>
        <td class="views topic-data"> ${countingViews(views)}</td>
        <td class="activity topic-data">${showTime(bumped_at)}</td>
      </tr>

    `)
  );
};
