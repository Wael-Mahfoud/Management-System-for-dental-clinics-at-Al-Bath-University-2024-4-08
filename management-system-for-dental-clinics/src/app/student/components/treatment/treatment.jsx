import styles from "./treatment.module.css";
import Image from "next/image";
import Link from "next/link";
export default function Treatment() {
  return (
    <div>
      <div className={styles.logo}>
        <br /> الجمهورية العربية السورية
        <br /> جامعة البعث
        <br /> كلية طب الاسنان
      </div>
      <hr />
      <div className={styles.title}>
        مقرر اعمال السنة لمقرر مداواة الاسنان الترميمية-4
      </div>
      <hr />
      <div style={{ direction: "rtl", padding: "20px" }}>
        اسم الطالب: <p></p>
        الفئة: <p></p>
      </div>
      <hr />
      <table className={styles.table}>
        <thead>
          {" "}
          <tr className={styles.tr}>
            <td className={styles.th} colSpan="7">
              الاعمال المطلوبة
            </td>
          </tr>
        </thead>
        <tbody className={styles.tbody}>
          <tr className={styles.tr}>
            <td className={styles.td}></td>
            <td className={styles.td}>اسم المريض</td>
            <td className={styles.td}>التشخيص</td>
            <td className={styles.td}>التحضير</td>
            <td className={styles.td}>التخريش والرابط</td>
            <td className={styles.td}>الترميم والانهاء</td>
            <td className={styles.td}>ملاحظات</td>
          </tr>
          <tr className={styles.tr}>
            <td className={styles.td} rowSpan="2">
              I
            </td>
            <td className={styles.td}></td>
            <td className={styles.td}></td>
            <td className={styles.td}></td>
            <td className={styles.td}></td>
            <td className={styles.td}></td>
            <td className={styles.td}></td>
          </tr>
          <tr className={styles.tr}>
            <td className={styles.td}></td>
            <td className={styles.td}></td>
            <td className={styles.td}></td>
            <td className={styles.td}></td>
            <td className={styles.td}></td>
            <td className={styles.td}></td>
          </tr>
          <tr className={styles.tr}>
            <td className={styles.td} rowSpan="2">
              II
            </td>
            <td className={styles.td}></td>
            <td className={styles.td}></td>
            <td className={styles.td}></td>
            <td className={styles.td}></td>
            <td className={styles.td}></td>
            <td className={styles.td}></td>
          </tr>
          <tr className={styles.tr}>
            <td className={styles.td}></td>
            <td className={styles.td}></td>
            <td className={styles.td}></td>
            <td className={styles.td}></td>
            <td className={styles.td}></td>
            <td className={styles.td}></td>
          </tr>
          <tr className={styles.tr}>
            <td className={styles.td} rowSpan="2">
              IV
            </td>
            <td className={styles.td}></td>
            <td className={styles.td}></td>
            <td className={styles.td}></td>
            <td className={styles.td}></td>
            <td className={styles.td}></td>
            <td className={styles.td}></td>
          </tr>
          <tr className={styles.tr}>
            <td className={styles.td}></td>
            <td className={styles.td}></td>
            <td className={styles.td}></td>
            <td className={styles.td}></td>
            <td className={styles.td}></td>
            <td className={styles.td}></td>
          </tr>
          <tr className={styles.tr}>
            <td className={styles.td}></td>
            <td className={styles.td}></td>
            <td className={styles.td}></td>
            <td className={styles.td}></td>
            <td className={styles.td}></td>
            <td className={styles.td}></td>
            <td className={styles.td}></td>
          </tr>
          <tr className={styles.tr}>
            <td className={styles.td}></td>
            <td className={styles.td}></td>
            <td className={styles.td}></td>
            <td className={styles.td}></td>
            <td className={styles.td}></td>
            <td className={styles.td}></td>
            <td className={styles.td}></td>
          </tr>
          <tr className={styles.tr}>
            <td className={styles.td}></td>
            <td className={styles.td}></td>
            <td className={styles.td}></td>
            <td className={styles.td}></td>
            <td className={styles.td}></td>
            <td className={styles.td}></td>
            <td className={styles.td}></td>
          </tr>
        </tbody>
      </table>
      <hr />
      <Link href="">
        {" "}
        <button style={{ marginLeft: "72px" }} className={styles.button}>
          Back
        </button>
      </Link>
      <Link href="/">
        {" "}
        <button style={{ marginLeft: "72px" }} className={styles.button}>
          next
        </button>
      </Link>
      <hr />
      <div style={{ direction: "rtl", padding: "20px" }}>
        {" "}
        مدرس المقرر: <p></p>
      </div>
    </div>
  );
}
