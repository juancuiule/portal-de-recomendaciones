import React from "react";

import "./LogoGato.css";

const LogoGato: React.FC = () => {
  React.useEffect(() => {
    const animData = {
      wrapper: document.getElementById("logo-lottie"),
      loop: true,
      renderer: "svg",
      autoplay: true,
      path:
        "https://elgatoylacaja.com/wp-content/themes/unputoblog/theme-content/videos/logo-gato.json",
    };
    ((window as unknown) as { bodymovin: any }).bodymovin.loadAnimation(
      animData
    );
  }, []);

  return (
    <>
      <div id="logo-lottie" className="isologo-nav-big">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 280 400"
          width="280"
          height="400"
          preserveAspectRatio="xMidYMid meet"
          className="main-svg"
        >
          <defs>
            <clipPath id="__lottie_element_2">
              <rect width="280" height="400" x="0" y="0"></rect>
            </clipPath>
          </defs>
          <g clipPath="url(#__lottie_element_2)">
            <g
              transform="matrix(0.3667999804019928,0,0,0.3667999804019928,51.56840133666992,-15.657184600830078)"
              opacity="1"
              className="d-block"
            >
              <g
                opacity="1"
                transform="matrix(1,0,0,1,236.55999755859375,540.8660278320312)"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fillOpacity="0"
                  stroke="rgb(20,39,60)"
                  strokeOpacity="1"
                  strokeWidth="42"
                  d=" M0.45899999141693115,-140.66000366210938 C0.45899999141693115,-140.66000366210938 -168.80999755859375,-43.56700134277344 -168.80999755859375,-43.56700134277344 C-168.80999755859375,-43.56700134277344 -168.80999755859375,151.36599731445312 -168.80999755859375,151.36599731445312 C-168.80999755859375,151.36599731445312 0,248.83099365234375 0,248.83099365234375 C0,248.83099365234375 168.80999755859375,151.35899353027344 168.80999755859375,151.35899353027344 C168.80999755859375,151.35899353027344 168.80999755859375,-43.56700134277344 168.80999755859375,-43.56700134277344 C168.80999755859375,-43.56700134277344 0.4059999883174896,-140.72799682617188 0.4059999883174896,-140.72799682617188 C0.4059999883174896,-140.72799682617188 0.421999990940094,-140.73599243164062 0.421999990940094,-140.73599243164062"
                ></path>
              </g>
            </g>
            <g
              transform="matrix(0.3667999804019928,0,0,0.3667999804019928,51.56840133666992,-15.657184600830078)"
              opacity="1"
              className="d-block"
            >
              <g
                opacity="1"
                transform="matrix(1,0,0,1,236.55999755859375,594.6420288085938)"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fillOpacity="0"
                  stroke="rgb(20,39,60)"
                  strokeOpacity="1"
                  strokeWidth="32"
                  d=" M1.0609999895095825,-10.071000099182129 C1.0609999895095825,-10.071000099182129 -0.003000000026077032,189.60499572753906 -0.003000000026077032,189.60499572753906 C-0.003000000026077032,189.60499572753906 0.9390000104904175,-10.071000099182129 0.9390000104904175,-10.071000099182129 C0.9390000104904175,-10.071000099182129 167.93800354003906,-95.302001953125 167.93800354003906,-95.302001953125 C167.93800354003906,-95.302001953125 1.0570000410079956,-10.104999542236328 1.0570000410079956,-10.104999542236328 C1.0570000410079956,-10.104999542236328 -168.93800354003906,-96.302001953125 -168.93800354003906,-96.302001953125 C-168.93800354003906,-96.302001953125 1.0609999895095825,-10.071000099182129 1.0609999895095825,-10.071000099182129z"
                ></path>
              </g>
            </g>
            <g
              transform="matrix(0.3667999804019928,0,0,0.3667999804019928,95.78876495361328,153.533935546875)"
              opacity="0.36684000000414585"
              className="d-none"
            >
              <g
                opacity="1"
                transform="matrix(1,0,0,1,24.98200035095215,32.5989990234375)"
              >
                <path
                  fill="rgb(20,39,60)"
                  fillOpacity="1"
                  d=" M-24.73200035095215,32.347999572753906 C-24.73200035095215,32.347999572753906 24.73200035095215,3.7929999828338623 24.73200035095215,3.7929999828338623 C24.73200035095215,3.7929999828338623 -24.73200035095215,-32.347999572753906 -24.73200035095215,-32.347999572753906 C-24.73200035095215,-32.347999572753906 -24.73200035095215,32.347999572753906 -24.73200035095215,32.347999572753906z"
                ></path>
              </g>
            </g>
            <g
              transform="matrix(0.3667999804019928,0,0,0.3667999804019928,163.2799530029297,153.533935546875)"
              opacity="0.36684000000414585"
              className="d-none"
            >
              <g
                opacity="1"
                transform="matrix(1,0,0,1,24.98200035095215,32.5989990234375)"
              >
                <path
                  fill="rgb(20,39,60)"
                  fillOpacity="1"
                  d=" M24.73200035095215,32.347999572753906 C24.73200035095215,32.347999572753906 -24.73200035095215,3.7929999828338623 -24.73200035095215,3.7929999828338623 C-24.73200035095215,3.7929999828338623 24.73200035095215,-32.347999572753906 24.73200035095215,-32.347999572753906 C24.73200035095215,-32.347999572753906 24.73200035095215,32.347999572753906 24.73200035095215,32.347999572753906z"
                ></path>
              </g>
            </g>
          </g>
        </svg>
      </div>
    </>
  );
};

export default LogoGato;
