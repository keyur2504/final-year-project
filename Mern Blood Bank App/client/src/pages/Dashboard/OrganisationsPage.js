import React, { useEffect, useState } from "react";
import Layout from "../../components/Shared/Layout/Layout";
import moment from "moment";
import { useSelector } from "react-redux";
import API from "../../services/api";

const OrganisationsPage = () => {
  //Get current user
  const { user } = useSelector((state) => state.auth);
  const [data, setData] = useState([]);
  //Find Donar Records

  const getDonars = async () => {
    try {
      if (user?.role === "donar") {
        const { data } = await API.get("/inventory/get-organisation");
        // console.log(data);
        if (data?.success) {
          setData(data?.organisations);
        }
      }

      if (user?.role === "hospital") {
        const { data } = await API.get(
          "/inventory/get-organisation-for-hospital"
        );
        // console.log(data);
        if (data?.success) {
          setData(data?.organisations);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getDonars();
  }, [user]);
  return (
    <Layout>
      <table className="table text-center table-hover">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Address</th>
            <th scope="col">Date</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((record) => (
            <tr key={record._id}>
              <td>{record.organisationName + " (ORG)"}</td>
              <td>{record.email}</td>
              <td>{record.phone}</td>
              <td>{record.address}</td>
              <td>{moment(record.createdAt).format("DD/MM/YYYY hh:mm A")}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Layout>
  );
};

export default OrganisationsPage;
