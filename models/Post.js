import mongoose from "mongoose";

// This replaces the old "posts" Postgres table.
const postSchema = new mongoose.Schema({
    email: { type: String, required: true, index: true }, // links to User.email
    title: { type: String, required: true },
    posts: { type: String, required: true }, // post body/content
    date: { type: Date, default: Date.now },
});

const Post = mongoose.model("Post", postSchema, "posts");

export default Post;