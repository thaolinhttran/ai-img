import React, {useState, useEffect} from 'react'
import { Card, Comment, Loader } from '../components'
import { useParams } from 'react-router-dom'

const PostPage = ({userData}) => {
    const {id} = useParams();
    const [post, setPost] = useState(null);
    useEffect(() => {
        const fetchPost = async () => {
          const postResponse = await fetch(`http://localhost:8080/api/v1/post/${id}`);
          const post = await postResponse.json();
          setPost(post);
        };
        fetchPost();
    }, [id]);
  return (
    <div >
        {post? (
            <div className="grid grid-cols-2 h-full">
            <div className="max-w-screen-md">
                <Card key={post._id} {...post} />
            </div>
            <div>
                <Comment userData={userData} post={post}/>
            </div>
            </div>
        ) : (
            <Loader/>
        )}
    </div>
  )
}

export default PostPage;