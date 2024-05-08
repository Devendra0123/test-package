import{useState as e}from'react';const t=({value:t})=>{const[r,n]=e(t||0);return{count:r,increment:()=>{n((e=>e+1))},decrement:()=>{n((e=>e-1))}}};export{t as useCounter};
