import React, { useEffect } from 'react';
import './App.css';

const formatNumberWithCommas = (number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const animateCounter = (targetValue, duration, counterElement) => {
  const startValue = 0;
  const increment = targetValue / (duration / 16);

  function updateCounter(currentValue) {
    counterElement.textContent = formatNumberWithCommas(Math.round(currentValue));
  }

  function animate(currentValue) {
    if (currentValue <= targetValue) {
      updateCounter(currentValue);
      setTimeout(() => animate(currentValue + increment), 16);
    } else {
      updateCounter(targetValue);
      window.addEventListener('scroll', checkVisibilityAndAnimate);
    }
  }

  animate(startValue);
};

const isElementInViewport = (el) => {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

const checkVisibilityAndAnimate = () => {
  const counterContainer = document.getElementById('counterContainer');

  if (isElementInViewport(counterContainer)) {
    animateCounter(1682, 1000, document.getElementById('counter'));
    animateCounter(1077, 1000, document.getElementById('counter_2'));
    animateCounter(1077, 1000, document.getElementById('counter_3'));
    animateCounter(122, 1000, document.getElementById('counter_4'));

    window.removeEventListener('scroll', checkVisibilityAndAnimate);
  }
};

const App = () => {

  // const [theme, setTheme] = useState('light');

  useEffect(() => {
    window.addEventListener('scroll', checkVisibilityAndAnimate);
    return () => {
      window.removeEventListener('scroll', checkVisibilityAndAnimate);
    };
  }, []);

  // const toggleTheme = () => {
  //   setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  // };


  return (
    <div className={`animated`}>
      <div className="img">
        {/* <a href="#" className="scrolltop" id="scroll-top"> */}
        <header>
          <nav className="nav">
            <div className="nav_menu" id="nav_menu">
              <ul className="list">
                {/* <a href="" className="nav_logo nav_item">Turin</a> */}
                <li className="nav_item"><a href="#academics" className="nav_link active_link">Academics</a></li>
                <li className="nav_item"><a href="#campus" className="nav_link active_link">Campus</a></li>
                <li className="nav_item"><a href="#infocus" className="nav_link active_link">In focus</a></li>
                <li className="nav_item"><a href="#visit" className="nav_link active_link">Visit</a></li>
                <li className="nav_item"><a href="#about" className="nav_link active_link">About</a></li>
                <li className="nav_item"><a href="#news" className="nav_link active_link">News</a></li>
                {/* <li className="theme"><i className="bx bx-moon change-theme" id="theme_button"></i></li> */}
              </ul>
            </div>
            <div className="nav_toggle" id="nav-toggle">
              <i className="bx bx-menu"></i>
            </div>
          </nav>
        </header>
        <div className="main_container">
          <div className="main_content">
            <div className="main_column">
              <p className="">Learning at Turin can happen for every type of learner, at any phase of life.</p>
            </div>
          </div>
        </div>
        {/* </a> */}
      </div>
      <div className="second_container bd_container">
        <div className="second_content">
          <div className="second_column">
            <p className="">“Intelligence, leadership, and talent don’t fall along economic lines, and we want to be sure our doors are open to young people from across the globe.”</p>
            <p className="sl">— Sally Donahue</p>
          </div>
        </div>
      </div>
      <div className="third_container">
        <div className="third_content" id="counterContainer">
          <div className=" third_column third_column_1">
            <p className="num_ex">Количество студентов</p>
            <p className="num_1" id="counter"></p>
          </div>
          <div className="third_column third_column_2">
            <p className="num_st">Количество выпусников</p>
            <p className="num_2" id="counter_2"></p>
          </div>
          <div className="third_column third_column_3">
            <p className="num_grad">Количество поступивших на работу</p>
            <p className="num_3" id="counter_3"></p>
          </div>
          <div className="third_column third_column_4">
            <p className="num_grad">Количество проектов</p>
            <p className="num_3" id="counter_4"></p>
          </div>
        </div>
      </div>
      <div className="rector_container">
        <div className="a_content">
          <div className="academic_column">
          </div>
        </div>
      </div>
      <script src="./main.js"></script>
    </div>
  );
};

export default App;
