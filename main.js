new Swiper(".image-slider", {
  simulateTouch: true,
  touchRatio: 1,
  grabCursor: true,
  touchAngle: 45,
  slideToClickedSlide: true,
});

let comments = [];
loadComments();
let commentName = document.getElementById("comment-name");
let email = document.getElementById("comment-email");
let website = document.getElementById("comment-website");
let commentBody = document.getElementById("comment-body");
document.getElementById("comment-add").onclick = function () {
  let comment = {
    name: commentName.value,
    body: commentBody.value,
    time: Math.floor(Date.now() / 1000),
  };

  commentName.value = "";
  commentBody.value = "";
  email.value="";

  comments.push(comment);

  saveComments();
  showComments();
};
document.getElementById("comment-cansel").onclick = function () {
  commentName.value = "";
  commentBody.value = "";
  email.value="";
};

function saveComments() {
    localStorage.setItem('comments', JSON.stringify(comments));
}
/*let addCommentField = document.createElement('div');
document.body.append(addCommentField);
addCommentField.classList.add("commentField");
console.log(addCommentField.className); //перевірка*/

function loadComments() {
    if (localStorage.getItem('comments'))comments = JSON.parse(localStorage.getItem('comments'));
    showComments();
}

function showComments() {
    let commentField = document.querySelector('.comment_field');
    let out = '';
    comments.forEach(function(item){
        out+=`<p class="date small">${timeConverter(item.time)}</p>`;
        out+=`<p class="alert">${item.name}</p>`;
        out+=`<p class="alert">${item.body}</p>`;
    })
    commentField.innerHTML = out;

}
function timeConverter(UNIX_timestamp) {
    let a = new Date(UNIX_timestamp*1000);
    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    let year = a.getFullYear();
    let month = months[a.getMonth()];
    let date = a.getDate();
    let hour = a.getHours();
    let min = a.getMinutes();
    let sec = a.getSeconds();
    let time = date+' '+month+' '+year+' '+hour+':'+min+':'+sec+':';
    return time;
}

/*document.querySelector('.scroll-up').onclick = () => {
  window.scrollTo(scrollY, 0);
}*/



