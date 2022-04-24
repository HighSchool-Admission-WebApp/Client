import React from "react";
import { useForm } from "react-hook-form";
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 0ea63c0 (Change in Form)
>>>>>>> d1b1b0c (Change in Form)
>>>>>>> cbc29ef (Change in form)
import {
  Button
  
} from "react-bootstrap";
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
import {useEffect, useState} from "react";
import Axios from "axios";
>>>>>>> 949a260 (Changes in admission form)
>>>>>>> 0ea63c0 (Change in Form)
>>>>>>> d1b1b0c (Change in Form)
>>>>>>> cbc29ef (Change in form)

function AdmissionForm() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> d1b1b0c (Change in Form)
>>>>>>> cbc29ef (Change in form)
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======


  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [file,SetIncome] = useState("");


  const fileHandler = (e)=>{
   // console.log(e.target.files);
    SetIncome(e.target.files[0]);
  }

  const submit = ()=>{
    //console.log(name);
    const data = new FormData();
    data.append("file",file);

    Axios.post("http://localhost:8080/poststudentinfo",{
      name : name,
      email : email,
      file : file
    });
    //console.log(file);
  };

  return (
<<<<<<< HEAD
>>>>>>> 0ea63c0 (Change in Form)
>>>>>>> d1b1b0c (Change in Form)
>>>>>>> cbc29ef (Change in form)
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="admissionForm-flexbox">
   
      <div>
        <label className="label-admissionForm">Enter Your  Name  </label>
        <input {...register("name", { required: true })} />
      </div>
      <div>
        <label className="label-admissionForm">Email</label>
        <input {...register("email", { required: true })} />
      </div>
      <div>
        <label className="label-admissionForm">10th Mark Sheet</label>
        <input {...register("TenthMarkSheet", { required: true })} type="file" />
      </div>
      <div>
        <label className="label-admissionForm">Leaving Certificate</label>
        <input {...register("leavingCertificate", { required: true })} type="file" />
      </div>
      <div>
        <label className="label-admissionForm">Income Certificate</label>
        <input {...register("incomeCertificate", { required: true })} type="file" />
      </div>

     <div >
    
      <Button type="submit" variant="success" className="submit-button-admissionForm" >Submit</Button>{' '}
      </div> 
      </div>
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
    <form onSubmit={handleSubmit(submit)}>
      <div>
      <label>Name:</label>
      <input type="text" onChange={(e)=>{
        setName(e.target.value);
      }}
       />
       </div>

       <div>
      <label>Email:</label>
      <input type="text" onChange={(e)=>{
        setEmail(e.target.value);
      }}
      />
      </div>

      <div>
      <label>Income:</label>
      <input type="file" onChange={fileHandler}
      />
      </div>
      <input type="submit" />
>>>>>>> 949a260 (Changes in admission form)
>>>>>>> 0ea63c0 (Change in Form)
>>>>>>> d1b1b0c (Change in Form)
>>>>>>> cbc29ef (Change in form)
    </form>
    
  );
}

export default AdmissionForm;
