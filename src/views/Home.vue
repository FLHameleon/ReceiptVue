<template>
  <div>
    <h1>Главная страница</h1>

    <h5>Выберите квитанцию необходимую для заполнения:</h5>

    <p><router-link to="/receiptLK">Квитанция л. к.</router-link></p>
    <p><router-link to="/receiptReport">Квитанция о приеме отчета</router-link></p>
    <p><router-link to="/receiptFine">Квитанция штраф</router-link></p>

  </div>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: none;
  color: black;
  line-height: 150%;
}
p {
  line-height: 1.5;
}
div {
  width: 100%;
  height: 100vh;
  padding: 20px;
}

h1 {
  color: white;
  background: green;
}

h5 {
  color: blue;
}
</style>