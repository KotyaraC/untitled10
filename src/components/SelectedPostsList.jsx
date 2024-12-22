import React from "react";
import { useSelectedPosts } from "./SelectedPostsContext";

const SelectedPostsList = () => {
    const { selectedPosts, removePostFromSelected } = useSelectedPosts();

    return (
        <div className="card shadow mt-4">
            <div className="card-body">
                <h5 className="card-title text-center">Обрані пости</h5>
                {selectedPosts.length > 0 ? (
                    <ul className="list-group">
                        {selectedPosts.map((post) => (
                            <li key={post.id} className="list-group-item d-flex justify-content-between align-items-center">
                                <div>
                                    <h6 className="mb-1">{post.title}</h6>
                                    <p className="mb-1">{post.body}</p>
                                </div>
                                <button
                                    className="btn btn-danger btn-sm"
                                    onClick={() => removePostFromSelected(post.id)}
                                >
                                    Видалити
                                </button>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="text-center">Ви ще не вибрали жодних постів.</p>
                )}
            </div>
        </div>
    );
};

export default SelectedPostsList;
