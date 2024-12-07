import { useState } from "react";

export default function entry({ action }) {
  const [content, setContent] = useState("");

  function submit(e) {
    e.preventDefault();
    action(content);
    setContent("");
  }
  return (
    <form onSubmit={submit}>
      {"Search #1-#826:"}
      <input
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Enter ID of Character"
      />
      <button type="submit">Submit</button>
    </form>
  );
}
