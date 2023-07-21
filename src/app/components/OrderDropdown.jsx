import React from 'react';
import styles from '../styles/index.module.css'

const OrderDropdown = (props) => {
    return (
        <>
           <form action="">
            <select
              id="options"
              className={`bg-white text-[#333333] border-2 border-solid border-[#D6D6D6] py-3.5 px-6 font-bold text-xs tracking-wider uppercase rounded cursor-pointer ${styles.order__dropdown}`}
            >
              <option selected>Legújabbak előre</option>
              <option value="1" className="body5">
                {props.option2}
              </option>
              <option value="2" className="body5">
              {props.option3}
              </option>
              <option value="3" className="body5">
              {props.option4}
              </option>
              <option value="4" className="body5">
              {props.option5}
              </option>
            </select>
          </form> 
        </>
    );
};

export default OrderDropdown;