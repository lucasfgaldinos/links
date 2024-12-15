import { styled } from 'styled-components'

export const Container = styled.div`
   max-width: 500px;
   margin: 0 auto 1rem;
   padding: 0.25rem;
   display: flex;
   flex-direction: column;
   gap: 1.5rem;

   a {
      height: 4rem;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-around;
      font-size: 1rem;
      font-weight: 500;
      border: 2px solid transparent;
      background-color: #ffffff11;
      color: #F2F9FF;
      transition: all 300ms;

      @media screen and (max-width: 500px) {
         height: 3.5rem;
         font-size: 0.6rem;
      }
      
      p {
         transition: all 300ms;
      }
      
      svg {
         font-size: 2.5rem;
         transition: all 300ms;

         @media screen and (max-width: 500px) {
            font-size: 1.3rem;
         }
      }

      &:hover {
         border: 2px solid #F2F9FF;

         p {
            filter: drop-shadow(0 0 10px #3FA2F6);
            transform: scale(1.2);
         }

         svg {
            &:first-child {
               filter: drop-shadow(0 0 10px #3FA2F6);
               transform: scale(1.2);
            }
         }

         svg {
            &:last-child {
               filter: drop-shadow(0 0 10px #3FA2F6);
               transform: rotate(-45deg);
            }
         }
      }
   }
`
