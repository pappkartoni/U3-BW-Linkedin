import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FollowPersonTile from "./FollowPersonTile";
import { getAllProfiles } from "../redux/actions";

const FollowContainer = () => {
  const profiles = useSelector((state) => state.allProfiles.profiles);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProfiles());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section>
        <div className="d-flex" style={{paddingTop: 12, paddingInline: 12, alignItems: "center"}}>
            <h3>Add to your feed</h3>
            <span className="info-btn">i</span>
        </div>
      {/* replace with person data */}
      {profiles.length > 0 &&
      <>
        <FollowPersonTile
          title={profiles[profiles.length - 1].name + " " + profiles[profiles.length - 1].surname}
          subtitle={profiles[profiles.length - 1].title}
          forperson={true}
          image={profiles[profiles.length - 1].image}
          />
        <FollowPersonTile
          title={profiles[profiles.length - 2].name + " " + profiles[profiles.length - 2].surname}
          subtitle={profiles[profiles.length - 2].title}
          forperson={true}
          image={profiles[profiles.length - 2].image}
          />
        <FollowPersonTile
            title={profiles[profiles.length - 3].name + " " + profiles[profiles.length - 3].surname}
            subtitle={profiles[profiles.length - 3].title}
            forperson={true}
            image={profiles[profiles.length - 3].image}
            />
      </>}

      <button className="btn-fullwidth">
            <span>View all Recommendations</span>
      </button>
    </section>
  );
};

export default FollowContainer;
