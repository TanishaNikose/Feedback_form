import React , {useState} from "react";
import "../Styles/FeedbackForm.css";

const Feedback = () => {
  const [name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [rating, setRating] = useState("");
  const [Feedback, setFeedback] = useState("");
  const [submittedData, setSubmittedData] = useState(null);
 
  const SubmitFun =(e)=>{
    e.preventDefault();


    if(name.trim() === ""){
        alert("Name is required.")
        return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailPattern.test(Email)){
        alert("please Enter a valid Email address.")
    }
    setSubmittedData({name , Email, rating, Feedback, });

    setName("");
    setEmail("");
    setRating("");
    setFeedback("");
  }

  return (
    <>
      <div className="MyForm">
      <br />
      <br />
        <form className="form" onSubmit={SubmitFun}>
          <h1> FeedBack form</h1>
          <br />
          <label className="name" required>
            
            Name :- <input type="text" value={name} onChange={(e)=> setName(e.target.value)} placeholder="Enter your name " />
          </label>
          <br />
          <label className="Email" required>
            Email :- <input type="email" value={Email}  onChange={(e)=>{
              setEmail(e.target.value)
            }}
             placeholder="Email ID "  required/>
          </label>
          <br />
          <label className="Rating" required>
            Rate Your experiance :-
            <label id="id1">
              1
              <input type="radio" value="1" name="rate" checked={rating ==="1"} onChange={(e)=>setRating(e.target.value)} id="id1" />
            </label>
            {/* if the name will be same the  it will select only one area */}
            <label id="id2">
              2
              <input type="radio" value="2" checked={rating ==="2"} onChange={(e)=>setRating(e.target.value)} name="rate" id="id2" />
            </label>
            <label id="id3">
              3
              <input type="radio" checked={rating ==="3"} onChange={(e)=>setRating(e.target.value)} value="3" name="rate" id="id3" />
            </label>
            <label id="id4">
              4
              <input type="radio" value="4" checked={rating ==="4"} onChange={(e)=>setRating(e.target.value)} name="rate" id="id4" />
            </label>
            <label id="id5">
              5
              <input checked={rating ==="5"} onChange={(e)=>setRating(e.target.value)} type="radio" value="5" name="rate" id="id5" />
            </label>
          </label>
          <br />
          <label className="text">
           
            Please provide your precious feedback:-
          </label>
          <br />
          <label>
          <textarea
            name="Feedback"
            id="feedback"
            value={Feedback}
            onChange={(e)=>setFeedback(e.target.value)}
            placeholder="Enter your valuable feedback here"
            required
          ></textarea>
          </label>
          <br />
          <button  className="button" type="submit">Submit the feedBack form</button>
         
        </form>
        {
            submittedData && (
                <div className="submittedData">
                  <h2> submited Feedback </h2>
                  <p>Name {submittedData.name}</p>
                  <p>Email {submittedData.Email}</p>
                  <p>Rating {submittedData.rating}</p>
                  <p>Feedback {submittedData.Feedback}</p>
                </div>
            )
        }
      </div>
      <br />
    </>
  );
};
export default Feedback;

