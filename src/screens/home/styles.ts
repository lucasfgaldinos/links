import { styled } from 'styled-components'

export const Main = styled.main`
   width: 100%;
   min-height: 100vh;
   padding: 2rem;
   animation: fade-in 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
   position: relative;

   @media screen and (max-width: 500px) {
      padding: 1rem;
   }

   @keyframes fade-in {
      0% {
         opacity: 0;
      }
      100% {
         opacity: 1;
      }
   }
`
