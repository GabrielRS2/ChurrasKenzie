import styled from 'styled-components';

const grey = '#1A1A1A;'

export const Container = styled.div`
    display: flex;
    justify-content: center;
    margin: 100px;
    font-family: "Poppins", sans-serif;
    
    .wrapper{
        display: flex;
        flex-direction: column;
        text-align: center;
        gap: 20px;
        
        h2{
            color: var(--white);
            font-weight: bold;
        }
    }
    
    .card{  
        width: 300px;
        cursor: pointer;
    }
    
    .card__inner{
        display: flex;
        justify-content: center;
        gap:40px;
        padding: 20px;

        img{
            width: 250px;
            height: 200px;
            border-radius: 0px 20px 0px 20px;
        }
    }
    
    .card__right{
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: justify ;
        width: 250px;
        height: 200px;
        gap: 10px;
        
        h3{
            color: ${grey};
            font-weight: bold;
        }
        
        .card__link{
            display: flex;
            gap: 10px;
            
        }

        .link{
            display: block;
            text-decoration: none;
            text-transform: uppercase;
            border: 2px solid ${grey};
            padding: 10px;
            position: relative;
            overflow: hidden;
            color: ${grey};
            font-weight: bold;
        }

        .link:before{
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
            width: 100%;
            height: 100%;

            background-color: var(--red-1);
            z-index: -1;
            transition: .5s ease-in;
        }
        
        .link1:before{
            width: 110%;
            height: 0;
            transform: translate(-50%,-50%) rotate(45deg);
        }
        
        .link1:hover:before{
            height: 550%;
        }
    }
    

    .carousel .slick-prev,.carousel .slick-next {
        color: ${grey};
    }

    .slick-slider{
        width: 1000px;
    }
    
    .slick-list{
        border-radius: 15px;
        background: white;
    }
    
    .slick-next{
        right: -55px;
        padding: 20px;
    }
    
    .slick-prev{
        left: -105px;
        padding: 20px;

    }

    .slick-prev:before, .slick-next:before{
        color: ${grey};
        font-size: 50px;
        
    }
    
    .slick-dots li button:before{
        color: ${grey};
        
    }  
    
    @media (max-width: 375px){
        .card{  
            width:280px;
            cursor: pointer;

        }

        .card__inner{
            display: flex;
            flex-direction: column;

            img{
            width: 220px;
            height: 180px;
            border-radius: 0px 20px 0px 20px;
            }
        }

        .card__right{
            width: 250px;
            height: 150px;
        }
        
        .slick-slider{
            width: 250px;
        }

          
        .slick-next{
            right: -25px;
            padding: 20px;
        }
        
        .slick-prev{
            left: -75px;
            padding: 20px;

        }
    }
    
`;
