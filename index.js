import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
class Post {
    constructor(authorName, articleTitle, articlePreview, articleBody,) {
        this.authorName = authorName;
        this.articlePreview = articlePreview;
        this.articleBody = articleBody;
        this.articleTitle = articleTitle;
    }
}
var posts=[];

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/new_post", (req, res) => {
    res.render("new_post.ejs");
});

app.post("/submit_new_post", (req, res) => {
    var new_post = new Post(req.body.authorName, req.body.articleTitle, req.body.articlePreview, req.body.articleBody);
    posts.push(new_post);
    console.log(posts);
    res.render("index.ejs",{
        posts: posts,
    });
});

app.get("/", (req, res) => {    
    res.render("index.ejs");
  });

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
  