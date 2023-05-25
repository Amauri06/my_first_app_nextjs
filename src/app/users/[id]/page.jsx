import React from "react";

const getUsers = async (id) => {
  const res = await fetch(`https://reqres.in/api/users/${id}`);
  return await res.json();
};

async function UsersPage({ params }) {
  const { data } = await getUsers(params.id);

  return (
    <div className="row">
      <div className="col-md-6 offset-md-3">
        
        <div className="card">

          <div className="card-header text-center">
            <img src={data.avatar} alt={data.id} className="rounded-circle"/>
          </div>

          <div className="card-body text-center">
              <h3>
                {data.id} {data.first_name} {data.last_name}{" "}
              </h3>
              <p>{data.email}</p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default UsersPage;
