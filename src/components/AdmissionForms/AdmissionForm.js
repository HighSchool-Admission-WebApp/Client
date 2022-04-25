import React from "react";
import { useForm } from "react-hook-form";

import {
  Button

} from "react-bootstrap";


import { useEffect, useState } from "react";
import Axios from "axios";


function AdmissionForm() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();


  const onSubmit = (data) => {
    console.log(data);
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [file, SetIncome] = useState("");


  const fileHandler = (e) => {
    // console.log(e.target.files);
    SetIncome(e.target.files[0]);
  }

  const submit = () => {
    //console.log(name);
    const data = new FormData();
    data.append("file", file);

    Axios.post("http://localhost:8080/poststudentinfo", {
      name: name,
      email: email,
      file: file
    });
    //console.log(file);
  };

  return (

    // <form onSubmit={handleSubmit(onSubmit)}>
    //   <div className="admissionForm-flexbox">

    //     <div>
    //       <label className="label-admissionForm">Enter Your  Name  </label>
    //       <input {...register("name", { required: true })} />
    //     </div>
    //     <div>
    //       <label className="label-admissionForm">Email</label>
    //       <input {...register("email", { required: true })} />
    //     </div>
    //     <div>
    //       <label className="label-admissionForm">10th Mark Sheet</label>
    //       <input {...register("TenthMarkSheet", { required: true })} type="file" />
    //     </div>
    //     <div>
    //       <label className="label-admissionForm">Leaving Certificate</label>
    //       <input {...register("leavingCertificate", { required: true })} type="file" />
    //     </div>
    //     <div>
    //       <label className="label-admissionForm">Income Certificate</label>
    //       <input {...register("incomeCertificate", { required: true })} type="file" />
    //     </div>

    //     <div >

    //       <Button type="submit" variant="success" className="submit-button-admissionForm" >Submit</Button>{' '}
    //     </div>
    //   </div>
      //</form>



      <form onSubmit={handleSubmit(submit)}>
        <div>
          <label>Name:</label>
          <input type="text" onChange={(e) => {
            setName(e.target.value);
          }}
          />
        </div>

        <div>
          <label>Email:</label>
          <input type="text" onChange={(e) => {
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

      </form>

      );
}
 export default AdmissionForm;
