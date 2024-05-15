import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";
export default function Patient() {
  return (
    <div className={styles.container}>
      <div className={styles.col}>
      <form className={styles.form}>

        <div className={styles.form_1}>
        
        <div className={styles.group}>
            <input type="text" required="true" className={styles.main_input} />
         <span className={styles.highlight_span}></span>
          <label className={styles.label}>Enter your first name</label>
          </div>
         
         <div className={styles.container_1}>
        <div className={styles.group}>       
          <input type="text" required="true" className={styles.main_input} />
          <span className={styles.highlight_span}></span>
          <label className={styles.label}>Enter your middle name</label>
          </div>
          </div>
         <div className={styles.container_1}>
         <div className={styles.group}>
    
          <input type="text" required="true" className={styles.main_input} />
          <span className={styles.highlight_span}></span>
          <label className={styles.label}>Enter your last name</label>
          </div>
          </div>
       
        </div>
       
        <div className={styles.listcontainer}>
          <label htmlFor="case" className={styles.title}>
            choose your case :
          </label>
          <select name="case" id="case" className={styles.element}>
            <option value="1" htmlFor="case">
              سحب عصب
            </option>
            <option value="2" htmlFor="case">
              {" "}
              معالجة نخور غير واصلة للب
            </option>
            <option value="3" htmlFor="case">
              معالجات لثوية
            </option>
            <option value="4" htmlFor="case">
              تشخيص مرض فموي
            </option>
            <option value="5" htmlFor="case">
              معاجات وقائية-معالجات ترميمية-معالجات لبية
            </option>
            <option value="6" htmlFor="case">
              تخدير سن وقلعه
            </option>
            <option value="7" htmlFor="case">
              {" "}
              تحضير جسور
            </option>
            <option value="8" htmlFor="case">
              حالة قلب و وتد
            </option>
            <option value="9" htmlFor="case">
              قلع جراحي لأسنان منطمرة
            </option>
            <option value="10" htmlFor="case">
              معالجات لثوية متوسطة وشديدة
            </option>
            <option value="11" htmlFor="case">
              حالة جسر أمامي
            </option>
            <option value="12" htmlFor="case">
              دراسة حالة تقويمية{" "}
            </option>
            <option value="13" htmlFor="case">
              تعويض متحرك جزئي أو كامل
            </option>
          </select>
        </div>
        <div className={styles.radiocontainer}>
          <div className={styles.titlein}>
            {" "}
            <input
              type="radio"
              name="gender"
              id="female"
              value="female"
              className="element"
            />
            <label htmlFor="female" className={styles.titlein}>
              female
            </label>
          </div>
          <div className={styles.titlein}>
            {" "}
            <input
              type="radio"
              name="gender"
              id="male"
              value="male"
              className="element"
            />
            <label htmlFor="male" className={styles.titlein}>
              male
            </label>
          </div>
        </div>
        <div className={styles.checkboxcontainer}>
          <label
            htmlFor=""
            className={styles.title}
            style={{ marginLeft: "15px", marginTop: "9px" }}
          >
            {" "}
            choose a way to communicate :
          </label>
          <div className={styles.titlein}>
            {" "}

            <input type="checkbox" name="connect" id="email" value="email" />
            <label htmlFor="email" className={styles.titlein}>
              Email
            </label>{" "}
            <input
              type="text"
              className={styles.emailinput}
              placeholder="enter your email"
            />
          </div>
          <div className={styles.titlein}>
            {" "}

            <input type="checkbox" name="connect" id="phone" value="phonenum" />
            <label htmlFor="phone" className={styles.titlein}>
              phone Number
            </label>{" "}
            
            <input
              type="text"
              className={styles.phoneinput}
              placeholder="enter your phone number"
            />
          </div>
        </div>
        <div className={styles.buttoncontainer}>
          <button type={"submit"} className={styles.button}>
            submit
          </button>
          <Link href="/">
            {" "}
            <button  className={styles.button}>
              Back
            </button>
          </Link>
        </div>
      </form>
    
    </div>
    <div className={styles.col}>
      <div className={styles.pragraph}>
        <span
          style={{
            fontSize: "30px",
            textDecoration: "underline"
          }}
        >
          Dear patient
        </span>{" "}
        <br />
        please fill out the provided information. <br />
        And select the method of communication you prefer. <br />
        We will then contact you if your condition requires attention. <br />
        <span style={{ color: "#873222" }}>
          Please note that the treatment is free of charge.
        </span>{" "}
        <br />
        <div
          style={{
            flex: "1",
            display: "flex",
            flexDirection: "column",
            gap: "50px",
            alignItems: "center",
          }}
        >
          <Image
            className={styles.teethphoto}
            src="/images/teeth.jpg"
            alt="hello"
            width={200}
            height={200}
          />
          <h1 className={styles.text}>Hello</h1>
        </div>
      </div>
      </div>
    </div>
  );
}
