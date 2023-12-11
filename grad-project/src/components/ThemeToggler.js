import React from 'react'
import { useGradContext } from '@/context'
import '../styles/ThemeToggler.css';

const ThemeToggler = () => {
  const { toggleTheme } = useGradContext()

//   return <button onClick={toggleTheme}>Dark/Light</button>
// }

// export default ThemeToggler

return (
  <div>
{/* Tema değiştiriciyi temsil eden bir checkbox inputu. Tıklanıldığında toggleTheme fonksiyonu çağrılır. */}
    <input type="checkbox" id="darkmode-toggle" onClick={toggleTheme} />

{/* Checkbox inputunu stilize eden ve içinde SVG ikonu ve arka plan div'i bulunan bir label etiketi */}
    <label htmlFor="darkmode-toggle">
      <svg
        version="1.1"
        className="moon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="#292D32"
      >
         {/* Ay ikonu */}
        <path
          d="M21.5287 15.9294C21.3687 15.6594 20.9187 15.2394 19.7987 15.4394C19.1787 15.5494 18.5487 15.5994 17.9187 15.5694C15.5887 15.4694 13.4787 14.3994 12.0087 12.7494C10.7087 11.2994 9.90873 9.40938 9.89873 7.36938C9.89873 6.22938 10.1187 5.12938 10.5687 4.08938C11.0087 3.07938 10.6987 2.54938 10.4787 2.32938C10.2487 2.09938 9.70873 1.77938 8.64873 2.21938C4.55873 3.93938 2.02873 8.03938 2.32873 12.4294C2.62873 16.5594 5.52873 20.0894 9.36873 21.4194C10.2887 21.7394 11.2587 21.9294 12.2587 21.9694C12.4187 21.9794 12.5787 21.9894 12.7387 21.9894C16.0887 21.9894 19.2287 20.4094 21.2087 17.7194C21.8787 16.7894 21.6987 16.1994 21.5287 15.9294Z"
        />
      </svg>

      <div className="background"></div>
    </label>
  </div>
);
};

export default ThemeToggler;