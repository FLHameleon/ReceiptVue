<template>
  <div>

    <router-link to="/">Назад</router-link>
    <form class="textPoleRu">

    <h1>Квитанция о приеме отчета</h1>


    <p>От: Главное управление статистики ДНР</p>

    <dannieText :startData="WhoNameOrganization" @rezault="rezultAnket"/>

    <hr>

    <dannieText :startData="FormName" @rezault="rezultAnket"/>

    <dannieDate :startData="DateTime" @rezault="rezultAnket"/>


    <dannieNumber :startData="numberRegistr" @rezault="rezultAnket"/>

    <button v-if="!isNeAktiv" @click.prevent="messAnket" disabled>Отправить</button>
    <button v-else @click.prevent="messAnket">Отправить</button>

    </form>

    <router-link to="/">Назад</router-link>
    
  </div>
</template>

<script>
import dannieText from '/home/iai/workOcen3/25112020/1149/src/components/dannieText'
import dannieDate from '/home/iai/workOcen3/25112020/1149/src/components/dannieDate'
import dannieNumber from '/home/iai/workOcen3/25112020/1149/src/components/dannieNumber'
import dannieEmail from '/home/iai/workOcen3/25112020/1149/src/components/dannieEmail'
import danniePhone from '/home/iai/workOcen3/25112020/1149/src/components/danniePhone'

export default {
  name: 'app',
  data() {
    return {
      isNeAktiv: true,
      sborkaUser: {},
      WhoNameOrganization: {
        idName: 'WhoNameOrganization',
        zagolovok: 'Кому наименование организации: '
      },

      FormName: {
        idName: 'FormName',
        zagolovok: 'Главным управлением статистики ДНР принят в электронном виде отчет по форме:'
      },

      DateTime: {
        idName: 'DateTime',
        zagolovok: 'Дата и время приема отчета:'
      },

      numberRegistr: {
        idName: 'numberRegistr',
        zagolovok: 'Регистрационный №:'
      }




    }
  },

  methods: {
      rezultAnket(todo) {
        this.sborkaUser[todo.idName] = todo.message

        this.isNeAktiv = true
        for (let key in this.sborkaUser) {
          if(this.sborkaUser[key] == '') {
            this.isNeAktiv = false 
            break
          }
        }

      },
      messAnket() {

        console.log(this.sborkaUser)

      }
     
    },

  components: {
    dannieText, dannieDate, dannieNumber, dannieEmail, danniePhone
  }
}
</script>

<style scoped>

.textPoleRu {
    text-align:left;
    /* width: 900px; */
}

</style>