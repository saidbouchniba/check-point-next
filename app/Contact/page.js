export default function Contact(){
    return (
        <form>
            <label>Full name</label>
            <input type="text" placeholder="Your full name"/>
            <label>Email</label>
            <input type="email" placeholder="Your adress email"/>
            <label>Message</label>
            <textarea type="text" placeholder="add your message here"></textarea>
            <button>submit</button>
        </form>
    )
}