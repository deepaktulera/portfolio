import { useState } from "react";

const ProjectForm = ({ onAddProject }) => {

  const [form, setForm] = useState({
    title: "",
    description: "",
    tags: "",
    githubLink: "",
    liveLink: "",
  });

  const change = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const submit = (e) => {
    e.preventDefault();

    onAddProject({
      ...form,
      tags: form.tags.split(",").map(tag => tag.trim()),
    });

    setForm({
      title: "",
      description: "",
      tags: "",
      githubLink: "",
      liveLink: "",
    });
  };

  return (

    <form
      onSubmit={submit}
      className="dark:bg-black dark:text-white p-7 rounded-2xl border border-zinc-800 space-y-5 shadow-xl">

      <h2 className="text-xl font-bold">
        Add Project
      </h2>

      <input
        name="title"
        value={form.title}
        onChange={change}
        placeholder="Title"
        className="
w-full
p-3
rounded-lg
border border-zinc-800
focus:border-indigo-500
outline-none"
      />

      <textarea
        rows="5"
        name="description"
        value={form.description}
        onChange={change}
        placeholder="Description"
        className="
w-full
p-3
rounded-lg

border border-zinc-800
focus:border-indigo-500
outline-none"
      />

      <input
        name="tags"
        value={form.tags}
        onChange={change}
        placeholder="React, Node"
        className="
w-full
p-3
rounded-lg

border border-zinc-800
focus:border-indigo-500
outline-none"
      />

      <input
        name="githubLink"
        value={form.githubLink}
        onChange={change}
        placeholder="Github"
        className="
w-full
p-3
rounded-lg

border border-zinc-800
focus:border-indigo-500
outline-none"
      />

      <input
        name="liveLink"
        value={form.liveLink}
        onChange={change}
        placeholder="Live"
        className="
w-full
p-3
rounded-lg

border border-zinc-800
focus:border-indigo-500
outline-none"
      />

      <button className="
w-full
py-3
rounded-lg
bg-indigo-600
hover:bg-indigo-500
font-semibold
transition">
        Add Project
      </button>

    </form>

  );
};

export default ProjectForm;