@media screen and (max-width:850px){

    .cabecalho{
        display: flex;
        justify-content:left;
        padding: 3%;
    }

    .cabecalho h1{
      font-size: 28px;
    }

    .cabecalho img{
        max-width:90px;
        max-height:40px;
        width: auto;
        height: auto;
    }
    
    .container-input .input{
        width: 400px;
        height: 330px;
    }

    .container-input{
        display: flex;
        justify-content:space-around;
        flex-direction: column;
        padding: 2% 0 0 4%;
    }

    
     #input-texto{
        width: 400px;
        height: 330px;
        font-size: 20px;
    }

    
#output{
   width: 50%;
   height: 75%;
   margin-top: 9%;
   margin-right: 3%;
}

#output img{
   max-width:250px;
   max-height:200px;
   width: auto;
   height: auto;
   margin-top: 4%;
   margin-left: 25%;
}

.container-bnt button{
   width: 150px;
   height: 50px;
   margin-left: 5%;
   margin-top: 5%;
}

.rodape{
   display: flex;
   flex-direction: column;
   align-items: center;
   margin-top: 24%;
   background:var(--corprincipal) ;
   color: var(--cortitulo);
   width: 68%;
}
    
}

@media screen and (max-width:500px){
   #output{
      width: 60%;
      height: 75%;
      margin-top: 15%;
   }

   #input-texto{
      width: 200px;
      height: 330px;
      font-size: 20px;
  }

   #output img{
      max-width:200px;
      max-height:150px;
      width: auto;
      height: auto;
      margin-top: 4%;
      margin-left: 5%;
   }

   .container-bnt{
      width: 200px;
      flex-wrap: wrap;
   }

   .container-bnt button{
      width: 110px;
      height: 50px;
      margin-left: 30%;
      margin-top: 5%;

   }

   .input p{
      font-size: 10px;
   }

   .rodape h3{
      font-size: 14px;
  }


}