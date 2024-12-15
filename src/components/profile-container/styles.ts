import { styled } from 'styled-components'
import ProfilePicture from '../../assets/profile-picture.jpeg'

export const Container = styled.div`
   max-width: 500px;
   margin: 0 auto;
   background-color: #ffffff11;
   display: flex;
   flex-direction: column;
   align-items: center;
   gap: 1rem;
   padding: 1rem;

   p {
      font-size: 1.7rem;
      color: #F2F9FF;
      font-weight: 600;
      text-align: center;
      animation: nameFilter 3s infinite alternate;

      @media screen and (max-width: 500px) {
         font-size: 1rem;
      }
   }

   span {
      font-size: 1.3rem;
      color: #F2F9FF;
      font-weight: 300;
      text-align: center;

      @media screen and (max-width: 500px) {
         font-size: 0.8rem;
      }
   }

   @keyframes nameFilter {
      from {
         filter: drop-shadow(0 0 10px #3FA2F6);
      }
   }
`

export const ProfileImg = styled.div`
   background-image: url(${ProfilePicture});
   width: 9.375rem;
   height: 9.375rem;
   background-position: center;
   background-size: cover;
   border-radius: 50%;

   @media screen and (max-width: 500px) {
      width: 5rem;
      height: 5rem;
   }
`
