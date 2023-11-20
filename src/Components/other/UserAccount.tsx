import "./SCSS/Account.scss"
const UserAccount = () => {
  return (
    <div className="accountInfo card">
        <h2>Account Informations</h2>
        <div className="info">
          <p>username</p>
          <p>email@exemple.com</p>
          <button>Edit Informations</button>
          <button>Change Password</button>
        </div>
    </div>
  )
}

export default UserAccount