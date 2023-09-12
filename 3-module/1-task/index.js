function namify(users) {

  let mass1=[];
  for (let key in users) {

    mass1[key]  = users[key].name;


    console.log(mass1[key]);
  }
  return mass1
}
