import EditButtonContainer from "./EditButtonContainer"
import GroupsContainer from "./GroupsContainer"
import PeopleContainer from "./PeopleContainer"

const Sidebar = () => {

    return (
        <div className="d-flex flex-column">
            <EditButtonContainer />
            <PeopleContainer />
            <GroupsContainer />
        </div>
    )
}

export default Sidebar