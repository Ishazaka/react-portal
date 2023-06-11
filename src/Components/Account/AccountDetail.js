import React from 'react'
import styled from 'styled-components'

import { InnerLayout } from '../../styles/Layouts';


function AccountDetail() {
   
    return (
        <AccountData>
            <InnerLayout>
                <h1>Dashboard</h1>
                <h2 className="account-detail"> Policy One <span>Troy Petry</span>
                   
                </h2>
                <div className="account-box">
                  
                   
                </div>
            </InnerLayout>
        </AccountData>
    )
}

const AccountData = styled.div`
    display: flex;
    overflow: auto;
    .account-detail{
        display: flex;
        justify-content: center;
        align-items: center;
        background: #FCF6F9;
        border: 2px solid #FFFFFF;
        box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
        border-radius: 20px;
        padding: 1rem;
        margin: 1rem 0;
        font-size: 2rem;
        gap: .5rem;
        span{
            font-size: 2.5rem;
            font-weight: 800;
            color: var(--color-green);
        }
    }
    .account-box{
        display: flex;
        gap: 2rem;
        .incomes{
            flex: 1;
        }
    }
`;

export default AccountDetail