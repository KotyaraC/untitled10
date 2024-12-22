import React from "react";
import { useSelectedPosts } from "./SelectedPostsContext";

const PostList = () => {
    const { addPostToSelected } = useSelectedPosts();

    const posts = [
        { id: 1, title: "Пост 1", body: "Це перший пост." },
        { id: 2, title: "Пост 2", body: "Це другий пост." },
        { id: 3, title: "Пост 3", body: "Це третій пост." },
    ];

    return (
        <div className="card shadow mt-4">
            <div className="card-body">
                <h5 className="card-title text-center">Список постів</h5>
                <ul className="list-group">
                    {posts.map((post) => (
                        <li key={post.id} className="list-group-item d-flex justify-content-between align-items-center">
                            <div>
                                <h6 className="mb-1">{post.title}</h6>
                                <p className="mb-1">{post.body}</p>
                            </div>
                            <button
                                className="btn btn-primary btn-sm"
                                onClick={() => addPostToSelected(post)}
                            >
                                Додати в обрані
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default PostList;
