import axios from "axios"

export default function Post({ member }) {
    return (
        <div className="container"> 
            {member.attributes.name}<br/>
            {member.attributes.title}<br/>
            <img src={`http://127.0.0.1:1337`+ member.attributes.image.data.attributes.url}></img> <br/>
            <p className="whitespace-pre-line">{member.attributes.curriculum_vitae}</p>
        </div>
    )
}

export async function getServerSideProps({ params }) {
    // Fetch necessary data for the blog post using params.id
    const memberId = params.memberId
    const memberData = await axios.get('http://127.0.0.1:1337/api/members/' + memberId+"?populate=*");
    const member = await memberData.data.data;
    // console.log(member.attributes.image)
    return {
        props: {
            member
        }
    }
}