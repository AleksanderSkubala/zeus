<template>
  <div id="app">

    <header class="header">
      <g-link to="/" class="menuItem">Strona Główna</g-link>
      <ul>
        <li><g-link to="/news" class="menuItem">Aktualności</g-link></li>
        <li><g-link to="/htgp" class="menuItem">HTGP</g-link></li>
      </ul>
    </header>

    <main class="main">
      <slot/>
    </main>

    <footer class="footer">
      <span class="footer__copyright">Copyright © 158 Poznańska Drużyna Starszoharcerska "Zeus" {{ new Date().getFullYear() }} </span>
      <span class="footer__links">Projekt i wykonanie: <a href="//www.github.com/AleksanderSkubala" target="_blank">Aleksander Skubała</a></span>
    </footer>

  </div>
</template>

<style lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: var(--header-height);
  padding: 20px 25px;
  top: 0;
  z-index: 10;
  position: sticky;

  .menuItem {
    text-decoration: none;
    color: var(--body-color);
    font-family: 'Poppins', sans-serif;
    font-size: calc(var(--base-font-size) - 3px);
    font-weight: bold;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--bg-color);
    z-index: -1;
    opacity: .85;
  }

  > ul {
    list-style-type: none;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 0;

    > li {
      margin-left: 20px;
    }

    &:last-child {
      margin-left: 0;
    }
  }
}

.main {
  margin: 0 auto;
  padding: 1.5vw 15px;
}

.footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: calc(var(--space) / 2);
  text-align: center;
  font-size: .8em;

  > span {
    margin: 0 .35em;
  }

  a {
    color: currentColor;
  }
}
</style>
