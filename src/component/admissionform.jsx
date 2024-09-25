// AdmissionForm.jsx
import React from 'react';
import { useForm } from 'react-hook-form';
import { db } from '../firebass'; // Adjust path as necessary
import { collection, addDoc } from 'firebase/firestore';
import '../index.css';

const AdmissionForm = ({ onSubmit }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const handleAdmissionSubmit = async (data) => {
    try {
      await addDoc(collection(db, "admissions"), data);
      alert('Admission successful!');
      onSubmit(data); // Pass the data to the parent component
    } catch (error) {
      console.error("Error adding document: ", error);
      alert(`Error: ${error.message}`);
    }
  };

  return (
    <form onSubmit={handleSubmit(handleAdmissionSubmit)}>
      <h2> Ali Academy Admission Form</h2>

      <div>
        <label>Name</label>
        <input {...register("name", { required: true })} />
        {errors.name && <span>This field is required</span>}
      </div>

      <div>
        <label>Email</label>
        <input type="email" {...register("email", { required: true })} />
        {errors.email && <span>This field is required</span>}
      </div>

      <div>
        <label>Course</label>
        <input {...register("course", { required: true })} />
        {errors.course && <span>This field is required</span>}
      </div>

      <button type="submit">Submit Admission</button>
    </form>
  );
};

export default AdmissionForm;
