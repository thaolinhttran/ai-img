import React, {useState, useEffect, useContext} from 'react'
import { Card, Comment, Loader } from '../components'
import { useParams } from 'react-router-dom'
import { UserContext } from '../components/UserContext'
const PostPage = () => {
    const { userData } = useContext(UserContext);
    const {id} = useParams();
    const [post, setPost] = useState(null);
    useEffect(() => {
        const fetchPost = async () => {
          const postResponse = await fetch(`https://craite.onrender.com/api/v1/post/${id}`);
          const post = await postResponse.json();
          setPost(post);
        };
        fetchPost();
    }, [id]);
  return (
    <div >
        {post? (
            <div className="grid grid-cols-2 gap-5 h-full">
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