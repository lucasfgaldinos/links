import { styled } from 'styled-components'

export const Container = styled.div`
   max-width: 500px;
   margin: 2rem auto;
   display: flex;
   align-items: center;
   justify-content: center;
   gap: 2.5rem;

   @media screen and (max-width: 500px) {
      gap: 2rem;
   }

   > a {
      width: 2.5rem;
      height: 2.5rem;
      transition: 300ms;

      @media screen and (max-width: 500px) {
         width: 2rem;
      }

      svg {
         font-size: 2.5rem;
         color: #3FA2F6;

         @media screen and (max-width: 500px) {
            width: 2rem;
         }
      }
   }

   > a:hover {
      filter: drop-shadow(0 0 0.75rem #3FA2F6);
      transform: scale(1.3);
   }
`
