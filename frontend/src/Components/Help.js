import React from 'react';
import { Link } from 'react-router-dom'

const Help = () => {
    return (
        <div className='container main'>
        <div className='row justify-content-end'>
        <div className='col-md-3'><button type="button" className="btn btn-primary"><Link id='link' to='/'>Log In</Link></button></div>
        </div><br />
        <div className='row'>
        <div className='col-md-12 faq'>
            <h4>Frequently Asked Questions</h4>
            <p>The world of child care and early childhood education is always changing - especially here in    BC. We regularly gather articles, opinions and information to share. We hope you’ll find it interesting and valuable, whether you’re a parent, guardian, service provider or student. We encourage you to join the conversation with your own observations, news and questions.</p>
            <table className="table table-bordered faqTable">
              <tbody>
                <tr className='questionRow'>
                  <th scope="row" className='question'>Q.</th>
                  <td><b>Do you have a waiting list?</b></td>
                </tr>
                <tr>
                  <th scope="row" className='answer'>A.</th>
                  <td className='answerText'>The centre generally runs full year round, working from a waiting list. There are peak times when openings are more frequent (September, January, beginning of summer). Otherwise, it is typically a ‘one-out, one-in’ situation. See “REGISTRATION” for waiting list forms.</td>
                </tr>
                <tr className='questionRow'>
                  <th scope="row" className='question'>Q.</th>
                  <td><b>How do I enrol?</b></td>
                </tr>
                <tr>
                  <th scope="row" className='answer'>A.</th>
                  <td>The centre has family visits on Thursday mornings at 9:30 am. Parents can bring their child, tour the centre and then fill out a waiting list form before they leave. If families are unable to come to the tour, parents may stop by the main office during business hours to fill out a waiting list form, or fill out a waiting list form here on our website.  See "REGISTRATION" for waiting list forms.</td>
                </tr>
                <tr className='questionRow'>
                  <th scope="row" className='question'>Q.</th>
                  <td><b>Can I visit before my child’s start date?</b></td>
                </tr>
                <tr>
                  <th scope="row" className='answer' >A.</th>
                  <td>Once a space is confirmed, all families are strongly encouraged to come with their child for a series of visits prior to the actual start date. This allows the child to get comfortable with the Centre and the staff while mom or dad is here with them. This can be done by calling the centre to let us know when you would like to come in.</td>
                </tr>
                <tr className='questionRow'>
                  <th scope="row" className='question'>Q.</th>
                  <td><b>Is Food Provided?</b></td>
                </tr>
                <tr>
                  <th scope="row" className='answer'>A.</th>
                  <td>The daycare provides a hot lunch and two snacks daily for children over 12 months of age. Parents must provide all food for children younger than 12 months, as required by the Ministry.Lunches and snacks are based on the Canada Food Guide, and are professionally catered by Food for Tots <Link to='http://fft.ca/'>http://fft.ca/</Link>.</td>
                </tr>
              </tbody>
            </table>
        </div>
           
        </div>
        </div>

    )}

export default Help;