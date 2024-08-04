import { useState } from "react";
import toast from 'react-hot-toast';

function Contactus() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    if (name === '' || email === '' || message === '') {
      toast.error('All fields are required!');
    } else {
      toast.success('Submitted successfully!');
    }
  };

  return (
    <div className="flex items-center justify-center h-[89.2vh] bg-customColorbg">
      <div className="w-1/2 border-4 border-inputColorbg flex absolute top-1/4">
        <div className="border-collapse border-r-4 border-inputColorbg w-2/4 p-8 flex flex-col gap-6">
          <div>
            <h1 className="text-2.5xl">Stay Updated</h1>
            <p className="text-sm">Need to get in touch with us?</p>
          </div>
          <div>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <div className="underline">Facebook</div>
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <div className="underline">Instagram</div>
            </a>
          </div>
        </div>
        <form onSubmit={submitHandler} className="p-5 w-1/2 flex flex-col gap-4">
          <input 
            type="text" 
            placeholder="Enter your Name" 
            className="h-10 pl-3 text-md bg-inputColorbg placeholder-white text-white focus:outline-none"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input 
            type="email" 
            placeholder="Enter your Email" 
            className="h-10 pl-3 bg-inputColorbg placeholder-white text-white focus:outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea 
            type="text" 
            placeholder="Message" 
            className="h-24 pl-3 pt-2 bg-inputColorbg placeholder-white text-white focus:outline-none"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button className="border-2 rounded-2xl w-24 bg-stone-400 p-1">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Contactus;
