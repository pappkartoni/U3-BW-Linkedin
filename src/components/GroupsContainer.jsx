import { useState } from "react";
import GroupPersonTile from "./GroupPersonTile";

const GroupsContainer = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <section className="groups">
      <h2>Groups you may be interested in</h2>
      <GroupPersonTile
        title="Python Developers Community (moderated"
        subtitle={1458701}
        forperson={false}
        image="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/800px-Python-logo-notext.svg.png"
      />
      <GroupPersonTile
        title="User Experience Design (UX)"
        subtitle={598667}
        forperson={false}
        image="https://upload.wikimedia.org/wikipedia/commons/2/21/UX_Design.png"
      />

      {expanded && (
        <>
          <GroupPersonTile
            title="Machine Learning Community"
            subtitle={1052679}
            forperson={false}
            image="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/800px-Python-logo-notext.svg.png"
          />
          <GroupPersonTile
            title="Big Data, Data Science, AI, IoT, Cyber Security & Blockchain"
            subtitle={660022}
            forperson={false}
            image="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/800px-Python-logo-notext.svg.png"
          />
          <GroupPersonTile
            title="Java Developers Community (moderated)"
            subtitle={693971}
            forperson={false}
            image="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/800px-Python-logo-notext.svg.png"
          />
        </>
      )}

      <button className="btn-fullwidth" onClick={toggleExpand}>
        {expanded ? (
          <>
            <span>Show less</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              data-supported-dps="16x16"
              fill="currentColor"
              className="mercado-match"
              width="16"
              height="16"
              focusable="false"
            >
              <path d="M15 11L8 6.39 1 11V8.61L8 4l7 4.61z"></path>
            </svg>
          </>
        ) : (
          <>
            <span>Show more</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              data-supported-dps="16x16"
              fill="currentColor"
              className="mercado-match"
              width="16"
              height="16"
              focusable="false"
            >
              <path d="M1 5l7 4.61L15 5v2.39L8 12 1 7.39z"></path>
            </svg>
          </>
        )}
      </button>
    </section>
  );
};

export default GroupsContainer;
