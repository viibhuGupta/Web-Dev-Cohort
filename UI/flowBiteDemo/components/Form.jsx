"use client"
import React from 'react';
import { useForm } from 'react-hook-form';

function UserForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    try {
      // Make a POST request to the API route
      const response = await fetch('/api/form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      
      if (!response.ok) {
        throw new Error('Error while submitting form');
      }

      alert('Form submitted successfully!');
    } catch (error) {
      console.error(error);
      alert('Error submitting form');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>First Name:</label>
        <input {...register('firstName', { required: true })} />
        {errors.firstName && <p>This field is required</p>}
      </div>

      <div>
        <label>Last Name:</label>
        <input {...register('lastName', { required: true })} />
        {errors.lastName && <p>This field is required</p>}
      </div>

      <div>
        <label>Email:</label>
        <input {...register('email', { required: true })} />
        {errors.email && <p>This field is required</p>}
      </div>

      <div>
        <label>Phone Number:</label>
        <input {...register('phone', { required: true })} />
        {errors.phone && <p>This field is required</p>}
      </div>

      <div>
        <label>Gender:</label>
        <input type="radio" value="male" {...register('gender', { required: true })} /> Male
        <input type="radio" value="female" {...register('gender', { required: true })} /> Female
        {errors.gender && <p>This field is required</p>}
      </div>

      <div>
        <label>College:</label>
        <select {...register('college', { required: true })}>
          <option value="">Select your college</option>
          <option value="mimt">MIMT</option>
          <option value="gniot">GNIOT</option>
          <option value="galgotia">Galgotia</option>
          <option value="amity">Amity</option>
          <option value="sharda">Sharda</option>
        </select>
        {errors.college && <p>This field is required</p>}
      </div>

      <div>
        <label>Description:</label>
        <textarea {...register('description', { required: true })} />
        {errors.description && <p>This field is required</p>}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}

export default UserForm;
