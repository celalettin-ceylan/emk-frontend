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
            <Card key={event.id} img={event.image.url}
              description={event.brief}
              title={event.name}
              id={event.id}
              date={event.date}
            />
            )
        }
        </div>

        <h2 className="text-center mt-10 text-xl text-black rounded"> Yönetim Kurulu </h2>
        <div className="flex flex-wrap items-center justify-center mt-10">
        {
          members.map(member => 
            <MemberCard key={member.id} img={member.image.url}
              name={member.name}
              title={member.title}
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
  // firebase fetch
  return { props: {events: dataEvents, members: dataMembers}}
}
