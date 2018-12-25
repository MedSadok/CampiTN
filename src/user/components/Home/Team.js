import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import "./Home.css";

class Team extends React.Component{
  render()
  {
    return (
    <OwlCarousel
    className="owl-theme"
    items="3"
    loop="true"
    autoplay="true"
    autoplayTimeout="1500"
    autoplayHoverPause="true"
    id="Team"
>     
    <figure class="snip0016">
      <div className="item">
          <img src="https://powerpackelements.com/wp-content/uploads/2017/11/Team-memeber-01.png" alt="" id="team"/>
          <figcaption>
            <h2 id="h2">I think <span id="span">nighttime</span> is dark</h2>
            <p id="p">So you can imagine your fears with less distraction.</p>
          </figcaption>			
      </div>
     </figure>

     <figure class="snip0016">
          <div className="item">
              <img src="http://themes.dfd.name/sunday/shortcodes/wp-content/uploads/2015/03/oneman-380x340.jpg" alt="" id="team"/>
              <figcaption>
                <h2 id="h2">I think <span id="span">nighttime</span> is dark</h2>
                <p id="p">So you can imagine your fears with less distraction.</p>
              </figcaption>			
          </div>
     </figure>

     <figure class="snip0016">
              <div className="item">
                  <img src="http://www.enggonary.com/wp-content/uploads/2017/12/team-member-2.jpg" alt="" id="team"/>
                  <figcaption>
                    <h2 id="h2">I think <span id="span">nighttime</span> is dark</h2>
                    <p id="p">So you can imagine your fears with less distraction.</p>
                  </figcaption>			
              </div>
     </figure>

     <figure class="snip0016">
              <div className="item">
                  <img src="https://dvyvvujm9h0uq.cloudfront.net/com/articles/1515136552-blog-featured1.jpg" alt="" id="team"/>
                  <figcaption>
                    <h2 id="h2">I think <span id="span">nighttime</span> is dark</h2>
                    <p id="p">So you can imagine your fears with less distraction.</p>
                  </figcaption>			
              </div>
     </figure>

     <figure class="snip0016">
              <div className="item">
                  <img src="https://static1.squarespace.com/static/5555dea2e4b0741e9be0509e/t/5731f72bb6aa606748fed768/1462892340716/" alt="" id="team"/>
                  <figcaption>
                    <h2 id="h2">I think <span id="span">nighttime</span> is dark</h2>
                    <p id="p">So you can imagine your fears with less distraction.</p>
                  </figcaption>				
              </div>
     </figure>

</OwlCarousel>
    )
  }
}

export default Team;