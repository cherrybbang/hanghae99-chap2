/** @jsx createVNode */
import { createVNode } from "../../lib";

export const PostForm = () => {
  return (
    <div className="mb-4 bg-white rounded-lg shadow p-4">
      <textarea
        id="post-content"
        placeholder="무슨 생각을 하고 계신가요?"
        className="w-full p-2 border rounded"
      />
      <button
        id="post-submit"
        className="mt-2 bg-blue-600 text-white px-4 py-2 rounded"
      >
        게시
      </button>
    </div>
  );
};

// export const PostForm = () => {
//   return createVNode(
//     "div",
//     { className: "mb-4 bg-white rounded-lg shadow p-4" },
//     createVNode(
//       "textarea",
//       {
//         id: "post-content",
//         placeholder: "무슨 생각을 하고 계신가요?",
//         className: "w-full p-2 border rounded",
//       }
//     ),
//     createVNode(
//       "button",
//       {
//         id: "post-submit",
//         className: "mt-2 bg-blue-600 text-white px-4 py-2 rounded",
//       },
//       "게시"
//     )
//   );
// };

// 멘토링 : 자식이 없다면 null 명시.
