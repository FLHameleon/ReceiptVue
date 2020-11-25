<template>
  <div>
    <h2 class="proverohn">Главная страница</h2>

    <p>Выберите квитанцию необходимую для заполнения</p>

    <p><router-link to="/receiptLK">Квитанция л. к.</router-link></p>
    <p><router-link to="/receiptReport">Квитанция о приеме отчета</router-link></p>
    <p><router-link to="/receiptFine">КвитанцияFine</router-link></p>

  </div>
</template>

<style scoped>
.proverohn {
  background: yellow;
}
</style>