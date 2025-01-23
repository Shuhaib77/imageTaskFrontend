import React from "react";
import Sidebar from "../components/atom/Sidebar";
import Dashbordss from "../components/dashboard/Dashbordss";

function AdminDashboard() {
  return (
    <>
     <div  className=" body flex h-full justify-start gap-x-16 items-center  w-full">
     <div>
        <Sidebar />
      </div>
      <div>
        <Dashbordss/>
      </div>
     </div>
    </>
  );
}

export default AdminDashboard;
