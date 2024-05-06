import{useState as t}from'react';const e=()=>{const[e,r]=t(0);return{count:e,increment:()=>{r((t=>t+1))},decrement:()=>{r((t=>t-1))}}};export{e as useCounter};
