import React, { useState } from 'react'
import styled from 'styled-components'
import { menuItems } from '../../utils/menuItems'

function Navigation({ active, setActive }) {

    return (
        <NavStyled>


            <div className="bottom-nav">

                <div className="text">
                    <h2>Travelex Insurance</h2>

                </div>
                <ul className="menu-items">
                    {menuItems.map((item) => {
                        return <li
                            key={item.id}
                            onClick={() => setActive(item.id)}
                            className={active === item.id ? 'active' : ''}
                        >
                            {item.icon}
                            <span>{item.title}</span>
                        </li>
                    })}
                </ul>
            </div>
        </NavStyled>
    )
}

const NavStyled = styled.nav`
    padding: 2rem 1.5rem;
    width: 100%;
    height: 16%;
    background: rgba(252, 246, 249, 0.78);
    border: 3px solid #FFFFFF;
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    display: flex;
    justify-content: space-between;

    gap: 2rem;
    .bottom-nav{
        width: 90%;
       display:flex;
       justify-content: space-between;

    }
    .user-con{
        height: 100px;
        display: flex;
        align-items: center;
        gap: 1rem;
        img{
            width: 80px;
            height: 80px;
            border-radius: 50%;
            object-fit: cover;
            background: #fcf6f9;
            border: 2px solid #FFFFFF;
            padding: .2rem;
            box-shadow: 0px 1px 17px rgba(0, 0, 0, 0.06);
        }
        h2{
            color: rgba(34, 34, 96, 1);
        }
        p{
            color: rgba(34, 34, 96, .6);
        }
    }

    .menu-items{
      
        display: flex;
       
       
        li{
            
            align-items: center;
            margin-right: 12px ;
         
            font-weight: 500;
            cursor: pointer;
            transition: all .4s ease-in-out;
            color: rgba(34, 34, 96, .6);
            padding-left: 1rem;
        
            i{
                color: rgba(34, 34, 96, 0.6);
                font-size: 1.4rem;
                transition: all .4s ease-in-out;
            }
        }
    }

    .active{
        color: rgba(34, 34, 96, 1) !important;
        i{
            color: rgba(34, 34, 96, 1) !important;
        }
    
    }
`;

export default Navigation