import axios from "axios"
import Card from "../components/card";
import MemberCard from "../components/memberCard";


export default function Home({events, members}){
  return (
    <div id="main" className="container mx-auto">

        <h2 className="text-center mt-5 text-xl text-black rounded"> Etkinlikler </h2>
        <div className="flex flex-wrap items-center justify-center">
        {
          events.map(event => 
            <Card key={event.id} img={`http://127.0.0.1:1337`+ event.attributes.image.data[0].attributes.url}
              description={event.attributes.brief}
              title={event.attributes.name}
              id={event.id}
              date={event.attributes.date}
            />
            )
        }
        </div>

        <h2 className="text-center mt-10 text-xl text-black rounded"> Yönetim Kurulu </h2>
        <div className="flex flex-wrap items-center justify-center mt-10">
        {
          members.map(member => 
            <MemberCard key={member.id} img={`http://127.0.0.1:1337`+ member.attributes.image.data.attributes.url}
              name={member.attributes.name}
              title={member.attributes.title}
              id={member.id}
            />
            )
        }
        
        </div>
        
    </div>
  )
}

// This gets called on every request
export async function getServerSideProps() {
  const resEvents = await axios.get('http://127.0.0.1:1337/api/events?populate=*');
  const dataEvents = await resEvents.data.data;

  const resMembers = await axios.get('http://127.0.0.1:1337/api/members?populate=*');
  const dataMembers = await resMembers.data.data;
  return { props: {events: dataEvents, members: dataMembers}}
}
