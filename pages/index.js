import axios from "axios"
import Card from "../components/card";
import MemberCard from "../components/memberCard";


export default function Home({events, members}){
  console.log(members)
  return (
    <div id="main" className="container mx-auto">
        <div className="flex flex-wrap items-center content-center">
        {
          events.map(event => 
            <Card key={event.id} img={`http://127.0.0.1:1337`+ event.attributes.image.data[0].attributes.url}
              description={event.attributes.description}
              title={event.attributes.name}
              id={event.id}
              date={event.attributes.date}
            />
            )
        }
        
        </div>

        <div className="flex flex-wrap items-center content-center">
        {
          members.map(member => 
            <MemberCard key={member.id} img="https://avatars.githubusercontent.com/u/27349806?s=400&u=1acb7223230c37146d4826d2b15d7e0d8ee69c24&v=4"
              description={member.attributes.curriculum_vitae}
              name={member.attributes.name}
              title="Lorem Ipsum"
              id={member.id}
              date={member.attributes.date}
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
