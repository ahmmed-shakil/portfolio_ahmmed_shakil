import React from "react";
import image from "../../../../images/Contact/about_img - Copy.jpg";
import SocialMedia from "../Contact/SocialMedia";

const ProfileCard = () => {
  return (
    <div class="flex items-center w-full justify-center">
      <div class="max-w-xs">
        <div class="bg-slate-50 dark:bg-slate-900 shadow-xl rounded-lg py-3">
          <div class="photo-wrapper p-2">
            <img
              class="w-32 h-32 rounded-full mx-auto"
              src={image}
              alt="Shakil Ahmmed Joy"
            />
          </div>
          <div class="p-2">
            <h3 class="text-center text-xl text-gray-900 dark:text-slate-100 font-medium leading-8">
              Shakil Ahmmed Joy
            </h3>
            <div class="text-center text-gray-400 text-xs font-semibold">
              <p>Full Stack Developer</p>
            </div>
            <table class="text-xs my-3">
              <tbody>
                <tr>
                  <td class="px-2 py-2 text-gray-500 font-semibold">Address</td>
                  <td class="px-2 py-2">Myemnsing, Bangladesh</td>
                </tr>
                <tr>
                  <td class="px-2 py-2 text-gray-500 font-semibold">Phone</td>
                  <td class="px-2 py-2">+88 01796282969</td>
                </tr>
                <tr>
                  <td class="px-2 py-2 text-gray-500 font-semibold">Email</td>
                  <td class="px-2 py-2">shakilahmmed252@gmail.com</td>
                </tr>
              </tbody>
            </table>

            <div class="text-center my-3">
              <SocialMedia hideGit={true} />
              {/* <a
                class="text-xs text-indigo-500 italic hover:underline hover:text-indigo-600 font-medium"
                href="#"
              >
                View Profile
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
