import React from 'react';
import { Link } from 'react-router-dom'

const About = () =>{
    return (
        <div className='container main'>
        <div className='row justify-content-end'>
        <div className='col-md-3'><button type="button" className="btn btn-primary"><Link id='link' to='/'>Log In</Link></button></div>
        </div><br />
        <div className='row'>
        <div className='col-md-12 faq'>
          <h4>This is all about us</h4>
          <p><b>Our team of 150+ staff provide therapeutic services each year to more than 3,100 children. Our professionals include: paediatric psychologists, family service and key workers, occupational therapists, speech-language pathologists, physiotherapists, early childhood educators, supported child development specialists, recreation specialists, dietician, doctor, victims services workers, social workers and police.</b></p>
          <p>We facilitate work with community leaders to solve the issues facing children and families. We do so with integrity, caring and compassion. We consistently challenge ourselves to improve upon best practices and lead our field. We know it takes unique solutions to meet unique needs, and the unique children we serve motivate us to do better every single day.</p>
          <p>Aliquam molestie at urna eu malesuada. Morbi dictum lorem at congue ullamcorper. Proin vitae nisl sollicitudin ex bibendum interdum eget quis lorem. Integer maximus non dolor ac finibus. Donec vehicula dui massa, sed luctus nibh eleifend eu. Donec tincidunt justo et molestie rutrum. In dapibus, felis ac ullamcorper consequat, odio ex volutpat justo, in fermentum nibh enim vel nisl. Integer posuere justo ac augue ullamcorper malesuada. Nam rutrum, felis non gravida dictum, erat magna lacinia nunc, eu feugiat mi tortor eu metus.

          Aenean aliquam nisi vitae quam fringilla dapibus. Maecenas imperdiet tristique sollicitudin. Curabitur a lectus sit amet dui porta tincidunt. Integer pellentesque tristique metus. Etiam in arcu non ligula pellentesque pretium et id purus. Ut venenatis odio lorem, sit amet laoreet metus tincidunt non. Duis vitae ornare augue.</p>
          </div>
           
        </div>
        </div>
    )
  }

export default About;