import axios from "axios"

export default function Post({ event }) {
    return (
        <div className="container"> 
            {event.attributes.name}<br/>
            {event.attributes.date}<br/>
            <img src={`http://127.0.0.1:1337`+ event.attributes.image.data[0].attributes.url}></img> <br/>
            <p className="whitespace-pre-line">{event.attributes.description}</p>
        </div>
    )
}

export async function getServerSideProps({ params }) {
    // Fetch necessary data for the blog post using params.id
    // fetch firebase
    return {
        props: {
            event
        }
    }
}