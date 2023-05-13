import React, { useEffect, useState } from 'react'
import {FormField, Loader} from '../components'
import {Nav, RenderCards} from '../components'

const Home = ({loading, allPosts}) => {
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState(null);
  const [searchTimeout, setSearchTimeout] = useState(null);
  
  const searchPosts = () => {
    const searchResults = allPosts.filter(
      (item) =>
        item.username.toLowerCase().includes(searchText.toLowerCase()) ||
        item.prompt.toLowerCase().includes(searchText.toLowerCase())
    );

    setSearchResults(searchResults);
  };

  useEffect(() => {
    searchPosts();
  }, [searchText, allPosts]);

  const handleSearchChange = (e) =>{
     clearTimeout(searchTimeout);

    setSearchText(e.target.value);

    setSearchTimeout(setTimeout(searchPosts, 500));
  }
  
  return (
    <section className='max-w-7xl mx-auto'>
      <div>
        <h1 className='font-extrabold text-white text-[32px]'>
          Welcome to CRAITE
        </h1>
        <p className='mt-2 text-white text-[16px] max-w-[500px]'>
          Enjoy a collection of imaginative and visually stunning images generated
          by DALL-E AI
        </p>
      </div>

      <div className='mt-16'>
        <FormField 
          LabelName="Search posts"
          type="text"
          name="text"
          placeholder="Search posts"
          value = {searchText}
          handleChange = {handleSearchChange}
        />
      </div>

      <div className='mt-10'>
        {loading ? (
          <div className='flex justify-center items-center'>
            <Loader />
          </div>
        ) : (
          <>
          {searchText && (
              <h2 className="font-medium text-[#b5b5b5] text-xl
              mb-3">
                Showing results for <span className='text-white underline'>
                  {searchText}
                </span>
              </h2>
            )}
            <div className="grid lg:grid-cols-4 sm:grid-cols-3
            xs:grid-cols-2 grid-cols-1 gap-3">
              {searchText ? (
                <RenderCards 
                  data={searchResults}
                  title="No search results found"
                />
              ) : (
                <RenderCards
                  data={allPosts}
                  title="No posts found"
                />
              )}
            </div>
            </>
        )}
      </div>
    </section>
  )
}

export default Home