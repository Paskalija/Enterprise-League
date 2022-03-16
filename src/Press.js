import React from 'react';
import { Container } from 'react-bootstrap';
import './css/press.css';


function Press() {
    return (
        <Container>
            <div class='homepage'>
                <h1 className='col-md-12' class='text'>
                    <span class="greytext">Enterprise League</span>
                    <span class="bluetext"> Press</span>
                </h1>
                <div className='col-md-12'>
                    <h3 >
                        <a href='/' class='links'>In The News</a>
                        <a href='press' class='links underScore'> Press </a>
                    </h3>
                </div>
            </div>
            <div class="card flex-row col-md-10"><img className="card-img-left example-card-img-responsive" src="https://enterpriseleague.com/public/img/press/press-img-three.png" />
                <div class="card-body">
                    <h4 class="card-title h5 h4-sm">2020 in review: A letter from our CEO and Co-Founder</h4>
                    <p> London, UK, December 30th, 2020</p>
                    <p class="card-text">
                        Another year is drawing to a close; and we once again find ourselves planning for the future, but also reflecting on the events of 2020 – we hope that despite the difficulties and uncertainty this year has brought, you have managed to stay strong and focused on the things you can control.</p>
                </div>
            </div>
            <div class="card flex-row col-md-10"><img className="card-img-left example-card-img-responsive" src="https://enterpriseleague.com/public/img/press/press-img-two.png" />
                <div class="card-body">
                    <h4 class="card-title h5 h4-sm">Over 100,000 companies join business platform since the virus crisis started</h4>
                    <p>London, UK, October 14th, 2020</p>
                    <p class="card-text">

                        London, UK, Oct 14th, Enterprise League today announced that it registered a huge increase of over 100,000 SMEs joining its business platform. Companies seek to minimise their business loss after their forced closure in more than 40 countries worldwide and ahead of a second lockdown.
                        “The only way for companies to survive is to reinvent themselves” said Enterprise League’s CTO, Atanas Georgiev.</p>
                </div>
            </div>
            <div class="card flex-row col-md-10"><img className="card-img-left example-card-img-responsive" src="https://enterpriseleague.com/public/img/press/press-img-one.png" />
                <div class="card-body">
                    <h4 class="card-title h5 h4-sm">The Solution to the Global Business #Lockdown</h4>
                    <p>London, UK - March 26, 2020</p>
                    <p class="card-text">

                        Enterprise League today has announced that the B2B platform through which companies collaborate remotely is open to SMEs for free. This action comes as an attempt to help SMEs minimise the losses they are incurring due to the forced lockdown imposed in more than 40 countries worldwide.
                        Enterprise League facilitates the way SMEs find new business partnerships and deals through a sophisticated software powered by AI and machine learning.</p>
                </div>
            </div>
            <div class='footer1 col-md-12' >
                <div className='col-md-4 displayFlex'>
                    <img class='imagefooter1' src="https://enterpriseleague.com/public/img/featured/news/media.svg" />
                    <div>
                        <h1>Media</h1>
                        <p><a class="link" href='/'>Download </a>our logos and <br>
                        </br>brand photography for media use.</p>
                    </div>
                </div>
                <div className='col-md-4 displayFlex'>
                    <img class='imagefooter1' src="https://enterpriseleague.com/public/img/featured/news/contact.svg" />
                    <div>
                        <h1>Contact</h1>
                        <p>For additional information contact us on
                            <br>
                            </br>
                            <a href='/' class="link" >info@enterpriseleague.com </a></p>
                    </div>
                </div>

            </div>
        </Container>
    );
}

export default Press;
