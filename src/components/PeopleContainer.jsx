import { useEffect, useState } from "react"
import GroupPersonTile from "./GroupPersonTile"

const PeopleContainer = () => {
    const [expanded, setExpanded] = useState(false)

    const toggleExpand = () => {
        setExpanded(!expanded)
    }

    useEffect(() => {
        //fetch here maybe
    }, [])

    return (
        <section>
            <h2>People you may know</h2>
            {/* replace with person data */}
            <GroupPersonTile title="Python Developers Community (moderated" subtitle={1458701} forperson={true} image="https://media.licdn.com/dms/image/C4D07AQHwzHzy4qrgaw/group-logo_image-shrink_48x48/0/1631004564272?e=1677506400&v=beta&t=bTr0tDyqg_XroZk9R8Rs-zH-PfOpCItAam2vYk8dhpQ" />
            <GroupPersonTile title="User Experience Design (UX)" subtitle={598667} forperson={true} image="https://media.licdn.com/dms/image/C4D07AQEw5Yxsti5jnw/group-logo_image-shrink_48x48/0/1648239133494?e=1677492000&v=beta&t=r9bEoFJmimY4TkUOi2hZ4NXzcOVM7MYUEIib-HlOgGU" />

            {expanded && <>
                <GroupPersonTile title="Machine Learning Community" subtitle={1052679} forperson={true} image="https://media.licdn.com/dms/image/C4D07AQHQyoqpbvwhLA/group-logo_image-shrink_72x72/0/1538129557731?e=1677492000&v=beta&t=vCXbwflYYa-upMY5OxQiK8-wDc8GAUswQwgpoKrH7Dw" />
                <GroupPersonTile title="Big Data, Data Science, AI, IoT, Cyber Security & Blockchain" subtitle={660022} forperson={true} image="https://media.licdn.com/dms/image/C5107AQEn7Kn4FAIw3A/group-logo_image-shrink_48x48/0/1631009536156?e=1677492000&v=beta&t=L6eDlqfNtOlW3YjAnPSR7wZg47pdYSF_OSvMNWOs9WA" />
                <GroupPersonTile title="Java Developers Community (moderated)" subtitle={693971} forperson={true} image="https://media.licdn.com/dms/image/D4E07AQE5wuxipYzIdA/group-logo_image-shrink_48x48/0/1664533330534?e=1677492000&v=beta&t=xzAF-c0fpMz9Xw8PJa5f9oTMJGBwzW1pFTr-s3RrDoI" />
            </>}
        
            <button className="btn-fullwidth" onClick={toggleExpand}>
                {expanded 
                ? <><span>Show less</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" class="mercado-match" width="16" height="16" focusable="false">
                        <path d="M15 11L8 6.39 1 11V8.61L8 4l7 4.61z"></path>
                    </svg></>
                : <><span>Show more</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" className="mercado-match" width="16" height="16" focusable="false">
                        <path d="M1 5l7 4.61L15 5v2.39L8 12 1 7.39z"></path>
                    </svg></>}
            </button>
        </section>
    )
}

export default PeopleContainer