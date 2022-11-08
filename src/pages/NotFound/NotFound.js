import React from "react";

const NotFound = () => {
  return (
    <div>
      <p className="">404 Not Found</p>
    </div>
  );
};

export default NotFound;

// Swal.fire({
//   title: "Are you sure?",
//   text: "You won't be able to revert this!",
//   icon: "warning",
//   iconColor: "#f33",
//   background: "#f3f3f4",
//   showCancelButton: true,
//   confirmButtonColor: "#3084dd",
//   cancelButtonColor: "#d33",
//   confirmButtonText: "Yes, delete it!",
// }).then(result=>{
//   if (result.isConfirmed) {}
//   else {
//     Swal.fire("order deletion canceled");
//   }
// })
