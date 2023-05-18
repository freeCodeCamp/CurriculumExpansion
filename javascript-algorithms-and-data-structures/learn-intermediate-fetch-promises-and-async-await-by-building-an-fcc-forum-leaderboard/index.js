const FORUM_LATEST = "https://forum-proxy.freecodecamp.rocks/latest";
const FORUM_TOPIC_URL = "https://forum.freecodecamp.org/t/";
const FORUM_CATEGORY_URL = "https://forum.freecodecamp.org/c/";
const AVATAR_URL = "https://sea1.discourse-cdn.com/freecodecamp";

const postsContainer = document.getElementById("posts-container");

// we supply this to the campers

const categorieList = {
  299: { category: "Career Advice", className: "career" },
  409: { category: "Project Feedback", className: "feedback" },
  417: { category: "freeCodeCamp Support", className: "support" },
  421: { category: "JavaScript", className: "javascript" },
  423: { category: "HTML - CSS", className: "html-css" },
  424: { category: "Python", className: "python" },
  432: { category: "You Can Do This!", className: "motivation" },
  560: { category: "Backend Development", className: "backend" },
};

async function fetchData() {
  const res = await fetch(FORUM_LATEST);
  const data = await res.json();
  showLatestPosts(data);
}
fetchData();

const forumCategories = (id) => {
  let selectedCategory = {};

  if (categorieList.hasOwnProperty(id)) {
    const { category, className } = categorieList[id];
    selectedCategory.className = className;
    selectedCategory.category = category;
  } else {
    selectedCategory.className = "General";
    selectedCategory.category = "General";
    id = 1;
  }

  const url = `${FORUM_CATEGORY_URL}${selectedCategory.className}/${id}`;
  const linkText = selectedCategory.category;
  const linkClass = `category ${selectedCategory.className}`;
  const linkTarget = "_blank";

  return `<a href="${url}" class="${linkClass}" target="${linkTarget}">${linkText}</a>`;
};

function showTime(time) {
  const currentTime = new Date();
  const lastPost = new Date(time);

  const timeDifference = currentTime - lastPost;
  const MS_PER_MINUTE = 1000 * 60;

  const minutesAgo = Math.floor(timeDifference / MS_PER_MINUTE);
  const hoursAgo = Math.floor(minutesAgo / 60);
  const daysAgo = Math.floor(hoursAgo / 24);

  if (minutesAgo < 60) {
    return `${minutesAgo}m ago`;
  }
  if (hoursAgo < 24) {
    return `${hoursAgo}h ago`;
  }
  return `${daysAgo}d ago`;
}

function countingViews(views) {
  const thousands = Math.floor(views / 1000);

  if (views >= 1000) {
    return `${thousands}k`;
  }
  return views;
}

const displayUsers = (posters, users) => {
  return posters
    .map((poster) => {
      const user = users.find((user) => user.id === poster.user_id);
      if (user) {
        const avatar = user.avatar_template.replace(/{size}/, 30);
        const avatarUrl = avatar.startsWith("/user_avatar/")
          ? AVATAR_URL.concat(avatar)
          : avatar;
        return `<img src="${avatarUrl}" alt="${user.name}">`;
      }
    })
    .join("");
};

const showLatestPosts = (posts) => {
  const { topic_list, users } = posts;
  const { topics } = topic_list;

  topics.forEach((item) => {
    const {
      id,
      title,
      views,
      posts_count,
      slug,
      posters,
      excerpt,
      category_id,
      bumped_at,
    } = item;
    return (postsContainer.innerHTML += `

      <tr id="${id}">
        <td>
          <a class="post-title" target="_blank" href="${FORUM_TOPIC_URL}${slug}/${id}">
            ${title}
          </a>
          ${forumCategories(category_id)}
        </td>

        <td>
          <div class="avatar-container">
            ${displayUsers(posters, users)}
          </div>
        </td>

        <td class="replies topic-data"> ${posts_count - 1}</td>
        <td class="views topic-data"> ${countingViews(views)}</td>
        <td class="activity topic-data">${showTime(bumped_at)}</td>
      </tr>
    `);
  });
};
