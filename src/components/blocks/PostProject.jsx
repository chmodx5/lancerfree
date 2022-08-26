import React from "react";

const PostProject = () => {
  return (
    <div>
      <form action="" method="post" className="space-y-4">
        <div>
          <label htmlFor="title">Project title</label>
          <input
            className="form-input"
            type="text"
            name="projectTitle"
            placeholder="Project title"
            id=""
          />
        </div>
        <div className="flex space-x-3">
          <div>
            <label htmlFor="maxBudget">Max budget</label>
            <input
              className="form-input"
              type="number"
              name="maxBudget"
              placeholder="Max Budget"
              id=""
            />
          </div>

          <div>
            <label htmlFor="title">Min budget</label>
            <input
              className="form-input"
              type="number"
              name="minBudget"
              placeholder="Min Budget"
              id=""
            />
          </div>
        </div>

        <div>
          <label htmlFor="title">Enter detailed project description</label>
          <textarea
            className="form-input"
            type="text"
            name="projectDescription"
            placeholder="Project description"
            id=""
          />
        </div>
        <div>
          <label htmlFor="title">Skills Required</label>
          <input
            className="form-input"
            type="text"
            name="skill"
            placeholder="Skills Required"
            id=""
          />
        </div>
        <button type="submit" className=" btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default PostProject;
