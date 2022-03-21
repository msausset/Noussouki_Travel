import phoneOK from "./Regex";

class apiUsers {
  Inscription(data) {
    console.log(data);
    if (!phoneOK) {
      alert("NOPE");
    } else {
      fetch("http://192.168.1.90:5500/users/", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fName: data.firstName,
          lName: data.lastName,
          mail: data.mail,
          phone: data.phone,
          pwd: data.pwd,
        }),
      }).then((res) => {
        console.log(res);
      });
    }
  }
}

const inscriptionUsers = new apiUsers();
export default inscriptionUsers;
