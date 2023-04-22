const users = [
    { id: 1, name: "John", age: 18, profession: "Developer" },
    { id: 2, name: "Jack", age: 20, profession: "Developer" },
    { id: 3, name: "Karen", age: 19, profession: "Admin" },
  ];
  var filterButton = document.getElementById("filter");
 
/*   if(profession==="all")
  {
      document.getElementById("filter").disabled=true;
     }
     else{
      document.getElementById("filter").disabled=false;
     }  */
  
  filterButton.addEventListener("click", () => {
    const profession = document.getElementById("profession").value;
    if (!profession) {
      alert("select a profession before clicking the button");
     /*  return; */
    }
   /*  if(profession==="all")
    {
        document.getElementById("filter").disabled=true;
       }
       else{
        document.getElementById("filter").disabled=false;
       } */
    
    const filteredUsers = users.filter((user) => user.profession === profession);
    displayUsers(filteredUsers);
  });
  
  function displayUsers(usersToDisplay) {
    const usersContainer = document.getElementById("users-container");
    usersContainer.innerHTML = "";
    usersToDisplay.forEach((user) => {
      const userCard = document.createElement("div");
      userCard.classList.add("user-card");
      userCard.innerHTML = `
      <p>${user.id}.</p>
        <p>Name : ${user.name}</p>
        <p>Profession : ${user.profession}</p>
        <p>Age : ${user.age}</p>
       
      `;
      usersContainer.appendChild(userCard);
    });
  }
  
  const addUserButton = document.getElementById("add-user");
  
  addUserButton.addEventListener("click", () => {
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const profession = document.getElementById("professionl").value;
    const newUser = { id: users.length + 1, name, age, profession };
    users.push(newUser);
    displayUsers(users);
    document.getElementById("name").value="";
    document.getElementById("age").value="";
    document.getElementById("professionl").value="";
  
  });