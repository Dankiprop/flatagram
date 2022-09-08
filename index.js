// write your code here
    const FlatagramAPI = "http://localhost:3000/images/1";
    const cardImage = document.getElementById("card-image");
    const cardTitle = document.getElementById("card-title");
    const likeCount = document.getElementById("like-count");
    const commentsList = document.getElementById("comments-list");
    let likes;

    document.getElementById("like-button").addEventListener("click", () =>
    {
    likes += 1;
    renderLikes();
    });

    fetch (FlatagramAPI)
    .then((res) =>res.json())
    .then(renderGram);

    function renderGram(data) {
    likes = data.likes;


    cardImage.src = data.image;
    cardTitle.textContent = data.title;
    renderLikes ();
    renderComments (data.comments);
    }

    function renderLikes() {
    document.getElementById("like-count").textContent = `${likes} likes`;
    }

    function renderComments (comments) {
    commentsList.innerHTML = "";
    comments.forEach(renderComment);
    }

    function renderComment (comment) {
    const li = document.createElement("li");
    li.textContent = comment.content;
    commentsList.append(li);
    }

    function addComment (event) {
    event.preventDefault();
    const commentText = event.target.comment.value;
    renderComment({ content: commentText });

    event.target.reset();
    }
    function el(id) {
    return document.getElementById(id);
    }
    
    
    
    
    
    
    