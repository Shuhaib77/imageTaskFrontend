import { Button, Input } from "@material-tailwind/react";
import { useFormik } from "formik";
import React from "react";
import axios from "axios";
function Auth({ heading }) {
  const { values, handleBlur, handleChange, handleSubmit } =
    heading === "Login"
      ? useFormik({
          initialValues: {
            email: "",
            password: "",
          },
          onSubmit: async (values) => {},
        })
      : useFormik({
          initialValues: {
            email: "",
            password: "",
            confirmpassword: "",
          },
          onSubmit: async (values) => {
         await axios.post("http://localhost:1337/employee", {
              email: values.email,
              password: values.password,
            });
          },
        });
     
        
  return (
    <>
      <div className="flex justify-center items-center w-full h-[90vh]">
        <div className="w-[900px] h-[400px] shadow-md flex">
          <div className="bg-blue-gray-600 w-1/2 flex justify-center items-center">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9SRRmhH4X5N2e4QalcoxVbzYsD44C-sQv-w&s"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>

          <div className="w-1/2 flex flex-col justify-center items-center p-4">
            <h1 className="text-white text-2xl mb-4">{heading}</h1>
            <form action="" className="w-96  grid grid-cols-1 gap-5" onSubmit={handleSubmit}>
              <Input
                label="Email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                name="email"
                className="mb-4"
              />
              <Input
                label="Password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                name="password"
                className="mb-4"
              />
              {heading === "Register" && (
                <Input
                  label="Confirm Password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.confirmpassword}
                  name="confirmpassword"
                />
              )}
              <Button type="submit">submit</Button>
            </form>
            {console.log(values)}
          </div>
        </div>
      </div>
    </>
  );
}

export default Auth;
