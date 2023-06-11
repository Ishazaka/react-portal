import React, { useEffect } from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../../styles/Layouts';
import { policyData } from '../../utils/policyData';


function Dashboard() {

    return (
        <>
   
        <DashboardStyled>

            <InnerLayout>
                <h1>My Policies</h1>

                <div className="stats-con">
                       
                    <div className="chart-con">
                        <div className='policy-heading'> 
                        <span>Number</span> 
                         <span>Coverage</span> 
                         <span>Status</span> 
                          <span>Effective Date</span>
                           <span>Expiration Date</span> </div>
                        {policyData.map((item) => (

                 
                            <div className='total-policy'>

                                <div className='policy-heading'>
                                 <span>{item.number}</span> 
                                  <span>{item.coverage}</span>
                                    <span>{item.status}</span> 
                                     <span>{item.effectiveDate}</span>
                                      <span>{item.expirationDate}</span> 
                                      </div> 
                                      <div className='policy-icons' >
                                        <span>{item.icon1}</span>
                                        <span>{item.icon2}</span>
                                        <span>{item.icon3}</span>
                                      </div>
                                    
                                      </div>
                                    

                        ))}

                        <div className="dashboard-others">
                            <div className="quotes">
                                <h2>Get a Quote</h2>

                            </div>
                            <div className="alerts">
                                <h2>Travel Alerts</h2>

                            </div>
                            <div className="faqs">
                                <h2>FAQs</h2>

                            </div>
                        </div>
                    </div>

                </div>
            </InnerLayout>
        </DashboardStyled>
        </>
    )
}

const DashboardStyled = styled.div`
    .stats-con{
        display: grid;
        gap: 2rem;
        .policy-heading{
          width: 70%;
          display:flex;
          justify-content:space-between;
        padding-left: 4%;
        padding-top: 2%;
    
        }

       
        .chart-con{
     
            height: 400px;
            .dashboard-others{
               height: 280px;
                display:flex;
                justify-content: space-between; 
                gap: 2rem;
                margin-top: 2rem;
                
                .quotes, .alerts, .faqs{
                    background: #FCF6F9;
                    border: 2px solid #FFFFFF;
                    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
                    border-radius: 20px;
                    width: 320px;
                    padding: 1rem;
                    p{
                        font-size: 3.5rem;
                        font-weight: 700;
                    }
                }

            
            }
        }
        .total-policy{
            display: flex;
            align-items: center;
            justify-content: space-between;
            background: #FCF6F9;
            border: 2px solid #FFFFFF;
            box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
            border-radius: 20px;
            height: 100px;
            padding: 1rem;
            margin: 1rem 0;
            font-size: 2rem;
            gap: .5rem;
            span{
                font-size: 1.2rem;
                font-weight: 600;
               
            }
        }
    .policy-icons span{
        padding: 0 5px;
    }
      
        }
    }
  
`;

export default Dashboard