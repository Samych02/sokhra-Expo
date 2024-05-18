class UserDetails {
  constructor(firstName, lastName, profilePicture) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.profilePicture = profilePicture;
  }

  fromJson(json) {
    return new UserDetails(json.firstName, json.lastName, json.profilePicture);
  }

}

export default UserDetails;
