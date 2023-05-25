import React from "react";
import Link from "next/link";

function Users({ user }) {
  return (
    <Link href={`/users/${user.id}`}>
      <li
        className="
    list-group-item d-flex border 
    justify-content-between 
    align-items-center
    list-group-item-action
    
    "
      >
        <div>
          <h5 className="text-black-50 fw-bold">
            {user.id} {user.first_name} {user.last_name}
          </h5>
          <p>{user.email}</p>
        </div>

        <img src={user.avatar} alt={user.email} className="rounded-circle" />
      </li>
    </Link>
  );
}

export default Users;
