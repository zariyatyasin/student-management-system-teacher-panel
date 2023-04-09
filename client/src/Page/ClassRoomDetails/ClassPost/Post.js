import React from "react";

const Post = () => {
  return (
    <div>
      <div className="bg-white  border rounded-lg mt-5">
        <div className="flex flex-row px-2 py-3 mx-3">
          <div className="w-auto h-auto rounded-full border-2 border-green-500">
            <img
              className="w-12 h-12 object-cover rounded-full shadow cursor-pointer"
              alt="User avatar"
              src="https://images.unsplash.com/photo-1477118476589-bff2c5c4cfbb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=200&amp;q=200"
            />
          </div>
          <div className="flex flex-col mb-2 ml-4 mt-1">
            <div className="text-gray-600 text-sm font-semibold">
              Sara Lauren
            </div>
            <div className="flex w-full mt-1">
              <div className="text-gray-400 font-thin text-xs">• 1 day ago</div>
            </div>
          </div>
        </div>
        <div className="border-b border-gray-100"></div>
        <div className="text-gray-400 font-medium text-sm mb-7 mt-6 mx-3 px-2"></div>
        <div className="text-gray-600 font-semibold  mb-2 mx-3 px-2">
          Dummy text of the printing and typesetting industry
        </div>
        <div className="text-gray-500 text-sm mb-6 mx-3 px-2">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500
        </div>

        <div className="flex w-full border-t border-gray-100">
          <div className="mt-3 mx-5 flex flex-row text-xs">
            <div className="flex text-gray-700 font-normal rounded-md mb-2 mr-4 items-center">
              Comments:<div className="ml-1 text-gray-400 text-ms"> 30</div>
            </div>
            <div className="flex text-gray-700 font-normal rounded-md mb-2 mr-4 items-center">
              Views: <div className="ml-1 text-gray-400 text-ms"> 15 </div>
            </div>
          </div>
        </div>
        <div className="relative flex items-center self-center w-full max-w-xl p-4 overflow-hidden text-gray-600 focus-within:text-gray-400">
          <img
            className="w-10 h-10 object-cover rounded-full shadow mr-2 cursor-pointer"
            alt="User avatar"
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=2000&amp;q=80"
          />

          <input
            type="search"
            className="w-full py-2 pl-4 pr-10 text-sm bg-gray-100 border border-transparent appearance-none rounded-tg placeholder-gray-400 focus:bg-white focus:outline-none focus:border-blue-500 focus:text-gray-900 focus:shadow-outline-blue"
            placeholder="Post a comment..."
          />
        </div>
      </div>
    </div>
  );
};

export default Post;
