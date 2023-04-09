import React from "react";
import { Link } from "react-router-dom";
const ClassRoomCard = ({
  id,
  courseName,
  code,
  about,
  section,
  time,
  room,
  credit,
}) => {
  return (
    <div>
      <div className="relative overflow-hidden border flex flex-col justify-between space-y-3 text-sm rounded-lg shadow md:max-w-sm h-48  p-4 mb-4 bg-white text-black ">
        <div className="flex items-center justify-between font-medium">
          <span className="uppercase text-xs text-green-500">{code}</span>
          <span className="text-xs text-slate-500">{time.slice(0, 10)}</span>
        </div>
        <div className="flex flex-row items-center space-x-3">
          <div className="flex flex-none items-center justify-center w-10 h-10 rounded-full bg-green-500 text-white">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <polygon points="14 2 18 6 7 17 3 17 3 13 14 2" />
              <line x1="3" y1="22" x2="21" y2="22" />
            </svg>
          </div>
          <span className="text-base font-medium">{courseName}</span>
        </div>
        <div> {about}</div>
        <div className="flex justify-between items-center">
          <div>
            <dt className="sr-only">Users</dt>
            <dd className="flex justify-start -space-x-1.5">
              <div className="inline-block -m-1">
                <img
                  className="w-7 h-7 rounded-full ring-2 ring-white "
                  src="https://randomuser.me/api/portraits/women/46.jpg"
                  alt="avatar"
                />
              </div>
              <div className="inline-block -m-1">
                <img
                  className="w-7 h-7 rounded-full ring-2 ring-white "
                  src="https://randomuser.me/api/portraits/men/45.jpg"
                  alt="avatar"
                />
              </div>
              <div className="inline-block -m-1">
                <img
                  className="w-7 h-7 rounded-full ring-2 ring-white "
                  src="https://randomuser.me/api/portraits/women/47.jpg"
                  alt="avatar"
                />
              </div>
              <span className="inline-block -m-1 rounded-full ring-2 ring-white ">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 31 31"
                  fill="none"
                  className="text-slate-200 dark:text-slate-600"
                >
                  <path
                    d="M31 15.5C31 24.0604 24.0604 31 15.5 31C6.93959 31 0 24.0604 0 15.5C0 6.93959 6.93959 0 15.5 0C24.0604 0 31 6.93959 31 15.5ZM8.20879 15.5C8.20879 19.5268 11.4732 22.7912 15.5 22.7912C19.5268 22.7912 22.7912 19.5268 22.7912 15.5C22.7912 11.4732 19.5268 8.20879 15.5 8.20879C11.4732 8.20879 8.20879 11.4732 8.20879 15.5Z"
                    fill="currentColor"
                  />
                  <path
                    d="M31 15.5C31 18.049 30.3714 20.5586 29.1698 22.8066C27.9682 25.0547 26.2307 26.9716 24.1113 28.3878C21.9919 29.8039 19.556 30.6755 17.0193 30.9254C14.4826 31.1752 11.9234 30.7956 9.56841 29.8201C7.21345 28.8447 5.1354 27.3035 3.51834 25.3331C1.90128 23.3627 0.795112 21.0239 0.297828 18.5239C-0.199455 16.0239 -0.0725081 13.4398 0.667425 11.0006C1.40736 8.56136 2.73744 6.34225 4.53984 4.53985L10.2876 10.2876C9.43046 11.1448 8.79791 12.2002 8.44602 13.3602C8.09413 14.5202 8.03376 15.7491 8.27025 16.9381C8.50675 18.127 9.03281 19.2393 9.80184 20.1764C10.5709 21.1134 11.5591 21.8464 12.6791 22.3103C13.799 22.7742 15.0161 22.9547 16.2225 22.8359C17.4289 22.7171 18.5874 22.3026 19.5953 21.6291C20.6033 20.9556 21.4295 20.0439 22.001 18.9748C22.5724 17.9058 22.8714 16.7122 22.8714 15.5H31Z"
                    fill="#2BC86A"
                  />
                </svg>
              </span>
            </dd>
          </div>
          <Link
            to={`/classesinfo/${id}`}
            className="flex items-center justify-center text-xs font-medium rounded-full px-4 py-1 space-x-1 border-2 border-black bg-white  "
          >
            <span>View</span>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path d="M5 12h13M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ClassRoomCard;
