<template>
  <div class="profile">
    <div class="container">
      <div class="path">
        <n-link
          to="/"
          class="path__link"
        >
          Главная&nbsp;&nbsp;
        </n-link>
        /&nbsp;&nbsp;Профиль
      </div>
      <section-title>
        Профиль
      </section-title>
      <form class="profile-form">
        <div class="profile-form__inpts">
          <div class="profile-form__col">

            <div class="profile-form__line">
              <div class="profile-form__img" />
              <v-input
                holder="Имя пользователя"
              />
            </div>

            <v-input
              holder="E - Mail"
              class="profile-form__input"
            />
            <v-input
              holder="Новый пароль"
              type="password"
              class="profile-form__input"
            />
          </div>

          <div class="profile-form__col">
            <v-input
              holder="Имя"
              class="profile-form__input"
            />
            <v-input
              holder="Фамилия"
              class="profile-form__input"
            />
            <v-input
              holder="Телефон"
              class="profile-form__input"
            />
          </div>
        </div>
        <div class="profile-form__btn">
          <v-btn class="btn-medium btn-black btn--center">
            Сохранить
          </v-btn>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import SectionTitle from '~/components/shared/section-title'

export default {
  name: 'ProfilePage',
  components: {
    SectionTitle
  }
}
</script>
