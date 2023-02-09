document.write(`<header id="header" class="header">
<div class="container">
  <div class="container__fl">
    <a class="logo__container" href="../index.html">
      <!-- Logo -->
      <img class="logo" src="../img/logo_massage.png" alt="logo" />
    </a>
    <div class="menu__container">
      <div class="div__menu">
        <!-- Hamburger icon -->
        <input class="side__menu" type="checkbox" id="side__menu" />
        <label class="hamb" for="side__menu"
          ><span class="hamb__line"></span
        ></label>
        <!-- Menu -->
        <nav class="nav">
          <ul class="menu">
            <li>
              <a id="lng__services__ul" class="lng__services__ul" href="../index.html">Послуги</a>
              <ul class="menu__under">
                <li><a id="lng__spa" class="lng__spa" href="spa.html">SPA програми</a></li>
                <li><a id="lng__for__two" class="lng__for__two" href="for_two.html">Для двох</a></li>
                <li><a id="lng__tai__massage" class="lng__tai__massage" href="tai.html">Тайський масаж</a></li>
                <li><a id="lng__gav__massage" class="lng__gav__massage" href="gavai.html">Гавайський масаж</a></li>
                <li><a id="lng__fire__massage" class="lng__fire__massage" href="fire.html">Вогняний масаж</a></li>
                <li><a id="lng__stone__massage" class="lng__stone__massage" href="stone.html">Стоун-терапія</a></li>
                <li><a id="lng__anticell__massage" class="lng__anticell__massage" href="anticellulite.html">Антицелюлітний масаж</a></li>
                <li><a id="lng__face__massage"  class="lng__face__massage" href="face.html">Масаж обличчя</a></li>
              </ul>
            </li>
            <li><a id="lng__rules" class="lng__rules" href="rules.html">Правила</a></li>
            <li><a id="lng__contacts" class="lng__contacts" href="contacts.html">Контакти</a></li>
            <li><a id="lng__price__and__discounts" class="lng__price__and__discounts" href="price_and_discounts.html">Ціни та знижки</a></li>
            <li><a id="lng__trainings" class="lng__trainings" href="trainings.html">Тренінги</a></li>
            <li>
              <a id="lng__gift__certificates" class="lng__gift__certificates" href="gift_certificates.html">Подарункові сертифікати</a>
            </li>
          </ul>
        </nav>
      </div>
      <div class="select">
        <select name="slct" id="slct">
          <option value="ua" selected="selected">Украї́нська</option>
          <option value="ru">Русский</option>
        </select>
      </div>
    </div>
  </div>
</div>
</header>`);
