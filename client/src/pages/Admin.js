import React, { Fragment } from 'react'
import NavBar from '../components/navBar/navBar'
import AdminMenu from '../components/admin/adminMenu'


export default function Admin() {
  return (
    <Fragment>
      <NavBar />
      <AdminMenu />
    </Fragment>
  )
}
