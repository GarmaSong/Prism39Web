import React from 'react';

const ArrowIcon = () => {
  return (
    <svg
      width="104"
      height="19"
      viewBox="0 0 104 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="1.03198"
        y="0.12439"
        width="55.0246"
        height="3.98729"
        rx="1.99364"
        transform="rotate(15 1.03198 0.12439)"
        fill="#E8E8E8"
      />
      <rect
        width="55.0246"
        height="3.98729"
        rx="1.99364"
        transform="matrix(-0.965926 0.258819 0.258819 0.965926 102.968 0)"
        fill="#E8E8E8"
      />
    </svg>
  );
};

const CircleFrag = () => {
  return (
    <svg
      width="104"
      height="102"
      viewBox="0 0 104 102"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M5.06154 1.91875C6.77097 -0.268028 9.93562 -0.645633 12.0967 1.09614C43.3571 26.2909 72.2289 54.33 98.319 84.8202C100.147 86.9567 99.8283 90.1789 97.6321 91.9348C95.5141 93.6281 92.4341 93.3237 90.6708 91.2635C65.011 61.2829 36.6192 33.71 5.88111 8.93062C3.74208 7.20624 3.36942 4.0834 5.06154 1.91875Z"
          fill="#4066EB"
        />
      </g>
      <defs>
        <filter
          id="filter0_d"
          x="0"
          y="0"
          width="103.508"
          height="101.03"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.3 0 0 0 0 0.3 0 0 0 0 0.3 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export { ArrowIcon, CircleFrag };
