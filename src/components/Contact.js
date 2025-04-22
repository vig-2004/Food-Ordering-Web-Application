const Contact = () => {
  return (
    <div>
      <h1 className="font-bold text-4xl m-4 p-4">Contact Us Page</h1>
      <form>
        <input
          className="border border-black m-2 p-2"
          placeholder="Enter your Name"
        />
        <input className="border border-black m-2 p-2" placeholder="name" />
        <button className="border border-black m-2 p-2 rounded-xl font-bold">
          Submit
        </button>
      </form>
    </div>
  );
};
export default Contact;
