import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../../styles/Layouts';


function MyPolicy() {


  
    return (
        <IncomeStyled>
            <InnerLayout>
                <h1>My Policy: {}</h1>
                <div className="policy-deep-details">
                   <h2>Policy Details </h2> 
                 <div className='details-content'>
                    <div>
                    <span>Number: 2795827 </span> 
                   <span>Coverage: Single Trip </span> 
                   <span>Status: Active</span> 
                    </div>
                <div>
                <span>Coverage: Single Trip </span> 
                   <span>Status: Active</span> 
                </div>
                <div>
                <span>Travellers: John Doe  </span> 
                   <span>Jacob</span>
                   <span>Joseph</span>
                </div>
                 </div>
                 
                
                
                </div>
             
            </InnerLayout>
        </IncomeStyled>
    )
}

const IncomeStyled = styled.div`
    display: flex;
    overflow: auto;
    .policy-deep-details{
        height: 300px;
        display: flex;
        flex-direction:column;
        background: #FCF6F9;
        border: 2px solid #FFFFFF;
        box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
        border-radius: 20px;
        padding: 1rem;
        margin: 1rem 0;
        font-size: 2rem;
        gap: .5rem;
        span{
            font-size: 1.5rem;
            font-weight: 600;
       
        }
    }
    .details-content{
        display: flex;
        justify-content: space-between;
        gap: 2rem;
        padding: 10px 28px; 
      
    }
    .details-content span{
        display: flex;
     flex-direction: column;
    }
`;

export default MyPolicy;