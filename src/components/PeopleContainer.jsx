import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import GroupPersonTile from "./GroupPersonTile";
import { getAllProfiles } from "../redux/actions";

const PeopleContainer = () => {
  const [expanded, setExpanded] = useState(false);
  const profiles = useSelector((state) => state.allProfiles.profiles);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProfiles());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };



  return (
    <section>
      <h2>People you may know</h2>
      {/* replace with person data */}
      {profiles.length > 0 &&
      <>
        <GroupPersonTile
          title={profiles[profiles.length - 1].name + " " + profiles[profiles.length - 1].surname}
          subtitle={profiles[profiles.length - 1].title}
          forperson={true}
          image={profiles[profiles.length - 1].image}
          />
        <GroupPersonTile
          title={profiles[profiles.length - 2].name + " " + profiles[profiles.length - 2].surname}
          subtitle={profiles[profiles.length - 2].title}
          forperson={true}
          image={profiles[profiles.length - 2].image}
          />
      </>}

      {expanded && profiles.length > 0 && (
        <>
        <GroupPersonTile
            title={profiles[profiles.length - 3].name + " " + profiles[profiles.length - 3].surname}
            subtitle={profiles[profiles.length - 3].title}
            forperson={true}
            image={profiles[profiles.length - 3].image}
          />
          <GroupPersonTile
            title={profiles[profiles.length - 4].name + " " + profiles[profiles.length - 4].surname}
            subtitle={profiles[profiles.length - 4].title}
            forperson={true}
            image={profiles[profiles.length - 4].image}
          />        
          <GroupPersonTile
            title={profiles[profiles.length - 5].name + " " + profiles[profiles.length - 5].surname}
            subtitle={profiles[profiles.length - 5].title}
            forperson={true}
            image={profiles[profiles.length - 5].image}
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

export default PeopleContainer;
