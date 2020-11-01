import React,{useState } from 'react';
import { postJobMutation } from '../../graphql/mutation';
import { useMutation } from '@apollo/react-hooks';
import './index.css';


const SubmitJob = () => {
  const [postJob, {loading}] = useMutation(postJobMutation, {
    onCompleted: (data) => {
        alert("Job submitted successfully");
    },
  });

  const [title, setTitle] = useState(null);
  const [locationNames, setLocationNames] = useState(null);
  const [userEmail, setUserEmail] = useState(null);
  const [description, setDescription] = useState(null);
  const [applyUrl, setApplyUrl] = useState(null);
   
  const handleJobSubmit = () => {
    postJob({
      variables: {
        title: title,
        commitmentId: 'cjtu8esth000z0824x00wtp1i',
        companyName: 'Trimulabs',
        locationNames: locationNames,
        userEmail: userEmail,
        description: description,
        applyUrl: applyUrl,
      },
    }).catch((err) => {
      alert('Error in submitting job');
    });
  };
  if (loading)
    return <div className="post-job-submitting">
      Submitting...
    </div>
  
  return (
    <div className="form-container">
      <form onSubmit={(e) => {
        handleJobSubmit();
        e.preventDefault();
      }}>
      <input
      className = "post-job-input-field"
      required = {true}
      onChange={(e) => setTitle(e.target.value)}
      type="text"
      placeholder="Enter Title of Job"
      />
      <input
      className = "post-job-input-field"
     required= {true}
      onChange={(e) => setLocationNames(e.target.value)}
      type="text"
      placeholder="Enter Location of Job"
      />
      <input
      className = "post-job-input-field"
        required = {true}
        onChange={(e) => setUserEmail(e.target.value)}
        type="email"
        placeholder="Enter Email"
      />
      <input
      className = "post-job-input-field"
      required = {true}
      onChange={(e) => setDescription(e.target.value)}
      type="text"
      placeholder="Enter Description of Job"
      />
      <input
      className = "post-job-input-field"
     required = {true}
      onChange={(e) => setApplyUrl(e.target.value)}
      type="text"
      placeholder="Enter URL of Job"
      />
        <button className="post-job-button" type="submit">Post Job</button>
      </form>
      
    </div>
  );
};

export default SubmitJob;
