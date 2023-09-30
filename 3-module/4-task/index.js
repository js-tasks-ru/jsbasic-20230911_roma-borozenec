let f1={};
function showSalary(user, age) {

  user = user.filter(item => item.age <= age);
  let sorted = user.map(function (sort) {

    f1 = [sort.name + ", " + sort.balance ];

    return f1;
  });
  sorted = sorted.join("\n");

  return sorted;
}

