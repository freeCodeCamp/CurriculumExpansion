1. You should have a function named `timeAgo` that takes a timestamp in the ISO 8601 format as the argument.
1. The `timeAgo` function should compute the time difference between the time passed as argument and the current time and return:
    - `xm ago` (`x` represents minutes) if the amount of minutes that have passed is less than `60`.
    - `xh ago` (`x` represents hours) if the amount of hours that have passed is less than `24`.
    - `xd ago` (`x` represents days) otherwise.
1. You should have a function named `viewCount` that takes the number of views of a post as the argument.
1. If the value of the views passed as the argument is greater than or equal to `1000`, the `viewCount` function should return a string with the views value divided by `1000`, rounded down to the nearest whole number and the letter `k` appended to it. Otherwise, it should return the views value.
1. You should have a function named `forumCategory` that takes the id of a selected category as the argument.
1. The `forumCategory` function should verify that the selected category id is a property of the `allCategories` object and should return a string containing an anchor element with:
    - the text of the `category` key of the selected category.
    - a class of `category` followed by the `className` property of the selected category.
    - an `href` with the value of `<forumCategoryUrl>/<className>/<id>`, where `<className>` is the `className` property of the selected category and `id` is the argument passed to `forumCategory`.
1. If the `allCategories` object does not have the selected category id as its property, `className` and `category` should be indicated as `general`.
1. You should have a function named `avatars` that takes two arrays representing posters and users, respectively.
1. The `avatars` function should return a string made by joining `img` elements, one for each poster found inside the user array. *Hint:* You can find users by comparing the `user_id` property of the poster with the `id` property` of the user.
1. The `avatars` function should set each avatar's size by accessing the `avatar_template` property and replacing `{size}` with `30`. 
1. Each image element should have an alt text with the value of the `name` property of the poster.
1. Each image element should have a source with the value of the `avatar_template` property of the poster. In case `avatar_template` contains a relative path, you should set the source to `<avatarUrl>/<avatar_template>`.
1. You should have a function named `showLatestPosts` that takes a single parameter.
1. The `showLatestPosts` should extract the `users` and `topic_list` properties from the object passed as argument. Also, it should process the following properties of the `topics` object contained in `topic_list`:
    - `id`: the id of the post
    - `title`: the title of the post
    - `views`: the number of views of the post 
    - `post_count`: the number of replies to the topic
    - `slug`: the slug of the post
    - `posters`: the posters for that topic
    - `category_id`: an integer indicating the category id for the post
    - `bumped_at`: a timestamp in the ISO 8601 format
1. The `showLatestPosts` should set the inner HTML of `#posts-container` to a string made by joining `tr` elements, one for each item in `topics`.
1. Each `tr` element should have five `td` elements in it:
    - a `td` containing two anchor elements, one with the class of `post-title`, an `href` of `<forumTopicUrl>/<slug>/<id>`, an anchor text of `<title>`, and one obtained by calling `forumCategory` with `category_id`.
    - a `td` containing the image returned by the `avatars` function called with `posters` and `users` as arguments and nested within a `div` element with the class of `avatar-container`.
    - a `td` containing the number of replies to the post. *Hint:* use `post_count - 1`.
    - a `td` containing the number of views of the post.
    - a `td` containing the time passed since the last activity.
1. You should have an async function named `fetchData`.
1. The `fetchData` function should request data from `forumLatest` and call `showLatestPosts` passing it the response parsed as JSON.
1. If there's an error when fecthing data, the `fetchData` function should log the error to the console.
