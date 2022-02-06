import axios from "axios"
import Card from "../components/card";

export default function Home({events}){
  console.log(events)
  return (
    <div>
        <h2 className="font-bold">Card Components for Event, Lecture, Announcement, Conference</h2>
        <div className="flex">
        {
          events.map(event => 
            <Card key={event.id} img={`http://localhost:1337`+ event.attributes.image.data[0].attributes.url}
              description={event.attributes.description}
              title={event.attributes.name}
              id={event.id}
              date={event.attributes.date}
            />
            )
        }
        </div>
    </div>
  )
}

// This gets called on every request
export async function getServerSideProps() {
  const res = await axios.get('http://localhost:1337/api/events?populate=*');
  const data = await res.data.data;
  console.log(data)
  return { props: {events: data}}
}
