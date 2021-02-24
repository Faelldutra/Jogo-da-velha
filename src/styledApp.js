import styled from 'styled-components';

export const Score = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 400px;
    height: 200px;
    margin: auto;

    .header{
      display: flex;
      width: 100%;
      height: 30%;
      border: solid black 1px;
      align-items: center;
      background: white;

      h1{
        width: 100%;
        font-size: 3rem;
        text-align: center

      }
    }
    .team{
      display: flex;
      background: white;
      width: 100%;
      height: 40%;
      border: solid black 1px;
      justify-content: space-between;
      align-items: center;
     

      .x{
        display: flex;
        width: 50%;
        border-right: solid black 1px;
        padding-left: 5%;
        
        h1{
            font-size: 3.5rem;      
        }
      }
      .o{
        display: flex;
        width: 50%;
        padding-left: 5%;

        h1{
          font-size: 3.5rem;
        }
      }
    }
`

export const Game = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 400px;
    height: 400px;
    margin: auto;

  .body{
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(3,1fr);

    button{
      font-size: 4rem;
      border: solid black 1px;
      line-height:0;
      background: white;
    }  
  }
  .message{
    width: 100%;
    display: flex;
    padding: 5% 0;

    p{
      width: 100%;
      font-size: 2rem;
      text-align: center;
    }
  }
  .btn{
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-between;

    button{
      width: 50%;
      height:100%;
      background: white;
      font-size: 1.5rem;
      border: solid 1px black;
    }
    button:hover{
      background: grey;
      color: black;
    }
  }

`