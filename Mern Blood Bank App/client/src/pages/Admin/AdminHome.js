import React from "react";
import Layout from "../../components/Shared/Layout/Layout";
import { UseSelector, useSelector } from "react-redux";

const AdminHome = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <Layout>
      <div className="container">
        <div className="d-flex flex-column mt-4">
          <h1>
            Welcome Admin <i className="text-success">{user?.name}</i>
          </h1>
          <h3>Manage Blood Bank App</h3>
          <hr />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit,
            provident recusandae at repellendus deserunt earum quaerat illo ex?
            Porro laboriosam, temporibus fugiat a repudiandae dolore
            exercitationem accusamus facilis ipsum deserunt quisquam corrupti
            possimus incidunt nisi expedita laborum, impedit alias officia esse
            quam? Repellat similique voluptate porro aliquam quasi saepe qui
            expedita vel quisquam laudantium labore, aspernatur sequi quidem,
            alias mollitia. Fuga inventore cupiditate numquam nemo alias sint
            accusamus nobis. Eligendi laudantium, tenetur nobis cumque saepe
            repudiandae quos at atque minima nulla excepturi a amet voluptatum
            voluptate adipisci. Perferendis assumenda quasi officiis veritatis.
            Distinctio vel laudantium facilis aut ea illo facere maxime ratione
            adipisci, pariatur qui natus. Quibusdam, sed iure hic ipsam est
            quisquam soluta accusantium pariatur harum, tempora qui adipisci
            voluptatibus! Labore explicabo assumenda distinctio perferendis
            aliquam! Odit velit incidunt temporibus voluptates et minus ipsum
            quam numquam illo repellendus nobis ad quo odio ut sunt maxime,
            omnis quas quisquam! Voluptate, vel nihil praesentium possimus sequi
            beatae non perspiciatis rerum, vero enim est odio atque nesciunt
            necessitatibus illum omnis. Rem laudantium impedit maiores, ut
            reprehenderit corrupti suscipit officiis id praesentium consectetur
            sunt enim. Qui quibusdam voluptatibus tempora porro dolore odit
            dolores enim numquam, sint, nulla deleniti quam natus veritatis
            cumque incidunt.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default AdminHome;
