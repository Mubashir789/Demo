import './Contact.css'
function Contact() {
    return <div>
        <br/>
        <br/>
        <form>

        <label for="fname">First name:</label><br/>
        <input type="text" id="fname" name="fname" placeholder="First Name"></input><br/>
        <label for="fname">Last name:</label><br/>
        <input type="text" id="lname" name="lname" placeholder="Second Name"></input><br/>
        <label for="fname">Message:</label><br/>
        <input type="text" id="message" name="message" placeholder="Message"></input><br/><br/>
        <button>Submit</button>
        </form>
    </div>
}
export default Contact