/**
 * Эту функцию трогать не нужно
 */
function print(text) {
  console.log(text);
}

/**
 * Эту функцию нужно поменять так,
 * чтобы функция sayHello работала корректно
 */




function isValid(name) {
  if (name == null)
  {
    return false;
  }
  let mass = [];
  mass = name.split('');
  let count = 0;

  for (let i = 0; i < mass.length; i++) {
    if (mass[i] == ' ')
    {

      return false;
    }
   
    else
    {
      count++;

    }

  }

  if (count < 4) {
    return false;
  }
  else {
    return true;
  }



}

function sayHello() {
  let userName = prompt('Введите ваше имя');

  if (isValid(userName)) {
    print(`Welcome back, ${userName}!`);
  } else {
    print('Некорректное имя');
  }
}
