import React, {useEffect, useState} from 'react'
import user from '../assets/user.png'

const Comment = ({post, userData}) => {
    const [postComments, setPostComments] = useState(false);
    const [comment, setComment] = useState({
        postId: post._id,
        userId: userData._id,
        firstName: userData.firstname,
        text: "",
    })

    useEffect(() => {
        const fetchComments = async () => {
          const commentResponse = await fetch(`http://localhost:8080/api/v1/comment/${post._id}`);
          const comment_fetched = await commentResponse.json();
          setPostComments(comment_fetched.data);
        };
        console.log(postComments)
        fetchComments();
    }, [post._id]);
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        if(comment.text){
            console.log(comment)
            try{
                const response = await fetch('http://localhost:8080/api/v1/comment', {
                  method: 'POST',
                  headers: {
                    'Content-Type' : 'application/json',
                  },
                  body: JSON.stringify({...comment})
                })
        
                await response.json();
                window.location.reload();
              } catch(error){
                alert(error)
              }

        }else{
            alert("Please enter a comment!")
          }
      };
    return (
        <div className="rounded-lg bg-white px-10 py-10">
        <div className='pb-10'>
          <h3 className="text-lg font-semibold mt-2 mb-4">Comments:</h3>
          <div>
            {postComments && postComments.map((com) => (
                <div key={com._id} className='border border-slate-800 rounded-lg my-3 px-5 py-2'>
                    <div key={com._id} className='flex items-center gap-2 mb-2'>
                        <img src={user}
                        alt="user profile"
                        className="w-8 h-8 object-contain rounded-full "/>
                        <p className='font-bold'>{com.firstName}</p>
                    </div>
                    <p className='px-4'>{com.text}</p>
                </div>
            ))
            }
          </div>
            <div className='rounded-lg mx-5 my-4 px-5 py-4 border border-gray-800'>
              <form 
                onSubmit={handleSubmit}>
                <input
                  className='w-full'
                  type="text"
                  name="text"
                  placeholder="Add a comment..."
                  value={comment.text}
                  onChange={(e) => setComment({...comment, [e.target.name]: e.target.value}) }
                />
                    <button
                className='float-right bg-[#39AEA9] mx-5 px-5 py-2 my-8 rounded-lg'
                type="submit">Submit</button>
              </form>
            </div>
        </div>
        </div>
      );
}

export default Comment