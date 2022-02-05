import axios from "axios"

export default function Home({events}){
  return (
    <div>
        {events.map((event) =><p key={event.id}> {event.id} - {event.attributes.name} </p> )}   
    </div>
  )
}

// This gets called on every request
export async function getServerSideProps() {
  const res = await axios.get('http://localhost:1337/api/events');
  const data = await res.data.data;
  // console.log(data.data);
  return { props: {events: data}}
}
