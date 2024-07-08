import React from "react";
import logo from "../assets/logo.png";
function Footer() {
  return (
    <footer className=" bg-black flex  flex-col items-center justify-between text-neutral-300 p-10">
      <div className="footer flex justify-between">
        {" "}
        <aside>
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.2002 16.2C4.6002 12.2134 8.60686 9.33337 13.3335 9.33337C18.6095 9.33337 22.9909 12.9214 23.8482 17.6347C22.9749 17.2667 21.8415 16.9614 20.6949 16.7707C18.3815 16.3867 16.6149 17.1867 15.1015 17.8774L15.0869 17.884C13.5482 18.5867 12.2722 19.1694 10.5935 18.98C9.2562 18.8294 8.0522 18.4067 6.92153 17.9054C6.40953 17.6787 5.92286 17.4414 5.44153 17.2054L5.2802 17.1267C4.76452 16.8689 4.24022 16.6288 3.7082 16.4067L3.2002 16.2Z"
              fill="white"
            />
            <path
              d="M2.73717 18.1706C2.69005 18.5542 2.66645 18.9402 2.6665 19.3266C2.6665 21.88 3.68784 24.2093 5.3705 25.976C5.9705 26.6066 6.2705 26.9213 7.52784 27.4613C8.7865 28 9.65317 28 11.3892 28H15.2772C17.0132 28 17.8798 28 19.1385 27.4613C20.3958 26.9213 20.6958 26.6066 21.2972 25.976C22.8412 24.3533 23.8278 22.256 23.9798 19.9493L23.5145 19.6906C22.8865 19.3413 21.7092 18.9666 20.3665 18.744C18.7145 18.4693 17.4545 19.0013 15.9318 19.6973L15.7852 19.764C14.3265 20.4306 12.6038 21.22 10.3692 20.968C8.74917 20.7853 7.33584 20.276 6.1105 19.7333C5.56384 19.4906 5.04384 19.2373 4.56384 19.0026L4.40384 18.924C3.92968 18.6864 3.44762 18.465 2.9585 18.26L2.73717 18.1706ZM16.7465 3.25329C17.2185 3.72396 17.3105 4.42663 17.3292 5.66663H19.0932C20.2832 5.66671 21.4568 5.9438 22.5212 6.47596L23.6358 7.03329C24.5438 6.30129 26.0358 6.25063 27.3332 6.99996C28.9278 7.91996 29.6238 9.69996 28.8865 10.976C28.1505 12.2506 26.2598 12.5386 24.6665 11.6186C23.5412 10.968 22.8625 9.88929 22.8212 8.86263L21.6265 8.26529C20.84 7.87186 19.9726 7.66689 19.0932 7.66663H17.3332V8.64529C16.0433 8.21622 14.6926 7.9983 13.3332 7.99996C11.9332 7.99996 10.5865 8.22663 9.33317 8.64529V7.66663H9.47584C9.60517 7.66796 9.75584 7.66929 9.88384 7.66663C10.0692 7.65996 10.3198 7.64263 10.5718 7.56529C10.8412 7.48129 11.1545 7.31463 11.3825 6.98529C11.6038 6.66796 11.6665 6.31196 11.6665 5.99996C11.6665 5.68796 11.6038 5.33196 11.3825 5.01329C11.185 4.73421 10.8988 4.53025 10.5705 4.43463C10.3467 4.37078 10.1153 4.33715 9.8825 4.33463C9.74741 4.33174 9.61228 4.33129 9.47717 4.33329H9.4265C9.50517 3.86129 9.6505 3.51996 9.91717 3.25329C10.5065 2.66663 11.4478 2.66663 13.3332 2.66663C15.2185 2.66663 16.1612 2.66663 16.7465 3.25329Z"
              fill="white"
            />
          </svg>

          <p>TimbuCloudShop Ltd.</p>
        </aside>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav className="hidden lg:flex flex-col">
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Deodorants</a>
          <a className="link link-hover">Clothes</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover"></a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </div>
      <br />
      <br />
      <p className="lg:mb-8 text-center">
        Built by Ojima & Mariam © 2024. All Right Reserved.{" "}
      </p>
    </footer>
  );
}

export default Footer;
